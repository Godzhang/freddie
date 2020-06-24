import React from "react";
import "./ChartDisplay.less";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import sizeActions from "../../../redux/actions/sizeAction";
import loadable from "@loadable/component";
import SizeBar from "../SizeBar/SizeBar";

function chartDisplay(props) {
  const { chartType, chartName } = props;
  const AsyncChart = loadable(() =>
    import(`@/components/charts/${chartType}/${chartName}/${chartName}`)
  );

  class ChartDisplay extends React.Component {
    constructor(props) {
      super(props);
    }
    componentWillMount() {
      this.props.sizeActions.calcChartSize();
    }
    render() {
      return (
        <div className="chart-display" ref="display">
          <div className="chart-wrap">
            <AsyncChart />
          </div>
          <div className="size-bar-box">
            <SizeBar />
          </div>
        </div>
      );
    }
  }

  const mapStateToProps = (state) => ({
    chartConfig: state.chartConfig,
    chartSize: state.chartSize,
  });

  const mapDispatchToProps = (dispatch) => ({
    sizeActions: bindActionCreators(sizeActions, dispatch),
  });

  const ChartWithState = connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChartDisplay);

  return <ChartWithState />;
}

export default chartDisplay;
