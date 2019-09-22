<template>
  <div ref="chartDom"></div>
</template>

<script>
import echarts from "echarts";
import { addListener, removeListener } from "resize-detector";
import dedounce from "lodash/debounce";

export default {
  props: {
    options: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {};
  },
  created() {
    this.resize = dedounce(this.resize, 300);
  },
  mounted() {
    this.renderChart();
    addListener(this.$refs.chartDom, this.resize);
  },
  watch: {
    options: {
      handler(val) {
        this.myChart.setOption(val);
      },
      deep: true
    }
  },
  methods: {
    resize() {
      this.myChart.resize();
    },
    renderChart() {
      this.myChart = echarts.init(this.$refs.chartDom);
      this.myChart.setOption(this.options);
    }
  },
  beforeDestory() {
    removeListener(this.$refs.chartDom, this.resize);
    this.myChart.dispose();
    this.myChart = null;
  }
};
</script>
