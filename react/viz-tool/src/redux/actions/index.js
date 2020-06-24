// 文字设置
export const configTextAction = {
  setChartTitleDisplay: (showTitle) => ({
    type: "SET_CHART_TITLE_DISPLAY",
    showTitle,
  }),
  setChartTitle: (title) => ({
    type: "SET_CHART_TITLE",
    title,
  }),
  setChartTitleSize: (titleSize) => ({
    type: "SET_CHAET_TITLE_SIZE",
    titleSize,
  }),
  setSourceDisplay: (showSource) => ({
    type: "SET_SOURCE_DISPLAY",
    showSource,
  }),
  setSource: (source) => ({
    type: "SET_SOURCE",
    source,
  }),
  setSourceSize: (sourceSize) => ({
    type: "SET_SOURCE_SIZE",
    sourceSize,
  }),
  setCompanyDisplay: (showCompany) => ({
    type: "SET_COMPANY_DISPLAY",
    showCompany,
  }),
  setCompany: (company) => ({
    type: "SET_COMPANY",
    company,
  }),
  setCompanySize: (companySize) => ({
    type: "SET_COMPANY_SIZE",
    companySize,
  }),
};
// 颜色主题
export const configThemeAction = {
  setChartTheme: (chartTheme) => ({
    type: "SET_CHART_THEME",
    chartTheme,
  }),
  setColorTheme: (colorTheme) => ({
    type: "SET_COLOR_THEME",
    colorTheme,
  }),
  setColors: (color, index) => ({
    type: "SET_COLORS",
    color,
    index,
  }),
  resetColors: () => ({
    type: "RESET_COLORS",
  }),
  setTextColor: (textColor) => ({
    type: "SET_TEXT_COLOR",
    textColor,
  }),
  setBgColor: (bgColor) => ({
    type: "SET_BG_COLOR",
    bgColor,
  }),
};
// 图例
export const configLegendAction = {
  setLegendDisplay: (showLegend) => ({
    type: "SET_LEGEND_DISPLAY",
    showLegend,
  }),
  setLegendSize: (legendSize) => ({
    type: "SET_LEGEND_SIZE",
    legendSize,
  }),
};
// 数据格式
export const configDataFormatAction = {
  setThousandPlaceDisplay: (showThousandPlace) => ({
    type: "SET_THOUSANDPLACE_DISPLAY",
    showThousandPlace,
  }),
  translatePercentage: (translatePercentage) => ({
    type: "TRANSLATE_PERCENTAGE",
    translatePercentage,
  }),
  setDataFormat: (dataFormat) => ({
    type: "SET_DATAFORMAT",
    dataFormat,
  }),
};

export const configFilterAction = {
  addPersonalConfig: (config) => ({
    type: "ADD_PERSONAL_CONFIG",
    config,
  }),
};

export default {
  ...configTextAction,
  ...configThemeAction,
  ...configLegendAction,
  ...configDataFormatAction,
  ...configFilterAction,
};
