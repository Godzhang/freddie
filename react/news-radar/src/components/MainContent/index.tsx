import React, { FC, useRef, useEffect, useState } from "react";
import { Row, Col, Carousel } from "antd";
import News from "@/components/News/index";
import WordCloud, {
  LatestNewsWordCloud,
  HotNewsWordCloud,
  TrendingWordCloud,
} from "@/components/WordCloud/index";
import "./index.scss";

const MainContent: FC = (props) => {
  const mainBody = useRef<HTMLDivElement>(null);
  const [itemHeight, setItemHeight] = useState(0);

  useEffect(() => {
    if (mainBody.current) {
      const height = mainBody.current.offsetHeight;
      setItemHeight(height);
    }
  }, []);

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
    <div className="main-body" ref={mainBody}>
      <Carousel dots={false}>
        <div className="main-item" style={{ height: itemHeight + "px" }}></div>
      </Carousel>
      {/* <div className="main-container">
        <div className="main-list">
          <div className="main-item"></div>
        </div>
      </div> */}
    </div>
    // <div className="main-body">
    //   <div className="main-container">
    //     <div className="main-content">
    //       <Row gutter={90}>
    //         <Col span={8}>
    //           <LatestNewsWordCloud words={latestNewsWords} />
    //           <News />
    //         </Col>
    //         <Col span={8}>
    //           <HotNewsWordCloud words={latestNewsWords} />
    //         </Col>
    //         <Col span={8}>
    //           <TrendingWordCloud words={latestNewsWords} />
    //         </Col>
    //       </Row>
    //     </div>
    //   </div>
    // </div>
  );
};

export default MainContent;
