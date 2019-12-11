<template>
  <div>
    <div id="vis0"></div>
    <div id="vis1"></div>
  </div>
</template>
<script>
import roughViz from "rough-viz";

export default {
  name: "",
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      new roughViz.BarH({
        element: "#vis0",
        title: "Vehicles I've Had",
        titleFontSize: "1.5rem",
        legend: false,
        margin: { top: 50, bottom: 100, left: 160, right: 0 },
        data: {
          labels: [
            "1992 Ford Aerostar Van",
            "2013 Kia Rio",
            "1980 Honda CB 125s",
            "1992 Toyota Tercel"
          ],
          values: [8, 4, 6, 2]
        },
        xLabel: "Time Owned (Years)",
        strokeWidth: 2,
        fillStyle: "zigzag-line",
        highlight: "gold"
      });
      new roughViz.BarH({
        element: "#vis1",
        titleFontSize: "1.5rem",
        data:
          "https://raw.githubusercontent.com/jwilber/random_data/master/owTanks.csv",
        color: "tan",
        labels: "name",
        values: "health",
        title: "Overwatch Tank Health",
        roughness: 4
      });
    }
  },
  components: {}
};
</script>
<style lang="scss" scoped></style>
