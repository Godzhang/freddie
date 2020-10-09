import React, { FC } from "react";
import { Row, Col } from "antd";
import News from "@/components/News/index";
import "./index.scss";

const MainContent: FC = (props) => {
  return (
    <Row className="main-content" gutter={90}>
      <Col span={8}>
        <News />
      </Col>
      <Col span={8}>col-2</Col>
      <Col span={8}>col-3</Col>
    </Row>
  );
};

export default MainContent;
