var express = require("express");
var path = require("path");
var fs = require("fs");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
const session = require("express-session");
const RedisStore = require("connect-redis")(session);

const blogRouter = require("./routes/blog");
const userRouter = require("./routes/user");

var app = express();

// view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "jade");
const ENV = process.env.NODE_ENV;
if (ENV !== "production") {
  app.use(logger("dev"));
} else {
  const fileName = path.resolve(__dirname, "logs", "access.log");
  const writeStream = fs.createWriteStream(fileName, { flags: "a" });
  app.use(
    logger("combined", {
      stream: writeStream
    })
  );
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

// session
const redisClient = require("./db/redis");
const sessionStore = new RedisStore({
  client: redisClient
});
app.use(
  session({
    secret: "WJiol_8876#asd",
    cookie: {
      // path: "/", // 默认
      // httpOnly: true, // 默认
      maxAge: 24 * 60 * 60 * 1000
    },
    store: sessionStore
  })
);

app.use("/api/blog", blogRouter);
app.use("/api/user", userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "dev" ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render("error");
  res.json({ error: err });
});

module.exports = app;
