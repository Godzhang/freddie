const http = require("http");
const slice = Array.prototype.slice;

class LikeExpress {
  constructor() {
    this.routes = {
      all: [],
      get: [],
      post: []
    };
  }

  register(path) {
    const info = {};
    if (typeof path === "string") {
      info.path = path;
      info.stack = slice.call(arguments, 1);
    } else {
      info.path = "/";
      info.stack = slice.call(arguments);
    }
    return info;
  }

  use() {
    const info = this.register.apply(this, arguments);
    this.routes.all.push(info);
  }

  get() {
    const info = this.register.apply(this, arguments);
    this.routes.get.push(info);
  }

  post() {
    const info = this.register.apply(this, arguments);
    this.routes.post.push(info);
  }

  match(method, url) {
    let stack = [];
    if (url === "/favicon.ico") {
      return stack;
    }

    // 获取 routes
    let curRoutes = [];
    curRoutes = curRoutes.concat(this.routes.all);
    curRoutes = curRoutes.concat(this.routes[method]);

    curRoutes.forEach(routeInfo => {
      if (url.indexOf(routeInfo.path) === 0) {
        stack = stack.concat(routeInfo.stack);
      }
    });

    return stack;
  }

  // 核心 next 机制
  handle(req, res, stack) {
    const next = () => {
      const middleware = stack.shift();
      if (middleware) {
        // 执行中间件
        middleware(req, res, next);
      }
    };
    next();
  }

  callback() {
    return (req, res) => {
      res.json = data => {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(data));
      };
      const url = req.url;
      const method = req.method.toLowerCase();

      const resultList = this.match(method, url);
      this.handle(req, res, resultList);
    };
  }

  listen(...args) {
    const server = http.createServer(this.callback());
    server.listen(...args);
  }
}

module.exports = () => {
  return new LikeExpress();
};
