const loaderUtils = require("loader-utils");
const webpack = require("webpack");

module.exports = function(content) {
  // const { name } = loaderUtils.getOptions(this);
  const json = JSON.stringify(content)
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");

  const url = loaderUtils.interpolateName(this, "[name].[ext]", content);
  console.log(url);
  console.log("emitFile" in this);
  this.emitFile(url, `export default ${json}`);
  // return content;
  this.callback(null, content);
};
