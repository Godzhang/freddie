import React from "react";
import "./MainHeader.scss";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";

class MainHeader extends React.Component {
  render() {
    return (
      <Row className="main-header">
        <Col span={2}>
          <img src="" alt="tutu-logo..." />
        </Col>
        <Col span={6} offset={2}>
          <Row>
            <Col span={8}>
              <Link to="/">首页</Link>
            </Col>
            <Col span={8}>
              <Link to="/chartMenu">选择图表</Link>
            </Col>
            <Col span={8}>
              <Link to="/personal">我的项目</Link>
            </Col>
          </Row>
        </Col>
        <Col span={6} offset={8}>
          <Row>
            <Col span={8}>
              <Button type="link">反馈</Button>
            </Col>
            <Col span={8}>
              <Button type="link">帮助</Button>
            </Col>
            <Col span={8}>
              <Button type="link">用户名</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default MainHeader;
