// 文字设置
export const configTextAction = {
  setChartTitleDisplay: (isShowTitle) => ({
    type: "SET_CHART_TITLE_DISPLAY",
    isShowTitle,
  }),
  setChartTitle: (title) => ({
    type: "SET_CHART_TITLE",
    title,
  }),
  setChartTitleSize: (size) => ({
    type: "SET_CHAET_TITLE_SIZE",
    size,
  }),
  setSourceDisplay: (isShowSource) => ({
    type: "SET_SOURCE_DISPLAY",
    isShowSource,
  }),
  setSource: (source) => ({
    type: "SET_SOURCE",
    source,
  }),
  setSourceSize: (size) => ({
    type: "SET_SOURCE_SIZE",
    size,
  }),
};

export default {
  ...configTextAction,
};
