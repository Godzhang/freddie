"use strict";

var _ = require('lodash');

var util = {
  add: function add(a, b) {
    return a + b;
  },
  reduce: function reduce(a, b) {
    return a - b;
  },
  keyBy: function keyBy(obj, key) {
    return _.keyBy(obj, key);
  }
};
module.exports = util;