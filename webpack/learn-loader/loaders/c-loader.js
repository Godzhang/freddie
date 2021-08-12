function cLoaders(content, map, meta) {
  console.log("开始执行 cLoader Normal Loader");
  return content + "[cLoader->";
}

/**
 * @remainingRequest 剩余请求
 * @precedingRequest 前置请求
 * @data 数据对象
 */
cLoaders.pitch = function (remainingRequest, precedingRequest, data) {
  console.log("开始执行 cLoader Pitching Loader");
  console.log(remainingRequest);
  console.log(precedingRequest);
  console.log(data);
};

module.exports = cLoaders;
