const loaderUtils = require("loader-utils");
const { SourceNode, SourceMapConsumer } = require("source-map");
const defaultOptions = {
  sourceMap: true
};

module.exports = function(content, sourceMap) {
  this.cacheable && this.cacheable();
  console.log(sourceMap);
  console.log(this.sourceMap);
  const prefix = `'use strict';\n`;
  const options = Object.assign(
    defaultOptions,
    loaderUtils.getOptions(this) || {}
  );
  if (options.sourceMap && sourceMap) {
    let currentRequest = loaderUtils.getCurrentRequest(this);
    let node = SourceNode.fromStringWithSourceMap(
      content,
      new SourceMapConsumer(sourceMap)
    );
    console.log(node);
    node.prepend(prefix);
    let result = node.toStringWithSourceMap({ file: currentRequest });
    console.log(result);
    let callback = this.async();
    callback(null, result.code, result.map.toJSON());
    return;
  }
  return prefix + content;
};
