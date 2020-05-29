import React from "react";
import { Chart, registerAnimation } from "@antv/g2";
import DataSet from "@antv/data-set";
import Slider from "@antv/g2/lib/chart/controller/slider";
import { registerComponentController } from "@antv/g2/lib/core";
// import data from "../LineChart/data.json";
import "./index.scss";

registerComponentController("slider", Slider);

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
function createData2() {
  for (let year = 2010; year <= 2020; year++) {
    for (let month = 1; month <= 12; month++) {
      const date = `${year}-${month < 10 ? "0" : ""}${month}`;
      const nlp = createRandomNum(2000, year);
      const blockchain = createRandomNum(2000, year);
      data.push({ date, nlp, blockchain });
    }
  }
}
createData();
let initData = data.slice(0, 10);
let lastData = data.slice(10);

const durationTime = 2000;

class DynamicLine extends React.Component {
  constructor(props) {
    super(props);
    this.chart = null;
    this.chart2 = null;
    this.chartId = "dynamic-chart";
    this.chartId2 = "dynamic-chart-2";
    this.interval = null;
    this.state = {};
  }
  componentDidMount() {
    this.initChart();
    this.initChart2();
    setTimeout(() => {
      this.chart.updateChart({
        width: 1000,
      });
      // this.chart.updateOptions();
      this.chart.render();
      // this.chart.destroy();
      // this.chart.updateOptions({ width: 1000 });
      // this.chart.render();
      // this.updateChart();
    }, 10000);
  }
  initChart() {
    this.chart = new Chart({
      container: this.chartId,
      // autoFit: true,
      width: 8000,
      height: 500,
      padding: [50, 20, 70, 0],
    });
    this.chart.data(data);
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
    this.chart.axis("blockchain", { label: false });
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
    this.chart.scale("date", {
      tickCount: data.length,
    });

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
  initChart2() {
    this.chart2 = new Chart({
      container: this.chartId2,
      // autoFit: true,
      width: 8000,
      height: 500,
      padding: [50, 20, 70, 50],
    });
    this.chart2.data(data);
    this.chart2.scale({
      nlp: {
        min: 0,
        max: 1000,
      },
      blockchain: {
        min: 0,
        max: 1000,
      },
    });

    this.chart2.axis("nlp", false);
    this.chart2.axis("date", false);
    this.chart2.axis("blockchain", {
      grid: null,
    });

    this.chart2
      .line({ visible: false })
      .position("date*blockchain")
      .color("##1890ff")
      .shape("smooth");
    this.chart2
      .line({ visible: false })
      .position("date*nlp")
      .color("#2fc25b")
      .shape("smooth");

    this.chart2.render();
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
    // this.interval = setTimeout(update, 1000);
  }
  render() {
    return (
      <div className="chart-box">
        <div id={this.chartId2}></div>
        <div className="chart-animate">
          <div id={this.chartId}></div>
        </div>
      </div>
    );
  }
}

export default DynamicLine;
