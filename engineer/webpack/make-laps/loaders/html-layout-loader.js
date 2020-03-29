const loaderUtils = require("loader-utils");
const fs = require("fs");

module.exports = function(source) {
  this.cacheable && this.cacheable();
  const options = loaderUtils.getOptions(this);
  this.addDependency(options.layoutPath);
  const layout = fs.readFileSync(options.layoutPath, "utf-8");
  return layout.replace("{{__content__}}", source);
};
