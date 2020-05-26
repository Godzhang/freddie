import React from "react";
import { Chart, registerAnimation } from "@antv/g2";
import data from "./data.json";

function handleData(source) {
  source.sort((a, b) => {
    return a.value - b.value;
  });

  return source;
}

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.chartInstance = null;
    this.chartId = "dynamic-chart";
    this.state = {};
  }
  componentDidMount() {
    this.registerAnimation();
    this.initChart();
  }
  registerAnimation() {
    registerAnimation("label-appear", (element, animateCfg, cfg) => {
      // console.log(element, animateCfg, cfg);
      const label = element.getChildren()[0];
      console.log(label);
      const coordinate = cfg.coordinate;
      const startX = coordinate.start.x;
      const finalX = label.attr("x");
      const labelContent = label.attr("text");

      label.attr("x", startX);
      label.attr("text", 0);

      const distance = finalX - startX;
      label.animate((ratio) => {
        const position = startX + distance * ratio;
        const text = (labelContent * ratio).toFixed(0);

        return {
          x: position,
          text,
        };
      }, animateCfg);
    });

    registerAnimation("label-update", (element, animateCfg, cfg) => {
      const startX = element.attr("x");
      const startY = element.attr("y");
      // @ts-ignore
      const finalX = cfg.toAttrs.x;
      // @ts-ignore
      const finalY = cfg.toAttrs.y;
      const labelContent = element.attr("text");
      // @ts-ignore
      const finalContent = cfg.toAttrs.text;

      const distanceX = finalX - startX;
      const distanceY = finalY - startY;
      const numberDiff = +finalContent - +labelContent;

      element.animate((ratio) => {
        const positionX = startX + distanceX * ratio;
        const positionY = startY + distanceY * ratio;
        const text = (+labelContent + numberDiff * ratio).toFixed(0);

        return {
          x: positionX,
          y: positionY,
          text,
        };
      }, animateCfg);
    });
  }
  initChart() {
    let count = 0;
    let interval;

    const countUp = () => {
      if (count === 0) {
        this.chartInstance = new Chart({
          container: this.chartId,
          autoFit: true,
          height: 500,
          padding: [20, 60],
        });
        // @ts-ignore
        this.chartInstance.data(handleData(Object.values(data)[count]));
        // 坐标系x, y置换
        this.chartInstance.coordinate("rect").transpose();
        this.chartInstance.legend(false);
        this.chartInstance.tooltip(false);
        // 城市轴添加动画效果
        this.chartInstance.axis("city", {
          animateOption: {
            update: {
              duration: 1000,
              easing: "easeLinear",
            },
          },
        });
        // 右下角图形标注-年份
        this.chartInstance.annotation().text({
          position: ["95%", "90%"],
          content: Object.keys(data)[count],
          style: {
            fontSize: 40,
            fontWeight: "bold",
            fill: "#ddd",
            textAlign: "end",
          },
          animate: false,
        });
        this.chartInstance
          .interval()
          .position("city*value")
          .color("city")
          .label("value", (value) => {
            // if (value !== 0) {
            return {
              animate: {
                appear: {
                  animation: "label-appear",
                  delay: 0,
                  duration: 1000,
                  easing: "easeLinear",
                },
                update: {
                  animation: "label-update",
                  duration: 1000,
                  easing: "easeLinear",
                },
              },
              offset: 5,
            };
            // }
          })
          .animate({
            appear: {
              duration: 1000,
              easing: "easeLinear",
            },
            update: {
              duration: 1000,
              easing: "easeLinear",
            },
          });

        this.chartInstance.render();
      } else {
        this.chartInstance.annotation().clear(true);
        this.chartInstance.annotation().text({
          position: ["95%", "90%"],
          content: Object.keys(data)[count],
          style: {
            fontSize: 40,
            fontWeight: "bold",
            fill: "#ddd",
            textAlign: "end",
          },
          animate: false,
        });
        // @ts-ignore
        this.chartInstance.changeData(handleData(Object.values(data)[count]));
      }

      ++count;

      if (count === Object.keys(data).length) {
        clearInterval(interval);
      }
    };

    countUp();
    interval = setInterval(countUp, 1200);
  }
  render() {
    return <div id={this.chartId}></div>;
  }
}

export default LineChart;
