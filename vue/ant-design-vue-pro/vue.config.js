module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        bypass: function(req, res) {
          if (req.headers.accept.indexOf("html") !== -1) {
          } else if (process.env.MOCK !== "none") {
            const name = req.path
              .split("/api/")[1]
              .split("/")
              .join("_");
            const path = `./mock/${name}`;
            const mock = require(path);
            const result = mock(req.method);
            delete require.cache[require.resolve(path)];
            return res.send(result);
          }
        }
      }
    }
  }
};
