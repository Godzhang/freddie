import React from "react";
import "./ChartPreview.less";
import loadable from "@loadable/component";

class ChartPreview extends React.Component {
  constructor(props) {
    super(props);
    this.chartType = this.props.match.params.type;
    this.chartName = this.props.match.params.name;
  }

  render() {
    const AsyncChart = loadable(() =>
        import(`@/components/charts/${this.chartType}/${this.chartName}/${this.chartName}`)
      );
    return (
      <div className="chart-preview">
        <AsyncChart />
      </div>
    );
  }
}

export default ChartPreview;
