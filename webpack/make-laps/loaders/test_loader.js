const loadUtils = require("loader-utils");
const path = require("path");
const fs = require("fs");

module.exports = function(source) {
  const options = loadUtils.getOptions(this) || {};

  source = source.replace(/\[name\]/g, options.name);

  return source;
};
