const loadUtils = require("loader-utils");
const path = require("path");
const fs = require("fs");

module.exports = function(source) {
  const options = loadUtils.getOptions(this) || {};

  console.log("loader-2");

  return source;
};
