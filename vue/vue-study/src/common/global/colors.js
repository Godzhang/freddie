import { hexToRgba } from "../utils/utils";

// 渐变色
export const gradientColors = {
  red: "#ff5155",
  green: "#78ff85",
  blue: "#51e4ff",
  white: "#ffffff",
  yellow: "#efff82"
};

export const gradientRgbColors = (colors => {
  const result = {};
  for (let key in colors) {
    result[key] = hexToRgba(colors[key]).rgbStr;
  }
  return result;
})(gradientColors);

// 背景色
export const coverBgColors = {
  black: "#1a1c1e",
  red: "#430d0d",
  green: "#16430d",
  blue: "#0d1d43",
  white: "#b9c2d5",
  yellow: "#efff82"
};

// 滑动条颜色
export const sliderColors = {
  init: "#7a8284",
  red: "#ea3744",
  green: "#2cd51a",
  blue: "#37d3ea",
  white: "#ffffff",
  yellow: "#ece63e"
};
