import config from "../../state/config/common.js";

export default (state = config, action) => {
  switch (action.type) {
    case "SET_CHART_TITLE_DISPLAY":
      return {
        ...state,
        ...{
          isShowTitle: {
            ...state.isShowTitle,
            ...{ value: action.isShowTitle },
          },
        },
      };
    case "SET_SOURCE_DISPLAY":
      return {
        ...state,
        ...{
          isShowSource: {
            ...state.isShowSource,
            ...{ value: action.isShowSource },
          },
        },
      };
    default:
      return state;
  }
};
