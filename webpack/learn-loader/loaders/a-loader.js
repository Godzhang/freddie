function aLoaders(content, map, meta) {
  console.log("开始执行 aLoader Normal Loader");
  content += "aLoader]";
  return `module.exports = '${content}'`;
}

/**
 * @remainingRequest 剩余请求
 * @precedingRequest 前置请求
 * @data 数据对象
 */
aLoaders.pitch = function (remainingRequest, precedingRequest, data) {
  console.log("开始执行 aLoader Pitching Loader");
  console.log(remainingRequest);
  console.log(precedingRequest);
  console.log(data);
};

module.exports = aLoaders;
