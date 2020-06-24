import React from "react";
import "./ChartParams.less";
import { Collapse } from "antd";
import { connect } from "react-redux";
import personalConfig from "../../../config/personalAttrs";
import { bindActionCreators } from "redux";
import actions from "../../../redux/actions/index";
import ConfigText from "../../config/ConfigText/ConfigText.jsx";
import ConfigTheme from "../../config/ConfigTheme/ConfigTheme.jsx";
import ConfigLegend from "../../config/ConfigLegend/ConfigLegend.jsx";
import ConfigDataFormat from "../../config/ConfigDataFormat/ConfigDataFormat.jsx";

const { Panel } = Collapse;

const type = "lineConfig";

class ChartParams extends React.Component {
  componentWillMount() {
    const config = personalConfig[type];
    if (config) {
      this.props.actions.addPersonalConfig(config);
    }
  }
  render() {
    return (
      <Collapse
        defaultActiveKey={["2"]}
        accordion={true}
        className="chart-params"
      >
        <Panel header="文字设置" key="1">
          <ConfigText />
        </Panel>
        <Panel header="颜色主题" key="2">
          <ConfigTheme />
        </Panel>
        <Panel header="图例" key="3">
          <ConfigLegend />
        </Panel>
        <Panel header="数据格式" key="4">
          <ConfigDataFormat />
        </Panel>
      </Collapse>
    );
  }
}

const mapStateToProps = (state) => ({
  chartConfig: state.chartConfig,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...actions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChartParams);
