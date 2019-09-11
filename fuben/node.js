const fs = require("fs");

let dataArr = [];

for (let i = 0; i < 100000; i++) {
  dataArr.push(`我是第${i + 1}条数据`);
}

fs.writeFile("./js/data.js", JSON.stringify(dataArr), err => {
  console.log("write succeed");
});
