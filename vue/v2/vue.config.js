const configs = require("./config");
const merge = require("webpack-merge");
const path = require("path");
const CompressionWebpackPlugin = require("compression-webpack-plugin");

const cfg =
  process.env.NODE_ENV === "production" ? configs.build.env : configs.dev.env;

const isPro = process.env.NODE_ENV === "production";

const resolve = dir => {
  return path.join(__dirname, dir);
};

module.exports = {
  configureWebpack: config => {
    if (isPro) {
      return {
        plugins: [
          new CompressionWebpackPlugin({
            filename: "[path].gz[query]",
            algorithm: "gzip",
            test: new RegExp("\\.(js|css)$"),
            threshold: 10240,
            minRatio: 0.8
          })
        ]
      };
    }
  },
  chainWebpack: config => {
    config.plugin("define").tap(args => {
      let name = "process.env";

      args[0][name] = merge(args[0][name], cfg);
      return args;
    });
    config.resolve.alias
      .set("@", resolve("src"))
      .set("_lib", resolve("src/common"))
      .set("_com", resolve("src/components"))
      .set("_img", resolve("src/images"))
      .set("_ser", resolve("src/services"));
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
