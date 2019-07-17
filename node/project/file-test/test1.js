// const fs = require("fs");
// const path = require("path");

// const fileName1 = path.resolve(__dirname, "data1.txt");
// const fileName2 = path.resolve(__dirname, "data2.txt");

// const readStream = fs.createReadStream(fileName1);
// const writeStream = fs.createWriteStream(fileName2);

// readStream.pipe(writeStream);
// let i = 0;
// readStream.on("data", chunk => {
//   i++;
//   console.log(chunk.toString());
// });

// readStream.on("end", () => {
//   console.log(i);
//   console.log("done");
// });

const http = require("http");
const fs = require("fs");
const path = require("path");
const fileName1 = path.resolve(__dirname, "data1.txt");

http
  .createServer((req, res) => {
    if (req.method === "GET") {
      const readStream = fs.createReadStream(fileName1);
      readStream.pipe(res);
    }
  })
  .listen(8000);
