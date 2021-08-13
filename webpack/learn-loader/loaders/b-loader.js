function bLoaders(content, map, meta) {
  console.log("开始执行 bLoader Normal Loader");
  return content + "bLoader->";
}

/**
 * @remainingRequest 剩余请求
 * @precedingRequest 前置请求
 * @data 数据对象
 */
bLoaders.pitch = function (remainingRequest, precedingRequest, data) {
  console.log("开始执行 bLoader Pitching Loader");
  console.log(remainingRequest);
  console.log(precedingRequest);
  console.log(data);
  return "bLoader Pitching Loader->";
};

module.exports = bLoaders;
