import React from 'react';
import {Chart, registerAnimation, registerShape } from '@antv/g2';
import {connect} from 'react-redux';
import {getLineData} from '@/service.js';

class DynamicLineChart extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef(); // 图表dom引用
    this.chart = null; // 图表实例
  }
  componentDidMount() {
    this.getData();
    this.registerAnimate();
    // this.registerTextShape();
  }

  async getData() {
    const res = await getLineData();
    if (!res) return;
    this.initChart(res);
  }

  initChart(data) {
    this.chart = new Chart({
      container: this.chartRef.current,
      autoFit: true,
      height: 500,
      padding: [20, 60],
    });
    this.chart.data(data);
    this.chart
      .line()
      .position('year*value')
      .color('name')
      .shape('smooth')
      .animate({
        appear: {
          duration: 5000,
          easing: 'easeLinear',
        },
      });
    this.chart.legend(false);
    this.chart.render();
  }

  registerAnimate() {
    registerAnimation('clipWidthData', (label, animateCfg, cfg) => {
      
    });
  }

  registerTextShape () {
    registerShape('text', 'title', {
      getPoints(cfg) {
        const x = cfg.x;
        const y = cfg.y;
        return [
          { x: x, y: y }
        ];
      },

      draw(cfg, group) {
        const points = this.parsePoints(cfg.points)
        console.log(cfg)
        const title = group.addShape('text', {
          attrs: {
            x: points[0].x,
            y: points[0].y,
            ...cfg.defaultStyle
          }
        })
        return title
      }
    })

  }

  render() {
    return <div ref={this.chartRef}></div>;
  }
}

const mapStateToProps = (state) => ({
  chartConfig: state.chartConfig,
});

export default connect(mapStateToProps)(DynamicLineChart);
