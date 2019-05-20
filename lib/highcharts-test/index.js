const options = {
  chart: {
    type: 'bar',
    style: {
      fontFamily: '',
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#006cee'
    },
    className: 'my-chart'
  },
  title: {
    text: '我的第一个图表'
  },
  xAxis: {
      categories: ['苹果', '香蕉', '橙子']   // x 轴分类
  },
  yAxis: {
      title: {
          text: '吃水果个数'                // y 轴标题
      }
  },
  series: [{                              // 数据列
      name: '小明',                        // 数据列名
      data: [1, 0, 4]                     // 数据
  }, {
      name: '小红',
      data: [5, 7, 3]
  }]
}

let chart = Highcharts.chart('container', options)




console.log(chart)
