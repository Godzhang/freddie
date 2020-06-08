import React from "react";
import "./ChartParams.scss";
import { Collapse } from "antd";
import ConfigText from "../../config/ConfigText/ConfigText.jsx";
import { connect } from "react-redux";

const { Panel } = Collapse;

class ChartParams extends React.Component {
  render() {
    // const { textConfig = {} } = this.props;
    return (
      <Collapse defaultActiveKey={["1"]} accordion={false}>
        {/* <Panel header={textConfig.configTitle} key={textConfig.configTitle}>
          <div className="config-group">
            {Object.keys(textConfig)
              .filter((item) => item !== "configTitle")
              .map((item) => (
                <div className="config-item" key={textConfig[item].label}>
                  <span>{textConfig[item].label}</span>
                  {textConfig[item].component}
                </div>
              ))}
          </div>
        </Panel> */}
        <Panel header="文字设置" key="1">
          <ConfigText />
        </Panel>
      </Collapse>
    );
  }
}

const mapStateToProps = (state) => ({
  textConfig: state.textConfig,
});

export default connect(mapStateToProps)(ChartParams);
