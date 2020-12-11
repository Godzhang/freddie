export const hexToRgba = function(hex, al = 100) {
  let hexColor = /^#/.test(hex) ? hex.slice(1) : hex;
  let alp = hex === "transparent" ? 0 : Math.ceil(al);
  let r;
  let g;
  let b;
  hexColor = /^[0-9a-f]{3}|[0-9a-f]{6}$/i.test(hexColor) ? hexColor : "fffff";
  if (hexColor.length === 3) {
    hexColor = hexColor.replace(/(\w)(\w)(\w)/gi, "$1$1$2$2$3$3");
  }
  r = hexColor.slice(0, 2);
  g = hexColor.slice(2, 4);
  b = hexColor.slice(4, 6);
  r = parseInt(r, 16);
  g = parseInt(g, 16);
  b = parseInt(b, 16);
  return {
    hex: "#" + hexColor,
    alpha: alp,
    rgbStr: `${r}, ${g}, ${b}`,
    rgba:
      "rgba(" + r + ", " + g + ", " + b + ", " + (alp / 100).toFixed(2) + ")"
  };
};

export const colorMix = (c1, c2, ratio) => {
  ratio = Math.max(Math.min(Number(ratio), 1), 0);
  let r1 = parseInt(c1.substring(1, 3), 16);
  let g1 = parseInt(c1.substring(3, 5), 16);
  let b1 = parseInt(c1.substring(5, 7), 16);
  let r2 = parseInt(c2.substring(1, 3), 16);
  let g2 = parseInt(c2.substring(3, 5), 16);
  let b2 = parseInt(c2.substring(5, 7), 16);
  let r = Math.round(r1 * (1 - ratio) + r2 * ratio);
  let g = Math.round(g1 * (1 - ratio) + g2 * ratio);
  let b = Math.round(b1 * (1 - ratio) + b2 * ratio);
  r = ("0" + (r || 0).toString(16)).slice(-2);
  g = ("0" + (g || 0).toString(16)).slice(-2);
  b = ("0" + (b || 0).toString(16)).slice(-2);
  return "#" + r + g + b;
};

export const actionByPercentage = (percentage, events) => {
  let ratio = 0;
  if (percentage === 0) {
    events[0](percentage, ratio);
  } else if (percentage > 0 && percentage <= 0.2) {
    ratio = percentage / 0.2;
    events[1](percentage, ratio, 1 - ratio);
  } else if (percentage > 0.2 && percentage <= 0.4) {
    ratio = (percentage - 0.2) / 0.2;
    events[2](percentage, ratio, 1 - ratio);
  } else if (percentage > 0.4 && percentage <= 0.6) {
    ratio = (percentage - 0.4) / 0.2;
    events[3](percentage, ratio, 1 - ratio);
  } else if (percentage > 0.6 && percentage <= 0.8) {
    ratio = (percentage - 0.6) / 0.2;
    events[4](percentage, ratio, 1 - ratio);
  } else {
    ratio = (percentage - 0.8) / 0.2;
    events[5](percentage, ratio, 1 - ratio);
  }
};
