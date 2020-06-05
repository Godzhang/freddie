import React from "react";
import "./ConfigText.scss";
import { Switch, Input, InputNumber } from "antd";

class ConfigText extends React.Component {
  render() {
    return (
      <div className="config-group">
        <div className="config-item">
          <span>显示标题区域</span>
          <Switch size="small" defaultChecked={true} />
        </div>
        <div className="config-item">
          <span>图表标题</span>
          <Input defaultValue="标题" />
        </div>
        <div className="config-item">
          <span>图表标题字号</span>
          <InputNumber min={1} max={10} defaultValue={3} />
        </div>
      </div>
    );
  }
}

export default ConfigText;
