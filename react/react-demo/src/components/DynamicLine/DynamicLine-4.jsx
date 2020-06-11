import React from "react";
import { Chart, registerShape } from "@antv/g2";
// import data from "../LineChart/data.json";
// import "./index.scss";

class DynamicLine extends React.Component {
  constructor(props) {
    super(props);
    this.chart = null;
    this.chartId = "dynamic-chart";
    this.state = {};
  }
  componentDidMount() {
    this.registerShape();
    this.initChart();
  }
  registerShape() {
    registerShape("interval", "triangle", {
      // 1. 定义关键点
      getPoints(cfg) {
        // console.log(cfg);
        const x = cfg.x;
        const y = cfg.y;
        const y0 = cfg.y0;
        const width = cfg.size;
        return [
          { x: x - width / 2, y: y0 },
          { x: x, y: y },
          { x: x + width / 2, y: y0 },
        ];
      },
      // 2. 绘制
      draw(cfg, group) {
        const points = this.parsePoints(cfg.points); // 将0-1空间的坐标转换为画布坐标
        // console.log(cfg);
        const polygon = group.addShape("path", {
          attrs: {
            path: [
              ["M", points[0].x, points[0].y],
              ["L", points[1].x, points[1].y],
              ["L", points[2].x, points[2].y],
            ],
            ...cfg.defaultStyle,
          },
        });
        return polygon;
      },
    });
  }
  initChart() {
    this.chart = new Chart({
      container: this.chartId,
      width: 800,
      height: 600,
    });
    this.chart.data([
      { genre: "Sports", sold: 27500 },
      { genre: "Strategy", sold: 11500 },
      { genre: "Action", sold: 6000 },
      { genre: "Shooter", sold: 3500 },
      { genre: "Other", sold: 1500 },
    ]);

    this.chart.interval().position("genre*sold").color("#2fc25b");
    // .shape("triangle");

    this.chart.render();
  }

  render() {
    return <div id={this.chartId}></div>;
  }
}

export default DynamicLine;
