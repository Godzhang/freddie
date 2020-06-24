import React from "react";
import Header from "../../components/common/Header/Header";
import ChartDisplay from "../../components/detail/ChartDisplay/ChartDisplay";
import ChartConfig from "../../components/detail/ChartConfig/ChartConfig";
import "./ChartDetail.less";

class ChartDetail extends React.Component {
  constructor(props) {
    super(props);
    this.chartType = this.props.match.params.type;
    this.chartName = this.props.match.params.name;
  }
  render() {
    return (
      <div className="chart-detail">
        <Header path={this.props.match.url} />
        <div className="wrapper">
          <div className="display">
            <ChartDisplay
              chartType={this.chartType}
              chartName={this.chartName}
            />
          </div>
          <div className="setting">
            <ChartConfig
              chartType={this.chartType}
              chartName={this.chartName}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ChartDetail;
