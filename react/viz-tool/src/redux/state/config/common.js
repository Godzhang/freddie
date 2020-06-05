const animateConfig = {
  speed: {
    value: "medium",
    type: "Select",
  },
};
const textConfig = {
  isShowTitle: {
    value: true,
    type: "Switch",
  },
  title: {
    value: "标题",
    type: "Input",
  },
  titleSize: {
    value: 36,
    type: "InputNumber",
  },
};

const baseConfig = { animateConfig, textConfig };

export default baseConfig;
