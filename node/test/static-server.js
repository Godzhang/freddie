const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
const mime = require("./mime");

const dirPath = "./app";

const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname;
  let filePath = dirPath + pathname;
  console.log(filePath);
  if (pathname === "/") {
    filePath = path.resolve(dirPath, "index.html");
  }

  fs.exists(filePath, (exist) => {
    if (exist) {
      const data = fs.readFileSync(filePath);
      const contentType = mime[path.extname(filePath)];
      res.writeHead(200, {
        "content-type": contentType,
      });
      res.write(data);
      res.end();
    } else {
      res.end("404");
    }
  });
});

server.listen(8000, () => {
  console.log("listen port 8000");
});
