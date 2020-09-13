const fs = require("fs");

function mkdir(path, callback) {
  // 将路径按斜线分割为数组
  const pathArr = path.toString().split("/");
  // 逐个遍历路径数组中的值并创建相应的目录
  for (let i = 1, len = pathArr.length; i < len; i++) {
    const newPath = pathArr.slice(0, i + 1).join("/");
    // 判断路径是否存在
    const exists = fs.existsSync(newPath);
    if (exists) {
      continue; // 存在就继续下一层
    }
    fs.mkdirSync(newPath);
  }
  callback && callback();
}
mkdir("./d/c.js");
module.exports = mkdir;
