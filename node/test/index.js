const http = require("http");
const https = require("https");
const fs = require("fs");
const url = require("url");
const net = require("net");

console.log(process.env.NODE_ENV);

// let server = net.createServer(c => {
//   console.log("client connected");
//   c.on("end", () => console.log("client disconnected"));
//   c.write("hello\r\n");
//   c.pipe(c);
// });
// server.on("error", err => {
//   throw err;
// });
// server.listen(8001, () => console.log("server bound"));

// http.createServer((req, res) => {
//   let url = req.url.substring(1, req.url.length);

//   let proxyRequest = http.request(url, pres => {
//     res.writeHead(pres.statusCode, pres.headers);
//     pres.on("data", data => res.write(data));
//     pres.on("end", () => res.end());
//   });

//   req.on("data", data => propsData.write(data));
//   req.on("end", () => proxyRequest.end());
// });

// server.listen(8001);

// let server = http.createServer((req, res) => {});
// // res.writeHead(200, { "Content-Type": "text/plain" });
// server.listen(8001);
// console.log("server is running at port 8001");
