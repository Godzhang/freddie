import React from "react";
import { Row, Col, Button } from "antd";

class DetailHeader extends React.Component {
  render() {
    return (
      <Row className="detail-header">
        <Col span={8}>
          <div className="title">我的项目/title</div>
        </Col>
        <Col span={5} offset={6}>
          <Row gutter={5}>
            <Col span={10}>15:47 已保存</Col>
            <Col span={7}>
              <Button>保存</Button>
            </Col>
            <Col span={7}>
              <Button>分享</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default DetailHeader;
