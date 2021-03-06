const fs = require("fs");
const mkdir = require("./mkdir");

function copy(src, dist) {
  // 判断引入路径是否存在
  const existSrc = fs.existsSync(src);
  if (!existSrc) return;

  // 判断输出路径是否存在，不存在则创建
  const existDist = fs.existsSync(dist);
  if (!existDist) {
    mkdir(dist);
  }

  let filename, distPath, srcPath, readAble, writeAble;
  // 判断是否复制文件
  if (fs.statSync(src).isFile()) {
    // 获取文件名
    filename = src.toString().match(/\/([^\/]+)$/g)[0];
    distPath = dist + filename;
    // 利用文件流写入文件内容
    readAble = fs.createReadStream(src);
    writeAble = fs.createWriteStream(distPath);
    readAble.pipe(writeAble);
  } else {
    // 如果是复制文件夹
    const paths = fs.readdirSync(src);
    for (let i = 0, len = paths.length; i < len; i++) {
      srcPath = src + "/" + paths[i];
      distPath = dist + "/" + paths[i];
      // 如果文件夹中有文件，通过流创建和写入文件
      if (fs.statSync(srcPath).isFile()) {
        readAble = fs.createReadStream(srcPath);
        writeAble = fs.createWriteStream(distPath);
        readAble.pipe(writeAble);
      } else if (fs.statSync(srcPath).isDirectory()) {
        copy(srcPath, distPath);
      }
    }
  }
}

module.exports = copy;
