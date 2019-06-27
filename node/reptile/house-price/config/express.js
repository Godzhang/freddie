const express = require("express");
const bodyParser = require("body-parser");
const controller = require("../app/controllers/rental.server.controller");

module.exports = function() {
  console.log("init express...");
  const app = express();

  app.set("view engine", "ejs");
  app.use(express.static(__dirname + "/../views"));

  // bodyParser.json()
  // 返回一个仅解析json格式数据的中间件
  app.use(bodyParser.json());

  require("../app/routes/rental.server.routes")(app);
  controller.init();

  app.use((req, res, next) => {
    res.status(404);
    try {
      return res.json("No Found");
    } catch (e) {
      console.error("404 set header after send");
    }
  });

  app.use((err, req, res, next) => {
    if (!err) {
      return next();
    }
    res.status(500);
    try {
      return res.json(err.message || "server err");
    } catch (e) {
      console.error("500 set header after send.");
    }
  });

  return app;
};
