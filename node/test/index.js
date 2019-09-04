const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");
const url = require("url");
const net = require("net");
const readline = require("readline");
const crypto = require("crypto");
const zlib = require("zlib");

const filePath = "./index.html";

let server = http.createServer((req, res) => {
  let acceptEncoding = req.headers["accept-encoding"];
  let gzip;

  if (acceptEncoding.indexOf("gzip") !== -1) {
    // gzip = zlib.createGzip();

    res.writeHead(200, {
      "Content-Encoding": "gzip"
    });
    // fs.createReadStream(filePath)
    //   .pipe(gzip)
    //   .pipe(res);
    console.log(filePath);
    let zb = zlib.gzipSync(filePath);
    console.log(zb);
    res.end(zb);
  } else {
    res.end(responseText);
    // fs.createReadStream(filePath).pipe(res);
  }
});
server.listen(3000);
