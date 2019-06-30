const http = require("http");
const querystring = require("querystring");

let server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  const path = url.split("?")[0];
  const query = querystring.parse(url.split("?")[1]);

  // 设置返回格式为JSON
  res.setHeader("Content-Type", "application/json");

  const resData = {
    method,
    url,
    path,
    query
  };

  if (method === "GET") {
    res.end(JSON.stringify(resData));
  }
  if (method === "POST") {
    let postData = "";
    res.on("data", chunk => {
      postData += chunk.toString();
    });
    res.on("end", () => {
      resData.postData = postData;
      res.end(JSON.stringify(resData));
    });
    res.on("error", err => console.log(err));
  }
});

server.listen(8001);
console.log("server is running at port 8001");
