const express = require("./like-express");

const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use((req, res, next) => {
  req.cookie = {
    userId: "123"
  };
  next();
});

app.use((req, res, next) => {
  setTimeout(() => {
    req.body = {
      a: 190,
      b: 200
    };
    next();
  });
});

app.use("/api", (req, res, next) => {
  console.log("api");
  next();
});
app.get("/api", (req, res, next) => {
  console.log("get api");
  next();
});
app.post("/api", (req, res, next) => {
  console.log("post api");
  next();
});
app.get("/api/get-cookie", (req, res, next) => {
  console.log("get /api/get-cookie");
  res.json({
    errno: 0,
    data: req.cookie
  });
});
app.post("/api/get-post-data", (req, res, next) => {
  console.log("post/api/get-psot-data");
  res.json({
    errno: 0,
    data: req.body
  });
});
app.use((req, res, next) => {
  console.log("处理404");
  res.json({
    errno: -1,
    msg: "404 not found"
  });
});
app.listen(3000, () => {
  console.log("server is running at port 3000");
});
