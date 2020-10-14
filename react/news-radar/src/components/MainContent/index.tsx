import React, { FC, useRef, useEffect, useState } from "react";
import { Row, Col, Carousel } from "antd";
import News from "@/components/News/index";
import WordCloud, {
  LatestNewsWordCloud,
  HotNewsWordCloud,
  TrendingWordCloud,
} from "@/components/WordCloud/index";
import "./index.scss";

type SwitchMethod = "prev" | "next";

const MainContent: FC = (props) => {
  const mainBody = useRef<HTMLDivElement>(null);
  const carousel = useRef<Carousel>(null);
  const [wrapperStyle, setWrapperStyle] = useState({});
  const [itemHeight, setItemHeight] = useState(0);

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
  }, []);

  const switchCarousel = (dir: SwitchMethod) => {
    if (carousel.current) {
      carousel.current[dir]();
    }
  };

  const latestNewsWords = [
    "word-cloud",
    "w-2",
    "w-3",
    "w-4",
    "w-5",
    "w-6",
    "w-7",
    "w-8",
    "w-9",
    "w-10",
    "w-11",
    "w-12",
    "w-13",
  ];
  return (
    <div className="main-body" ref={mainBody} style={wrapperStyle}>
      <Carousel dots={false} ref={carousel}>
        <div className="main-item">
          <div
            className="item-content"
            style={{ backgroundColor: "#08c", height: itemHeight + "px" }}
          ></div>
        </div>
        <div className="main-item">
          <div
            className="item-content"
            style={{ backgroundColor: "#f00", height: itemHeight + "px" }}
          ></div>
        </div>
      </Carousel>
      <i
        className="arrow arrow-left"
        onClick={() => switchCarousel("prev")}
      ></i>
      <i
        className="arrow arrow-right"
        onClick={() => switchCarousel("next")}
      ></i>
    </div>
  );
};

export default MainContent;
