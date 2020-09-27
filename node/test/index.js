const http = require("http");
const path = require("path");
const fs = require("fs");
const os = require("os");
const url = require("url");
const net = require("net");
const util = require("util");
const readline = require("readline");

const resolve = (d) => path.resolve(__dirname, d);

// const server = net.createServer((socket) => {
//   console.log("someone connects");
// });
// server.listen(8000, () => {
//   console.log("server is listening at port 8000");
//   const address = server.address();
//   console.log(address.port);
//   console.log(address.address);
//   console.log(address.family);
// });

// console.log(path.resolve(""));
// console.log(__dirname);
// console.log(path.resolve("E:\\freddie\\node\\test"));
// console.log(path.sep);

// const server = http.createServer((req, res) => {
// const method = req.method;
// if (method === "POST") {
// const fileName = path.resolve(__dirname, "biginput.txt");
// const stream = fs.createReadStream(fileName);
// stream.pipe(res);
// fs.readFile(fileName, "utf-8", (err, data) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end(data);
// });
// with no stream
// let dataStr = "";
// req.on("data", (chunk) => {
//   let chunkStr = chunk.toString();
//   dataStr += chunkStr;
// });
// req.on("end", () => {
//   const fileName = path.resolve(__dirname, "post.txt");
//   fs.writeFile(fileName, dataStr, (err) => {
//     res.end("OK");
//   });
// });
// with stream
// const fileName = path.resolve(__dirname, "post.txt");
// const writeStream = fs.createWriteStream(fileName);
// req.pipe(writeStream);
// req.on("end", () => {
//   res.end("OK");
// });
// 文件IO操作
// with no stream
// const readFileName = path.resolve(__dirname, "biginput.txt");
// const writeFileName = path.resolve(__dirname, "post.txt");
// fs.readFile(readFileName, (err, data) => {
//   if (err) {
//     console.log(err.message);
//     return;
//   }
//   const dataStr = data.toString();
//   fs.writeFile(writeFileName, dataStr, (err) => {
//     if (err) {
//       console.log(err.message);
//       return;
//     }
//     console.log("拷贝成功");
//     res.end("OK");
//   });
// });
// with stream
// const readFileName = path.resolve(__dirname, "biginput.txt");
// const writeFileName = path.resolve(__dirname, "post.txt");
// const readStream = fs.createReadStream(readFileName);
// const writeStream = fs.createWriteStream(writeFileName);
// readStream.pipe(writeStream);
// readStream.on("end", () => {
//   res.end("OK");
// });
// readline
// const filename = path.resolve(__dirname, "input.txt");
// const readStream = fs.createReadStream(filename);
// const rl = readline.createInterface({
//   input: readStream,
// });
// rl.on("line", (lineData) => {
//   console.log(lineData);
//   console.log("------ this line read ------");
// });
// rl.on("close", () => {
//   console.log("readline end");
//   res.end("OK");
// });
// }
// });
// server.listen(9000, () => {
//   console.log("server is running at port 9000");
// });

// const Readable = require("stream").Readable;

// const rs = new Readable();
// rs.push("xuexi");
// rs.push("qiaoyafang");
// rs.push(null);

// rs.pipe(process.stdout);

// const Writeable = require("stream").Writable;

// const ws = Writeable();
// ws._write = function (chunk, enc, next) {
//   console.log(chunk.toString());
//   next();
// };
// process.stdin.pipe(ws);

// Promise.resolve()
//   .then(function () {
//     console.log("promise1");
//   })
//   .then(function () {
//     console.log("promise2");
//   });

// process.nextTick(() => {
//   console.log("nextTick1");
//   process.nextTick(() => {
//     console.log("nextTick2");
//     process.nextTick(() => {
//       console.log("nextTick3");
//       process.nextTick(() => {
//         console.log("nextTick4");
//       });
//     });
//   });
// });
// setImmediate(function () {
//   console.log("老铁，我是被 setImmediate 派发的");
// });

// setTimeout(function () {
//   console.log("老铁，我是被 setTimeout 派发的");
// }, 0);

// fs.readFile(resolve("test.js"), "utf8", (err, data) => {
//   setTimeout(function () {
//     console.log("老铁，我是被 setTimeout 派发的");
//   }, 0);
//   setImmediate(function () {
//     console.log("老铁，我是被 setImmediate 派发的");
//   });
// });

setTimeout(() => {
  console.log("timeout1");
}, 0);

setTimeout(() => {
  console.log("timeout2");
  Promise.resolve().then(function () {
    console.log("promise1");
  });
}, 0);

setTimeout(() => {
  console.log("timeout3");
}, 0);
