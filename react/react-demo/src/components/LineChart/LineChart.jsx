import React from "react";
import { Chart } from "@antv/g2";
import data from "./data.json";

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.chartInstance = null;
    this.chartId = "line-chart";
    this.state = {};
  }
  componentDidMount() {
    this.initChart();
  }
  initChart() {
    this.chartInstance = new Chart({
      container: this.chartId,
      width: 800,
      height: 500,
      padding: [30, 20, 70, 30],
    });
    const chart = this.chartInstance;
    chart.data(data);
    chart.scale({
      nlp: {
        min: 0,
        max: 100,
      },
      blockchain: {
        min: 0,
        max: 100,
      },
    });

    chart.axis("nlp", false);

    chart.legend({
      custom: true,
      items: [
        {
          name: "blockchain",
          value: "blockchain",
          marker: {
            symbol: "line",
            style: { stroke: "#1890ff", lineWidth: 2 },
          },
        },
        {
          name: "nlp",
          value: "nlp",
          marker: {
            symbol: "line",
            style: { stroke: "#2fc25b", lineWidth: 2 },
          },
        },
      ],
    });

    chart.line().position("date*blockchain").color("#1890ff");
    chart.line().position("date*nlp").color("#2fc25b");

    chart.annotation().dataMarker({
      top: true,
      position: ["2016-02-28", 9],
      text: {
        content: "Blockchain 首超 NLP",
        style: {
          textAlign: "center",
        },
      },
      line: {
        length: 30,
      },
    });
    chart.annotation().dataMarker({
      top: true,
      position: ["2017-12-17", 100],
      line: {
        length: 30,
      },
      text: {
        content:
          "2017-12-17, 受比特币影响，\n blockchain搜索热度达到顶峰\n峰值：100",
        style: {
          textAlign: "right",
        },
      },
    });
    chart.removeInteraction("legend-filter"); // 自定义图例，移除默认的分类图例筛选交互

    {
      // x轴间距设置
      // chart.axis("date", {
      //   title: {
      //     style: {
      //       fill: "#08c",
      //     },
      //   },
      // });
      console.log(chart.getScaleKey("date"));
      chart.scale("date", {
        // ticks: [
        //   new Date("2015-02-01").getTime(),
        //   new Date("2015-03-01").getTime(),
        //   "2015-04-01",
        //   "2015-05-01",
        // ],
        // formatter: (val) => val,
      });

      // 线段动画设置
      chart.animate(true);
      const lines = chart.geometries;
      console.log(chart);
      lines[0].animate({
        appear: {
          duration: 3000,
        },
      });
      lines[1].animate({
        appear: {
          duration: 3000,
        },
      });
    }

    chart.render();
  }
  render() {
    return <div id={this.chartId}></div>;
  }
}

export default LineChart;
