import update from "react-addons-update";

const chartSize = {
  width: 600,
  height: 337.5,
  scale: 16 / 9,
};

export default (state = chartSize, action) => {
  switch (action.type) {
    case "SET_CHART_SIZE":
      return update(state, {
        width: {
          $set: action.width,
        },
        height: {
          $set: action.height,
        },
      });
    case "CALC_CHART_SIZE":
      const containerWidth = document.documentElement.offsetWidth - 400;
      const containerHeight = document.documentElement.offsetHeight - 48;
      const scale = state.scale;
      let width = 0;
      let height = 0;
      if (scale === 16 / 9) {
        width = ~~(containerWidth * 0.8);
        height = ~~(width / scale);
      } else if (scale === 9 / 16) {
        height = ~~(containerHeight * 0.8);
        width = ~~(height * scale);
      }
      return update(state, {
        width: {
          $set: width,
        },
        height: {
          $set: height,
        },
      });
    case "SET_CHART_SCALE":
      return update(state, {
        scale: {
          $set: action.scale,
        },
      });
    default:
      return state;
  }
};
