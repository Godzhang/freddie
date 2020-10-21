import React, { FC, useRef, useEffect, useState } from "react";
import { Row, Col, Carousel } from "antd";
import { withRouter } from "react-router-dom";
import {
  TitleOnly,
  TitleWithAbstract,
  TitleWithAbstractAndMedia,
  TitleWithMedia,
} from "@/components/News/index.tsx";
import {
  LatestNewsWordCloud,
  HotNewsWordCloud,
  TrendingWordCloud,
} from "@/components/WordCloud/index";
import { ArrowLeft, ArrowRight } from "@/images";
import { getKeywords } from "@/common/api/info";
import "./index.scss";

type SwitchMethod = "prev" | "next";
type cloudWordsStructure = string[][];

const MainContent: FC = (props) => {
  const mainBody = useRef<HTMLDivElement>(null);
  const carousel = useRef<Carousel>(null);
  const [wrapperStyle, setWrapperStyle] = useState({});
  const [itemHeight, setItemHeight] = useState(0);
  const [cloudWords, setCloudWords] = useState<cloudWordsStructure>([
    [],
    [],
    [],
  ]);

  useEffect(() => {
    if (mainBody.current) {
      const parent = mainBody.current.parentNode as HTMLDivElement;
      let { offsetWidth, offsetHeight } = parent;
      setWrapperStyle({
        width: offsetWidth + "px",
        height: offsetHeight + "px",
      });
      setItemHeight(offsetHeight);
    }
    getKeywords().then((res) => {
      const { result } = res.data;
      const cws: cloudWordsStructure = [];
      for (let key in result) {
        cws[cws.length] = result[key].split(",");
      }
      setCloudWords(cws);
    });
  }, []);

  useEffect(() => {
    console.log("maincontent update");
  }, [props]);

  const switchCarousel = (dir: SwitchMethod) => {
    if (carousel.current) {
      carousel.current[dir]();
    }
  };

  return (
    <div className="main-body" ref={mainBody} style={wrapperStyle}>
      <Carousel dots={false} ref={carousel}>
        <div className="main-item">
          <div className="item-content" style={{ height: itemHeight + "px" }}>
            <Row gutter={90}>
              <Col span={8}>
                <LatestNewsWordCloud words={cloudWords[0]} />
                <TitleOnly />
                <TitleWithAbstract />
              </Col>
              <Col span={8}>
                <HotNewsWordCloud words={cloudWords[1]} />
                <TitleWithMedia />
              </Col>
              <Col span={8}>
                <TrendingWordCloud words={cloudWords[2]} />
                <TitleWithAbstractAndMedia />
              </Col>
            </Row>
          </div>
        </div>
        <div className="main-item">
          <div
            className="item-content"
            style={{ backgroundColor: "#f00", height: itemHeight + "px" }}
          ></div>
        </div>
      </Carousel>
      <ArrowLeft
        className="arrow arrow-left"
        onClick={() => switchCarousel("prev")}
      ></ArrowLeft>
      <ArrowRight
        className="arrow arrow-right"
        onClick={() => switchCarousel("next")}
      ></ArrowRight>
    </div>
  );
};

export default withRouter(MainContent);
