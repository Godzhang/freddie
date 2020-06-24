import { setValueWithRelation, setValue } from "@/common/utils/set-value.js";
import update from "react-addons-update";
import { themeColors } from "@/common/global/themes.js";
import themeConfig from "@/common/global/themeConfig.js";

const textReducer = {
  SET_CHART_TITLE_DISPLAY(state, action) {
    return setValueWithRelation(state, action, "showTitle");
  },
  SET_CHART_TITLE(state, action) {
    return setValue(state, action, "title");
  },
  SET_CHAET_TITLE_SIZE(state, action) {
    return setValue(state, action, "titleSize");
  },
  SET_SOURCE_DISPLAY(state, action) {
    return setValueWithRelation(state, action, "showSource");
  },
  SET_SOURCE(state, action) {
    return setValue(state, action, "source");
  },
  SET_SOURCE_SIZE(state, action) {
    return setValue(state, action, "sourceSize");
  },
  SET_COMPANY_DISPLAY(state, action) {
    return setValueWithRelation(state, action, "showCompany");
  },
  SET_COMPANY(state, action) {
    return setValue(state, action, "company");
  },
  SET_COMPANY_SIZE(state, action) {
    return setValue(state, action, "companySize");
  },
};

const colorReducer = {
  SET_CHART_THEME(state, action) {
    const theme = themeConfig[action.chartTheme];
    let bgColor = theme.backgroundStyle
      ? theme.backgroundStyle.fill
      : "rgba(255, 255, 255, 0)";
    let textColor = theme.title.fill;
    return update(state, {
      chartTheme: {
        value: {
          $set: action.chartTheme,
        },
      },
      bgColor: {
        value: {
          $set: bgColor,
        },
      },
      textColor: {
        value: {
          $set: textColor,
        },
      },
    });
    // return setValue(state, action, "chartTheme");
  },
  SET_COLOR_THEME(state, action) {
    let newValue = action["colorTheme"];
    return update(state, {
      colorTheme: {
        value: {
          $set: newValue,
        },
      },
      colors: {
        origin: {
          $set: themeColors[newValue],
        },
        value: {
          $set: themeColors[newValue],
        },
      },
    });
  },
  SET_COLORS(state, action) {
    let newValue = state.colors.value.slice();
    newValue[action.index] = action.color;
    return update(state, {
      colors: {
        value: {
          $set: newValue,
        },
      },
    });
  },
  RESET_COLORS(state) {
    return update(state, {
      colors: {
        value: {
          $set: state.colors.origin.slice(),
        },
      },
    });
  },
  SET_TEXT_COLOR(state, action) {
    return setValue(state, action, "textColor");
  },
  SET_BG_COLOR(state, action) {
    return setValue(state, action, "bgColor");
  },
};

const legendReducer = {
  SET_LEGEND_DISPLAY(state, action) {
    return setValueWithRelation(state, action, "showLegend");
  },
  SET_LEGEND_SIZE(state, action) {
    return setValue(state, action, "legendSize");
  },
};

const dataFormatReducer = {
  SET_THOUSANDPLACE_DISPLAY(state, action) {
    return setValue(state, action, "showThousandPlace");
  },
  TRANSLATE_PERCENTAGE(state, action) {
    return setValue(state, action, "translatePercentage");
  },
  SET_DATAFORMAT(state, action) {
    return setValue(state, action, "dataFormat");
  },
};

const configReducer = {
  ADD_PERSONAL_CONFIG(state, action) {
    return { ...state, ...action.config };
  },
};

export default {
  ...textReducer,
  ...colorReducer,
  ...legendReducer,
  ...dataFormatReducer,
  ...configReducer,
};
