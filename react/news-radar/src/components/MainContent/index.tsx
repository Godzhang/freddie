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
  ListParams,
  SubParams,
} from "@/common/api/list";
import { calcPageItems } from "./util";
import { AxiosPromise } from "axios";
import emitter from "@/common/global/eventbus";
import "./index.scss";

type SwitchMethod = "prev" | "next";
type cloudWordsStructure = string[][];
interface MainContentProps extends RouteComponentProps {}

const methodMap: { [key: string]: Function } = {
  "0": getLatestNews,
  "1": getHotNews,
  "2": getTrending,
};

const MainContent: FC<MainContentProps> = (props) => {
  // const { pathname } = props.location;
  const mainBody = useRef<HTMLDivElement>(null);
  const carousel = useRef<Carousel>(null);
  const [pathname, setPathname] = useState(props.location.pathname);
  const [wrapperStyle, setWrapperStyle] = useState({});
  const [itemHeight, setItemHeight] = useState(0);
  const [cloudWords, setCloudWords] = useState<cloudWordsStructure>([
    [],
    [],
    [],
  ]);
  const [articleList, setArticleList] = useState<NewsStructure[]>([]);
  const [articleParams, setArticleParams] = useState<ListParams>({
    subType: 1,
    pageSize: 30,
    pageNumber: 1,
  });

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
    if (pathname === "/") {
      getKeywords().then((res) => {
        const { result } = res.data;
        const cws: cloudWordsStructure = [];
        for (let key in result) {
          cws[cws.length] = result[key].split(",");
        }
        setCloudWords(cws);
      });
    }
    emitter.on("request-change", (params: SubParams) => {
      if (params.hasOwnProperty("subPathId")) {
        const spi = params.subPathId;
        delete params.subPathId;
        setPathname(`/sub/${spi}`);
      }
      setArticleParams({ ...articleParams, ...params });
    });
  }, []);

  useEffect(() => {
    setPathname(props.location.pathname);
  }, [props.location.pathname]);

  useEffect(() => {
    let request!: AxiosPromise;
    if (pathname === "/") {
      request = getMySubList(articleParams);
    } else {
      let id = pathname.split("/").pop();
      if (id) {
        request = methodMap[id](articleParams);
      }
    }
    request.then((res) => {
      let arts = res.data.result;
      let total = 30;
      for (let i = arts.length; i < total; i++) {
        arts.push({ ...arts[0] });
      }
      setArticleList(arts);
      // setArticleList(res.data.result);
    });
  }, [pathname, articleParams]);

  const switchCarousel = (dir: SwitchMethod) => {
    if (carousel.current) {
      carousel.current[dir]();
    }
  };

  const createCarouselChildren = (articleList: NewsStructure[]) => {
    if (!articleList.length) {
      return (
        <div className="main-item">
          <div className="item-content" style={{ height: itemHeight + "px" }}>
            <Row gutter={90}>
              <Col span={8}>
                <LatestNewsWordCloud words={cloudWords[0]} />
              </Col>
              <Col span={8}>
                <HotNewsWordCloud words={cloudWords[1]} />
              </Col>
              <Col span={8}>
                <TrendingWordCloud words={cloudWords[2]} />
              </Col>
            </Row>
          </div>
        </div>
      );
    } else {
      const pageItems = calcPageItems(articleList);
      return (
        <>
          <div className="main-item">
            <div className="item-content" style={{ height: itemHeight + "px" }}>
              <Row gutter={90}>
                <Col span={8}>
                  <LatestNewsWordCloud words={cloudWords[0]} />
                  {/* <TitleOnly info={articleList[0]} /> */}
                  {/* <TitleWithAbstract info={articleList[10]} /> */}
                </Col>
                <Col span={8}>
                  <HotNewsWordCloud words={cloudWords[1]} />
                  {/* <TitleWithMedia info={articleList[30]} /> */}
                </Col>
                <Col span={8}>
                  <TrendingWordCloud words={cloudWords[2]} />
                  {/* <TitleWithAbstractAndMedia info={articleList[33]} /> */}
                </Col>
              </Row>
            </div>
          </div>
          <div className="main-item">
            <div className="item-content" style={{ height: itemHeight + "px" }}>
              <Row gutter={90}>
                <Col span={8}></Col>
                <Col span={8}></Col>
                <Col span={8}></Col>
              </Row>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div className="main-body" ref={mainBody} style={wrapperStyle}>
      <Carousel dots={false} ref={carousel}>
        {createCarouselChildren(articleList)}
        {/* <div className="main-item">
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
        </div> */}
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
