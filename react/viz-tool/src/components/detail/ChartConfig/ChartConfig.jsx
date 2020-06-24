import React from "react";
import "./ChartConfig.less";
import ChartSheet from "../ChartSheet/ChartSheet.jsx";
import ChartParams from "../ChartParams/ChartParams.jsx";
import { Tabs } from "antd";
import { connect } from "react-redux";

const { TabPane } = Tabs;

class ChartConfig extends React.Component {
  render() {
    return (
      <Tabs
        className="chart-config-tabs"
        defaultActiveKey="chartConfig"
        size="large"
      >
        <TabPane tab="数据编辑" key="dataConfig">
          <ChartSheet />
        </TabPane>
        <TabPane tab="图表设置" key="chartConfig">
          <ChartParams />
        </TabPane>
      </Tabs>
    );
  }
}

export default ChartConfig;

// const mapStateToProps = (state, ownProps) => {
//   console.log(state);
//   return {};
// };
// const mapDispatchToProps = (dispatch, ownProps) => {
//   console.log(dispatch);
//   return {};
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ChartConfig);
