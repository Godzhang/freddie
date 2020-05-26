import React from "react";
import "./Chart.scss";
import LineChart from "../../components/LineChart/LineChart.jsx";
import DynamicChart from "../../components/DynamicChart/DynamicChart.jsx";
import DynamicLine from "../../components/DynamicLine/DynamicLine.jsx";

class ChartDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="chart">
        <h3>ChartDetail</h3>
        <hr />
        <div className="wrapper">
          {/* <DynamicChart /> */}
          <DynamicLine />
        </div>
      </div>
    );
  }
}

export default ChartDetail;
