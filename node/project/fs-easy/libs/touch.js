const fs = require("fs");

function touch(path, callback) {
  const pathArr = path.toString().split("/");
  let len = pathArr.length;

  for (let i = 1; i < len; i++) {
    const curPath = pathArr.slice(0, i + 1).join("/");
    if (fs.existsSync(curPath)) return;
    if (i === len - 1) {
      const fd = fs.openSync(curPath, "w");
      fs.closeSync(fd);
    } else {
      fs.mkdirSync(curPath);
    }
  }

  callback && callback();
}

module.exports = touch;
