/**
 * 对象的toString方法需自行实现，否则就是[object Object]
 * @param {*} item
 */
const defaultToString = item => {
  if (item === null) {
    return "null";
  } else if (item === undefined) {
    return "undefined";
  } else if (typeof item === "string" || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
};

module.exports = {
  defaultToString
};
