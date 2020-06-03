import React from "react";
import { registerAnimation } from "@antv/g2";
import { Line } from "@antv/g2plot";
import { isNil } from "@antv/util";
import DataSet from "@antv/data-set";
import Slider from "@antv/g2/lib/chart/controller/slider";
import { registerComponentController } from "@antv/g2/lib/core";
import data from "./data-2.json";
import "./index-2.scss";

registerComponentController("slider", Slider);

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
    registerAnimation("wave-in-appear", (element, animateCfg, cfg) => {
      let { type, startState, endState } = this.getCoordinateClipCfg(
        cfg.coordinate,
        20
      );
      const clipShape = element.setClip({
        type,
        attrs: startState,
      }); // 为 shape 设置剪切区域
      // 对剪切图形做动画
      clipShape.animate(endState, {
        ...animateCfg,
        callback: () => {
          // endState.width = cfg.coordinate.getWidth() + 40;
          // clipShape.animate(endState, { ...animateCfg });
          if (element && !element.get("destroyed")) {
            element.set("clipShape", null);
          }
          clipShape.remove(true); // 动画结束需要将剪切图形销毁
        },
      });
    });
  }
  getCoordinateClipCfg(coordinate, margin) {
    const { start, end } = coordinate;
    const width = coordinate.getWidth();
    const height = coordinate.getHeight();

    let endState;
    if (coordinate.isTransposed) {
      endState = {
        height: height + margin * 2,
      };
    } else {
      endState = {
        width: width / 2 + margin * 2,
      };
    }

    return {
      type: "rect",
      startState: {
        x: start.x - margin,
        y: end.y - margin,
        width: coordinate.isTransposed ? width + margin * 2 : 0,
        height: coordinate.isTransposed ? 0 : height + margin * 2,
      },
      endState,
      attrs: {
        x: start.x - margin,
        y: end.y - margin,
        width: width + margin * 2,
        height: height + margin * 2,
      },
    };
  }
  initChart() {
    this.chart = new Line(document.getElementById(this.chartId), {
      // width: 1920,
      // width: 2000,
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
      data: data,
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
        appear: {
          // animation: "clipingWithData",
          duration: 10000,
          animation: "wave-in-appear",
          easing: "easeLinear",
        },
        // update: {
        //   duration: 2000,
        //   animation: "wave-in-update",
        // },
      },
      smooth: true,
    });
    console.log(this.chart);
    // this.chart.option("slider", {
    //   end: 0.8,
    // });
    this.chart.render();
    // setTimeout(() => {
    //   data.push(
    //     {
    //       name: "China",
    //       year: "2019",
    //       gdp: 13608152064637.9,
    //     },
    //     {
    //       name: "United States",
    //       year: "2019",
    //       gdp: 20594343456936.5,
    //     },
    //     {
    //       name: "United Kingdom",
    //       year: "2019",
    //       gdp: 1957816613708.58,
    //     },
    //     {
    //       name: "Russian",
    //       year: "2019",
    //       gdp: 1857554647149.87,
    //     },
    //     {
    //       name: "Japan",
    //       year: "2019",
    //       gdp: 4900519660744.86,
    //     }
    //   );
    //   this.chart.changeData(data);
    // }, 11000);
    // setTimeout(() => {
    //   this.chart.updateConfig({
    //     width: 500,
    //   });
    //   this.chart.render();
    // }, 2000);
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
