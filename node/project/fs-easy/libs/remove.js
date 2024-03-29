const fs = require("fs");

function remove(path, callback) {
  const exists = fs.existsSync(path);
  if (!exists) return;

  if (fs.statSync(path).isFile()) {
    fs.unlinkSync(path);
    callback && callback();
  }
}

module.exports = remove;
