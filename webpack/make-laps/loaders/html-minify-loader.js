const loaderUtils = require("loader-utils");
const Minimize = require("minimize");

module.exports = function(source) {
  this.cacheable && this.cacheable();
  const options = loaderUtils.getOptions(this) || {};
  let minimize = new Minimize(options);
  return minimize.parse(source);
};
