import React from "react";
import "./ConfigText.scss";
import { Switch, Input, InputNumber } from "antd";
import { connect } from "react-redux";

class ConfigText extends React.Component {
  render() {
    const { textConfig = {} } = this.props;
    return (
      <div className="config-group">
        {Object.keys(textConfig).map((key) => (
          <div className="config-item" key={key}>
            <span>{textConfig[key].label}</span>
            {textConfig[key].component}
          </div>
        ))}
        {/* <div className="config-item">
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
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  textConfig: state.textConfig,
});

export default connect(mapStateToProps)(ConfigText);
