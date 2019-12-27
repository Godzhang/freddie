const glob = require("glob");
const path = require("path");

const resolve = pathname => path.resolve(__dirname, pathname);

let files = glob.sync("./src/styles/var/*.less");
let globalVarFiles = files
  .filter(file => {
    let reg = /(\w+)\.less$/;
    let filename = file.match(reg)[1];
    return filename !== "index";
  })
  .map(filename => resolve(filename));
console.log(globalVarFiles);
