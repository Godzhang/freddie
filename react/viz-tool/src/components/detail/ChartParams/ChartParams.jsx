import React from "react";
import "./ChartParams.scss";
import { Collapse } from "antd";
import ConfigText from "../../config/ConfigText/ConfigText.jsx";

const { Panel } = Collapse;

class ChartParams extends React.Component {
  render() {
    return (
      <Collapse accordion={false}>
        <Panel header="文字设置" key="1">
          <ConfigText />
        </Panel>
      </Collapse>
    );
  }
}

export default ChartParams;
