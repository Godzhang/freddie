const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/sub/**", {
      target: "http://172.22.27.137:8082/",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/list/**", {
      target: "http://172.22.27.137:8082/",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/info/**", {
      target: "http://172.22.27.137:8082/",
      changeOrigin: true,
    })
  );
};
