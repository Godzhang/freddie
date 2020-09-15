const fs = require("fs");
const mkdir = require("./mkdir");

function rename(src, dist) {
  const existSrc = fs.existsSync(src);
  if (!existSrc) return;

  const existDist = fs.existsSync(dist);
  if (!existDist) {
    mkdir(dist);
  }

  let filename, distPath, srcPath;
  // 如果剪切文件
  if (fs.statSync(src).isFile()) {
    filename = src.toString().match(/\/([^\/]+)$/g)[0];
    distPath = dist + filename;
    fs.renameSync(src, distPath);
  } else {
    // 剪切目录
    const paths = fs.readdirSync(src);
    for (let i = 0, len = paths.length; i < len; i++) {
      srcPath = src + "/" + paths[i];
      distPath = dist + "/" + paths[i];
      fs.renameSync(srcPath, distPath);
    }
  }
}

module.exports = rename;
