export default {
  showLegend: {
    visible: true,
    label: "显示图例",
    value: true,
    componentName: "Switch",
    itemKey: "showLegend",
    type: "legend",
    action: "setLegendDisplay",
    relationkeys: ["legendSize"],
  },
  legendSize: {
    visible: true,
    label: "图例字号",
    value: 16,
    componentName: "InputNumber",
    itemKey: "legendSize",
    type: "legend",
    action: "setLegendSize",
  },
};
