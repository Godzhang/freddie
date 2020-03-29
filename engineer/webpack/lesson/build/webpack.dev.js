const webpack = require("webpack");
const baseConfig = require("./webpack.base");
const merge = require("webpack-merge");

const devConfig = {
  mode: "development",
  output: {
    filename: "[name].js",
    chunkFilename: "[name].chunk.js"
  },
  // devtool: "cheap-module-eval-source-map",
  devtool: "source-map",
  devServer: {
    overlay: true,
    contentBase: "./dist",
    open: true,
    hot: true,
    hotOnly: false,
    proxy: {
      "/react/api": {
        target: "http://www.dell-lee.com/",
        pathRewrite: {
          "header.json": "demo.json"
        },
        changeOrigin: true
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              // importLoaders: 2,
              // modules: true
            }
          },
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};

module.exports = merge(baseConfig, devConfig);
