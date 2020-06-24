const sizeAction = {
  calcChartSize: () => ({
    type: "CALC_CHART_SIZE",
  }),
  setChartSize: (width, height) => ({
    type: "SET_CHART_SIZE",
    width,
    height,
  }),
  setChartScale: (scale) => ({
    type: "SET_CHART_SCALE",
    scale,
  }),
};

export default sizeAction;
