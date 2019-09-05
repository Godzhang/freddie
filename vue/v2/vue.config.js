const configs = require("./config");
const merge = require("webpack-merge");

const cfg =
  process.env.NODE_ENV === "production" ? configs.build.env : configs.dev.env;

module.exports = {
  chainWebpack: config => {
    config.plugin("define").tap(args => {
      let name = "process.env";

      args[0][name] = merge(args[0][name], cfg);
      return args;
    });
  },
  devServer: {
    proxy: {
      "/repos": {
        target: "https://api.github.com",
        changeOrigin: true
      }
    }
  }
};
