const fs = require("fs");

function rmdir(path, callback) {
  const exists = fs.existsSync(path);
  if (!exists) return;

  const files = fs.readdirSync(path);
  for (let i = 0, len = files.length; i < len; i++) {
    let curPath = path + "/" + files[i];
    if (fs.statSync(curPath).isDirectory()) {
      rmdir(curPath);
    } else {
      fs.unlinkSync(curPath);
    }
  }
  fs.rmdirSync(path);
  callback && callback();
}

module.exports = rmdir;
