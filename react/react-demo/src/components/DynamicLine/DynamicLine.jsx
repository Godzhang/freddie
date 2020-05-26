import React from "react";
import { Chart, registerAnimation } from "@antv/g2";

const data = [];
function createRandomNum(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function createData() {
  for (let year = 2010; year <= 2020; year++) {
    for (let month = 1; month <= 12; month++) {
      const date = `${year}-${month < 10 ? "0" : ""}${month}`;
      const nlp = createRandomNum(0, 1000);
      const blockchain = createRandomNum(0, 1000);
      data.push({ date, nlp, blockchain });
    }
  }
}
createData();
let initData = data.slice(0, 10);
let lastData = data.slice(10);

class DynamicLine extends React.Component {
  constructor(props) {
    super(props);
    this.chart = null;
    this.chartId = "dynamic-chart";
    this.interval = null;
    this.state = {};
  }
  componentDidMount() {
    this.registerAnimation();
    this.initChart();
    setTimeout(() => {
      // this.updateChart();
    }, 3000);
  }
  registerAnimation() {}
  initChart() {
    this.chart = new Chart({
      container: this.chartId,
      autoFit: true,
      height: 500,
      padding: [50, 20, 70, 50],
    });
    this.chart.data(initData);
    this.chart.scale({
      nlp: {
        min: 0,
        max: 1000,
      },
      blockchain: {
        min: 0,
        max: 1000,
      },
    });
    this.chart.axis("nlp", false);

    this.chart
      .line()
      .position("date*blockchain")
      .color("##1890ff")
      .shape("smooth");
    this.chart.line().position("date*nlp").color("#2fc25b").shape("smooth");

    const lines = this.chart.geometries;
    lines.forEach((line) => {
      line.animate({
        appear: { duration: 10000 },
      });
    });

    this.chart.render();
  }
  updateChart() {
    const update = () => {
      if (lastData.length > 0) {
        initData.push(lastData.shift());
        initData.shift();
      } else {
        initData = data;
        clearInterval(this.interval);
      }
      this.chart.changeData(initData);
    };
    this.interval = setInterval(update, 500);
  }
  render() {
    return <div id={this.chartId}></div>;
  }
}

export default DynamicLine;
