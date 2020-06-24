import React from "react";
import { Line, RangeBar } from "@antv/g2plot";
import { connect } from "react-redux";
import themeConfig from "@/common/global/themeConfig.js";
import TextDescription from "@antv/g2plot/lib/components/description";
import PaddingController from "@antv/g2plot/lib/base/controller/padding";

const getDescriptionWidth = (params) => {
  if (params.showCompany) {
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    ctx.font = `${params.companySize}px PingFang SC`;
    ctx.fillText(params.company, 0, 0);
    return ctx.measureText(params.company).width + 20;
  }
  return 0;
};

function getConfigurableAttrs(params) {
  const { showThousandPlace, translatePercentage, dataFormat } = params;

  const configurable = {
    description: {
      visible: params.showCompany,
      text: params.company,
      style: {
        fontSize: params.companySize,
      },
    },
    width: params.width,
    height: params.height,
    title: {
      visible: params.showTitle,
      text: params.title,
      style: {
        fontSize: params.titleSize,
        fill: params.textColor,
      },
    },
    theme: themeConfig[params.chartTheme],
    // theme: params.chartTheme,
    // theme: Object.assign({}, themeMap[params.chartTheme], {
    //   backgroundStyle: {
    //     fill: params.bgColor,
    //   },
    // }),
    // theme: {
    //   backgroundStyle: {
    //     fill: params.bgColor,
    //   },
    // },
    legend: {
      visible: params.showLegend,
      // position: "bottom-center",
      // offsetY: 13,
      position: "top-left",
      offsetX: getDescriptionWidth(params),
      offsetY: params.showCompany ? -20 : 0,
      text: {
        style: {
          fontSize: params.legendSize,
        },
      },
    },
    color: params.colors,
  };
  // 数据格式设置
  let formatter = (n) => n;
  // 千分位
  if (showThousandPlace) {
    let fn = formatter;
    formatter = (n) => Number(fn(n)).toLocaleString();
  }

  // 数据格式
  if (dataFormat !== "default") {
    let fn = formatter;
    switch (dataFormat) {
      case "integer":
        formatter = (n) => {
          let r = fn(n);
          let pointIndex = r.lastIndexOf(".");
          return pointIndex > -1 ? r.slice(0, pointIndex) : r;
        };
        break;
      case "decimal_1":
        formatter = (n) => {
          let r = fn(n);
          let len = r.length;
          let pointIndex = r.lastIndexOf(".");
          if (pointIndex === -1) {
            return r + ".0";
          } else if (len - pointIndex - 1 > 1) {
            return r.slice(0, pointIndex + 2);
          } else {
            return r;
          }
        };
        break;
      case "decimal_2":
        formatter = (n) => {
          let r = fn(n);
          let len = r.length;
          let pointIndex = r.lastIndexOf(".");
          if (pointIndex === -1) {
            return r + ".00";
          } else if (len - pointIndex - 1 > 2) {
            return r.slice(0, pointIndex + 3);
          } else {
            return r;
          }
        };
        break;
    }
  }

  // 百分数
  if (translatePercentage) {
    let fn = formatter;
    formatter = (n) => fn(n) + "%";
  }
  configurable.yAxis = {
    label: {
      formatter,
    },
  };

  return configurable;
}

const addCustomShape = (() => {
  let source = null;

  return (chart, params) => {
    // 数据来源
    if (source && source.destroy) {
      source.destroy();
    }
    source = chart.canvas.addShape("text", {
      visible: params.showSource,
      attrs: {
        x: 25,
        y: params.height - 5,
        fontSize: params.sourceSize,
        fontFamily: "PingFang SC",
        text: params.source,
        fill: "#999",
      },
    });
  };
})();

class BasicLineChart extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef(); // 图表dom引用
    this.chart = null; // 图表实例
    this.params = {}; // 图表设置参数
    this.data = []; // 图表数据
    this.size = []; // 尺寸
    this.configurableAttrs = {}; // 图表可配置属性
  }
  componentWillMount() {
    this.extractConfig();
  }
  componentDidMount() {
    this.initChart();
  }
  componentDidUpdate() {
    this.extractConfig();
    this.updateConfig();
  }
  /** 从redux中提取配置参数 */
  extractConfig() {
    // 将redux中的图表配置同步简化到params
    for (let key in this.props.chartConfig) {
      this.params[key] = this.props.chartConfig[key].value;
    }
    for (let key in this.props.chartSize) {
      this.params[key] = this.props.chartSize[key];
    }
    // 从params中获取新的属性值
    this.configurableAttrs = getConfigurableAttrs(this.params);
  }
  initChart() {
    this.chart = new Line(this.chartRef.current, {
      ...this.configurableAttrs,
      // width: 800,
      // height: 500,
      data: [
        { genre: "Sports", sold: 1275, type: "a" },
        { genre: "Sports", sold: 1175, type: "b" },
        { genre: "Sports", sold: 175, type: "c" },
        { genre: "Sports", sold: 2175, type: "d" },
        { genre: "Sports", sold: 375, type: "e" },
        { genre: "Strategy", sold: 1115, type: "a" },
        { genre: "Strategy", sold: 115, type: "b" },
        { genre: "Strategy", sold: 1150, type: "c" },
        { genre: "Strategy", sold: 315, type: "d" },
        { genre: "Strategy", sold: 615, type: "e" },
        { genre: "Action", sold: 1120, type: "a" },
        { genre: "Action", sold: 2120, type: "b" },
        { genre: "Action", sold: 4120, type: "c" },
        { genre: "Action", sold: 3120, type: "d" },
        { genre: "Action", sold: 120, type: "e" },
        { genre: "Shooter", sold: 1350, type: "a" },
        { genre: "Shooter", sold: 150, type: "b" },
        { genre: "Shooter", sold: 2150, type: "c" },
        { genre: "Shooter", sold: 3150, type: "d" },
        { genre: "Shooter", sold: 5150, type: "e" },
        { genre: "Other", sold: 1510, type: "a" },
        { genre: "Other", sold: 2510, type: "b" },
        { genre: "Other", sold: 3510, type: "c" },
        { genre: "Other", sold: 4510, type: "d" },
        { genre: "Other", sold: 5510, type: "e" },
      ],
      xField: "genre",
      yField: "sold",
      seriesField: "type",
      padding: [25, 30, 50, 60],
    });
    addCustomShape(this.chart, this.params);

    // this.chart.source = new TextDescription({
    //   leftMargin: 0,
    //   rightMargin: 0,
    //   topMargin: 0,
    //   text: this.params.source,
    //   style: { fontSize: this.params.companySize },
    //   wrapperWidth: this.params.width,
    //   container: this.chart.canvas.addGroup(),
    //   theme: this.params.chartTheme,
    //   index: 1,
    //   plot: this.chart.layers[0],
    //   alignTo: "center",
    //   name: "source",
    // });
    console.log(this.chart);
    this.chart.render(true);
  }
  updateConfig() {
    this.chart.updateConfig({
      ...this.configurableAttrs,
    });
    addCustomShape(this.chart, this.params);
    this.chart.render(true);
  }
  render() {
    return <div ref={this.chartRef}></div>;
  }
}

const mapStateToProps = (state) => ({
  chartConfig: state.chartConfig,
  data: state.data,
  chartSize: state.chartSize,
});

export default connect(mapStateToProps)(BasicLineChart);
