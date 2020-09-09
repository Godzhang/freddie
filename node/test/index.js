const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const fileList = fs.readdirSync("./");
    res.writeHead("200", {
      "Content-Type": "text/plain",
      "X-Power-By": "bacon",
    });
    res.end(fileList.toString());
  } else {
    const path = req.url;
    fs.readFile(`.${path}`, (err, data) => {
      if (err) {
        console.log(err);
        res.end(err.toString());
        return;
      }
      res.writeHead("200", { "Content-Type": "text/plain" });
      res.end(data);
    });
  }
});

// server.on("connection", (req, res) => {
//   console.log("connected");
// });

// server.on("request", (req, res) => {
//   console.log("request");
// });

process.on("uncaughtException", () => {
  console.log("got error");
});

server.listen(9000);
