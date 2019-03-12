const _ = require('lodash')

const util = {
  add (a, b) {
    return a + b
  },
  reduce (a, b) {
    return a - b
  },
  keyBy (obj, key) {
    return _.keyBy(obj, key)
  }
}

module.exports = util
