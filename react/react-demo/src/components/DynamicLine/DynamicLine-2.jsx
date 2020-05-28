import React from "react";
import { registerAnimation } from "@antv/g2";
import { Line } from "@antv/g2plot";
import { isNil } from "@antv/util";
import data from "./data-2.json";

let initData = data.slice(0, 10);
let lastData = data.slice(10);

class DynamicLine extends React.Component {
  constructor(props) {
    super(props);
    this.chart = null;
    this.ds = null;
    this.chartId = "dynamic-chart";
    this.interval = null;
    this.state = {};
  }
  componentDidMount() {
    this.registerAnimation();
    this.initChart();
    // setTimeout(() => {
    //   this.updateChart();
    // }, 3000);
  }
  registerAnimation() {
    registerAnimation("line-appear", (shape, animateCfg, cfg) => {
      console.log(shape, animateCfg, cfg);
      console.log(shape.getBBox());
      console.log(shape.get("origin"));
    });
    registerAnimation("line-fade-in-appear", (shape, animateCfg, cfg) => {
      const endState = {
        fillOpacity: isNil(shape.attr("fillOpacity"))
          ? 1
          : shape.attr("fillOpacity"),
        strokeOpacity: isNil(shape.attr("strokeOpacity"))
          ? 1
          : shape.attr("strokeOpacity"),
        opacity: isNil(shape.attr("opacity")) ? 1 : shape.attr("opacity"),
      };
      shape.attr({
        fillOpacity: 0,
        strokeOpacity: 0,
        opacity: 0,
      });
      shape.animate(endState, animateCfg);
    });
  }
  initChart() {
    this.chart = new Line(document.getElementById(this.chartId), {
      title: {
        visible: true,
        text: "2000 ~ 2018 年各国家 GDP 趋势对比",
      },
      description: {
        visible: true,
        text:
          "图形标签 (label) 位于折线尾部，用于标注整根折线，并有带有排名的含义在其中。",
      },
      padding: [20, 100, 30, 80],
      forceFit: true,
      data: data.slice(0, 10),
      xField: "year",
      yField: "gdp",
      seriesField: "name",
      xAxis: {
        type: "dateTime",
        label: {
          visible: true,
          autoHide: true,
        },
      },
      yAxis: {
        formatter: (v) => `${(v / 10e8).toFixed(1)} B`,
      },
      legend: {
        visible: false,
      },
      label: {
        visible: true,
        type: "line",
      },
      animation: {
        enter: {
          animation: "line-fade-in-appear",
        },
        appear: {
          // animation: "clipingWithData",
          // duration: 10000,
          // animation: "line-appear",
          animation: "line-fade-in-appear",
        },
      },
      smooth: true,
    });
    this.chart.render();
  }
  // updateChart() {
  //   const update = () => {
  //     if (lastData.length > 0) {
  //       initData.push(lastData.shift());
  //       initData.shift();
  //     } else {
  //       initData = data;
  //       clearInterval(this.interval);
  //     }
  //     this.chart.changeData(initData);
  //   };
  //   this.interval = setInterval(update, 500);
  // }
  render() {
    return <div id={this.chartId}></div>;
  }
}

export default DynamicLine;
