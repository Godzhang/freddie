import React from 'react';
import {Chart} from '@antv/g2';
import {connect} from 'react-redux';
import {getBubbleData} from '@/service.js';

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
    const res = await getBubbleData();
    if (!res) return;
    this.draw(res);
  }
  draw(data) {
    let years = Object.keys(data)
    let count = 0;
    let interval;

    const countUp = () => {
      const year = years[count]
      if (count == 0) {
        this.chart = new Chart({
          container: this.chartRef.current,
          width: 900,
          height: 600,
          padding: [100, 40],
        });

        this.chart.data(data[year]);
        this.chart.scale({
          life: {
            min: 0,
            max: 90,
            tickInterval: 10,
            alias: 'Life expectancy'
          },
          income: {
            type: 'log',
            max: 150000,
            min: 100,
            alias: 'Income'
          },
          country: {
            key: true // 自定义每条数据的 id
          },
          population: {
            type: 'pow',
            base: 2,
          },
          continent: {
            values: [
              'East Asia & Pacific',
              'South Asia',
              'Sub-Saharan Africa',
              'Middle East & North Africa',
              'Europe & Central Asia',
              'America'
            ]
          }
        });
        this.chart.legend(false);
        this.chart.legend('continent', {
          position: 'bottom'
        });
         // 坐标轴配置
         this.chart.axis('life', {
          line: {
            style: {
              stroke: '#D9D9D9'
            }
          }
        });
        this.chart.axis('income', {
          title: {
            style: {
              fill: '#8C8C8C',
              fontSize: 14
            }
          },
          grid: {
            line: {
              style: {
                stroke: '#D9D9D9'
              }
            }
          },
        });
         // 绘制散点图
         this.chart
         .point()
         .position('income*life')
         .color('continent')
         .size('population', [1, 25])
         .shape('circle')
         .animate({
           update: {
             duration: 200,
             easing: 'easeLinear'
           }
         })
         .tooltip('life*income*population')
         .style({
           stroke: '#000'
         });

       // 绘制标注文本
       this.chart.annotation().text({
         position: ['50%', '50%'],
         content: year,
         style: {
           fontSize: 200,
           fill: '#999',
           textAlign: 'center',
           fillOpacity: 0.3
         },
         top: false,
         animate: false,
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
        this.chart.annotation().clear(true)
        this.chart.annotation().text({
          position: ['50%', '50%'],
          content: year,
          style: {
            fontSize: 200,
            fill: '#999',
            textAlign: 'center',
            fillOpacity: 0.3
          },
          top: false,
          animate: false,

        });
        this.chart.changeData(data[year]);
      }

      ++count;
      if (count === years.length) {
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
    this.this.chart.updateConfig({
      ...this.configurableAttrs,
    });
    this.this.chart.render(true);
  }
  render() {
    return <div ref={this.chartRef}></div>;
  }
}

const mapStateToProps = (state) => ({
  chartConfig: state.chartConfig,
});

export default connect(mapStateToProps)(DynamicBarChart);
