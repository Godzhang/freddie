import React from "react";
import "./ConfigText.less";
import { connect } from "react-redux";
import utils from "@/common/utils/utils.js";
import { bindActionCreators } from "redux";
import actions from "@/redux/actions/index";

class ConfigText extends React.Component {
  render() {
    let { chartConfig = {} } = this.props;
    return (
      <div className="config-group">
        {Object.keys(chartConfig)
          .filter(
            (key) =>
              chartConfig[key].visible && chartConfig[key].type === "text"
          )
          .map((key) => (
            <div className="config-item" key={key}>
              <span>{chartConfig[key].label}</span>
              {utils.getBaseComponent(chartConfig[key])}
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  chartConfig: state.chartConfig,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...actions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfigText);
