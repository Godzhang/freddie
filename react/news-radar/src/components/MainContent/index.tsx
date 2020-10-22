import React, { FC, useRef, useEffect, useState } from "react";
import { Row, Col, Carousel } from "antd";
import { withRouter, RouteComponentProps } from "react-router-dom";
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
import { NewsStructure } from "../News/base";
import { ArrowLeft, ArrowRight } from "@/images";
import { getKeywords } from "@/common/api/info";
import {
  getMySubList,
  getLatestNews,
  getHotNews,
  getTrending,
} from "@/common/api/list";
import "./index.scss";
import { AxiosPromise } from "axios";

type SwitchMethod = "prev" | "next";
type cloudWordsStructure = string[][];
interface MainContentProps extends RouteComponentProps {}

const methodMap: { [key: string]: Function } = {
  "0": getLatestNews,
  "1": getHotNews,
  "2": getTrending,
};

const MainContent: FC<MainContentProps> = (props) => {
  const mainBody = useRef<HTMLDivElement>(null);
  const carousel = useRef<Carousel>(null);
  const [wrapperStyle, setWrapperStyle] = useState({});
  const [itemHeight, setItemHeight] = useState(0);
  const [cloudWords, setCloudWords] = useState<cloudWordsStructure>([
    [],
    [],
    [],
  ]);
  const [articleList, setArticleList] = useState<NewsStructure[]>([]);

  const getArticles = () => {
    const { pathname } = props.location;
    let request!: AxiosPromise;
    const params = {
      subType: 1,
      pageSize: 30,
      pageNumber: 1,
    };
    if (pathname === "/") {
      request = getMySubList(params);
    } else {
      let id = pathname.split("/").pop();
      if (id) {
        request = methodMap[id](params);
      }
    }
    request.then((res) => {
      setArticleList(res.data.result);
    });
  };

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
    getArticles();
  }, [props]);

  const switchCarousel = (dir: SwitchMethod) => {
    if (carousel.current) {
      carousel.current[dir]();
    }
  };
  console.log(articleList);
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
