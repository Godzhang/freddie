import React from 'react';
import {Chart, registerShape} from '@antv/g2';
import {connect} from 'react-redux';
import {getBarData} from '@/service.js';
import {
  registerAniLabelAppear,
  registerAniLabelUpdate,
} from '@/common/animations/animate-label';

function getConfigurableAttrs(params) {
  const configurable = {
    title: {
      visible: params.showTitle,
      text: params.title,
      style: {
        fontSize: params.titleSize,
        fill: params.textColor,
      },
    },
    theme: params.chartTheme,
  };
  return configurable;
}

class DynamicBarChart extends React.Component {
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
    // 从params中获取新的属性值
    this.configurableAttrs = getConfigurableAttrs(this.params);
  }
  async initChart() {
    const res = await getBarData();
    if (!res) return;
    this.draw(res);
    registerAniLabelAppear();
    registerAniLabelUpdate();
  }

  draw(data) {
    let count = 0;
    let interval;

    const countUp = () => {
      if (count == 0) {
        this.chart = new Chart({
          container: this.chartRef.current,
          width: 900,
          height: 600,
          padding: [100, 60, 40, 60],
        });

        this.chart.data(this.handleData(Object.values(data)[count]));
        this.chart.coordinate('rect').transpose();
        this.chart.legend({ position: 'top', offsetY: 75 });
        this.chart.tooltip(false);
        this.chart.axis('city', {
          animateOption: {
            update: {
              duration: 1000,
              easing: 'easeLinear',
            },
          },
        });
        this.chart.annotation().text({
          position: ['95%', '90%'],
          content: Object.keys(data)[count],
          style: {
            fontSize: 40,
            fontWeight: 'bold',
            fill: '#ddd',
            textAlign: 'end',
          },
          animate: false,
        });
        this.chart
          .interval()
          .position('name*value')
          .color('category')
          .label('value', (value) => {
            return {
              animate: {
                appear: {
                  animation: 'label-appear',
                  delay: 0,
                  duration: 1000,
                  easing: 'easeLinear',
                },
                update: {
                  animation: 'label-update',
                  duration: 1000,
                  easing: 'easeLinear',
                },
              },
              offset: 5,
            };
          })
          .animate({
            appear: {
              duration: 1000,
              easing: 'easeLinear',
            },
            update: {
              duration: 1000,
              easing: 'easeLinear',
            },
          });

       
        
        this.chart.render();
        this.chart.canvas.addShape('text', {
          attrs: {
            x: this.chart.coordinateBBox.x,
            y: 40,
            fontSize: 28,
            fontFamily: 'PingFang SC',
            text: '标题',
            fill: '#888',
          },
        });

        this.chart.canvas.addShape('text', {
          attrs: {
            x: this.chart.coordinateBBox.x,
            y: this.chart.coordinateBBox.y - 28,
            fontSize: 14,
            fontFamily: 'PingFang SC',
            text: 'This is description This is description This is description This is description',
            fill: '#888',
          },
        });

        this.chart.canvas.addShape('text', {
          attrs: {
            x: this.chart.coordinateBBox.x,
            y: this.chart.height,
            fontSize: 16,
            fontFamily: 'PingFang SC',
            text: '数据来源: 测试数据',
            fill: '#999',
          },
        });
      } else {
        this.chart.annotation().clear(true);
        this.chart.annotation().text({
          position: ['95%', '90%'],
          content: Object.keys(data)[count],
          style: {
            fontSize: 40,
            fontWeight: 'bold',
            fill: '#ddd',
            textAlign: 'end',
          },
          animate: false,
        });
        this.chart.changeData(this.handleData(Object.values(data)[count]));
      }

      ++count;
      if (count === Object.keys(data).length) {
        clearInterval(interval);
      }
    };

    countUp();
    interval = setInterval(countUp, 1200);
  }

  handleData(source) {
    source.sort((a, b) => {
      return a.value - b.value;
    });
    return source;
  }

  updateConfig() {
    this.chart.updateConfig({
      ...this.configurableAttrs,
    });
    this.chart.render(true);
  }
  render() {
    return <div ref={this.chartRef}></div>;
  }
}

const mapStateToProps = (state) => ({
  chartConfig: state.chartConfig,
});

export default connect(mapStateToProps)(DynamicBarChart);
