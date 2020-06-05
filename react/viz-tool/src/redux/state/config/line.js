import baseConfig from "./common.js.js";

function mergeConfig(base, target) {
  return Object.assign(base, target);
}

const lineConfig = {};

export default mergeConfig(baseConfig, lineConfig);
