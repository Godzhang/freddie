<template>
  <div>
    <h1>分析页</h1>
    <Chart :options="options" style="height: 400px;"></Chart>
  </div>
</template>

<script>
import Chart from "../../components/Chart";
import request from "../../utils/request";

export default {
  data() {
    return {
      options: {}
    };
  },
  mounted() {
    this.getChartData();
    // setInterval(() => {
    //   this.getChartData();
    // }, 3000);
  },
  methods: {
    getChartData() {
      request({
        url: "/api/dashboard/chart",
        method: "get",
        params: { ID: 12345 }
      }).then(res => {
        this.options = {
          title: {
            text: "ECharts 入门示例"
          },
          tooltip: {},
          legend: {
            data: ["销量"]
          },
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [
            {
              name: "销量",
              type: "bar",
              data: res.data
            }
          ]
        };
      });
    }
  },
  components: { Chart }
};
</script>
