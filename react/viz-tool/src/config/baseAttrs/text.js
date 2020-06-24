export default {
  showTitle: {
    visible: true,
    label: "显示标题区域",
    value: true,
    componentName: "Switch",
    itemKey: "showTitle",
    type: "text",
    action: "setChartTitleDisplay",
    relationkeys: ["title", "titleSize"],
  },
  title: {
    visible: true,
    label: "图表标题",
    value: "标题",
    componentName: "Input",
    itemKey: "title",
    type: "text",
    action: "setChartTitle",
  },
  titleSize: {
    visible: true,
    label: "图表标题字号",
    value: 24,
    componentName: "InputNumber",
    itemKey: "titleSize",
    type: "text",
    action: "setChartTitleSize",
  },
  showSource: {
    visible: true,
    label: "显示数据来源",
    value: true,
    componentName: "Switch",
    itemKey: "showSource",
    type: "text",
    action: "setSourceDisplay",
    relationkeys: ["source", "sourceSize"],
  },
  source: {
    visible: true,
    label: "数据来源",
    value: "数据来源：国家统计局",
    componentName: "Input",
    itemKey: "source",
    type: "text",
    action: "setSource",
  },
  sourceSize: {
    visible: true,
    label: "数据来源字号",
    value: 16,
    componentName: "InputNumber",
    itemKey: "sourceSize",
    type: "text",
    action: "setSourceSize",
  },
  showCompany: {
    visible: true,
    label: "显示单位",
    value: true,
    componentName: "Switch",
    itemKey: "showCompany",
    type: "text",
    action: "setCompanyDisplay",
    relationkeys: ["company", "companySize"],
  },
  company: {
    visible: true,
    label: "改变单位",
    value: "单位：元",
    componentName: "Input",
    itemKey: "company",
    type: "text",
    action: "setCompany",
  },
  companySize: {
    visible: true,
    label: "单位字号",
    value: 16,
    componentName: "InputNumber",
    itemKey: "companySize",
    type: "text",
    action: "setCompanySize",
  },
};
