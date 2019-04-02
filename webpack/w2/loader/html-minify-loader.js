const Minimize = require('minimize')
const loaderUtils = require('loader-utils')

module.exports = function (source) {
  let options = loaderUtils.getOptions(this) || {}
  let minimize = new Minimize(options)
  return minimize.parse(source)
}
