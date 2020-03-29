const loaderUtils = require("loader-utils");

module.exports = function(content) {
  const url = loaderUtils.interpolateName(this, "[name].[ext]", content);
  this.emitFile(url, `export default ${content}`);
  return content;
};
