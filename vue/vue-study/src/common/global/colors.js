import { hexToRgba } from "../utils/utils";

// 渐变色
export const gradientColors = {
  red: "#ff5155",
  green: "#69ed85",
  blue: "#69d3ed",
  white: "#e4eef0",
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
  blue: "#0d3080",
  white: "#5b667f",
  yellow: "#62550c"
};

// 滑动条颜色区间
export const sliderIntervalColors = {
  red: ["#bf1d29", "#ea3744"],
  green: ["#1b8a0f", "#2cd51a"],
  blue: ["#1294bf", "#37d3ea"],
  white: ["#bcc3c5", "#ffffff"],
  yellow: ["#aaa50f", "#d7d01a"]
};

export const shuffleBgColors = {
  red: "#cd3020",
  green: "#2b8308",
  blue: "#1111ba",
  white: "#80868c",
  yellow: "#d1b11d"
};
