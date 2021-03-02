<template>
  <div class="bar" ref="chart"></div>
</template>
<script>
import { Chart } from "@antv/g2";
export default {
  data() {
    return {
      chart: null,
      chartData: [
        { country: "巴西", population: 18203 },
        { country: "印尼", population: 23489 },
        { country: "美国", population: 29034 },
        { country: "印度", population: 104970 },
        { country: "中国", population: 131744 },
      ],
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.bar {
  width: 100%;
  height: 100%;
}
</style>
