const path = require("path");
const Mock = require("./mock/mock.js");
const isDev = process.env.NODE_ENV === "development";

module.exports = {
  publicPath: "./",
  outputDir: "dist",
  lintOnSave: false,
  chainWebpack: () => {},
  configureWebpack: config => {
    config.mode = isDev ? "development" : "production";

    Object.assign(config, {
      resolve: {
        extensions: [".js", ".vue", ".json", ".ts", ".tsx"],
        alias: {
          vue$: "vue/dist/vue.esm.js",
          "@": path.resolve(__dirname, "./src")
        }
      }
    });
  },
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {},
    requireModuleExtension: false
  },
  parallel: require("os").cpus().length > 1,
  pwa: {},
  devServer: {
    open: process.platform === "darwin",
    host: "localhost",
    port: 3001,
    https: false,
    hotOnly: false,
    proxy: {
      "/api": {
        target: "http://localhost:3000/",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    },
    before: app => {
      Mock(app);
    }
  },
  pluginOptions: {}
};
