import React from "react";
import { Chart, registerAnimation } from "@antv/g2";
import DataSet from "@antv/data-set";
import Slider from "@antv/g2/lib/chart/controller/slider";
import { registerComponentController } from "@antv/g2/lib/core";
// import data from "../LineChart/data.json";
import "./index-3.scss";

registerComponentController("slider", Slider);

const data = [];
function createRandomNum(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function createData() {
  for (let year = 2010; year <= 2011; year++) {
    for (let month = 1; month <= 12; month++) {
      const date = `${year}-${month < 10 ? "0" : ""}${month}`;
      const nlp = createRandomNum(0, 1000);
      const blockchain = createRandomNum(0, 1000);
      data.push({ date, nlp, blockchain });
    }
  }
}
createData();
let initCount = 5;
let initData = data.slice(0, initCount);
let lastData = data.slice(initCount);

const durationTime = 2000;

class DynamicLine extends React.Component {
  constructor(props) {
    super(props);
    this.chart = null;
    this.chartId = "dynamic-chart";
    this.interval = null;
    this.state = {};
  }
  componentDidMount() {
    this.initChart();
    setTimeout(() => {
      // this.chart.updateOptions();
      // this.chart.render();
      // this.chart.destroy();
      // this.chart.updateOptions({ width: 1000 });
      // this.chart.render();
      this.updateChart();
    }, 7000);
  }
  initChart() {
    this.chart = new Chart({
      container: this.chartId,
      // autoFit: true,
      width: 1000,
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
    this.chart.axis("date", {
      animateOption: {
        enter: {
          delay: 0,
          duration: durationTime,
          easing: "easeLinear",
        },
        update: {
          delay: 0,
          duration: durationTime,
          easing: "easeLinear",
        },
        leave: {
          delay: 0,
          duration: durationTime,
          easing: "easeLinear",
        },
      },
    });
    // this.chart.scale("date", {
    //   tickCount: data.length,
    // });

    this.chart
      .line()
      .animate({
        appear: {
          delay: 0,
          duration: 10000,
          easing: "easeLinear",
        },
        enter: {
          delay: 0,
          duration: durationTime,
          easing: "easeLinear",
        },
        update: {
          delay: 0,
          duration: durationTime,
          easing: "easeLinear",
        },
        leave: {
          delay: 0,
          duration: durationTime,
          easing: "easeLinear",
        },
      })
      .position("date*blockchain")
      .color("##1890ff")
      .shape("smooth");
    this.chart
      .line()
      .animate({
        appear: {
          delay: 0,
          duration: 10000,
          easing: "easeLinear",
        },
        enter: {
          delay: 0,
          duration: durationTime,
          easing: "easeLinear",
        },
        update: {
          delay: 0,
          duration: durationTime,
          easing: "easeLinear",
        },
        leave: {
          delay: 0,
          duration: durationTime,
          easing: "easeLinear",
        },
      })
      .position("date*nlp")
      .color("#2fc25b")
      .shape("smooth");

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
    // this.interval = setInterval(update, durationTime);
    this.interval = setTimeout(update, 2000);
  }
  render() {
    return (
      <div className="chart-box">
        <div id={this.chartId}></div>
      </div>
    );
  }
}

export default DynamicLine;
