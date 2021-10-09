const webpack = require("webpack");
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const resolve = (pathname) => path.resolve(__dirname, pathname);

module.exports = {
  mode: "production",
  entry: resolve("./src/main.js"),
  output: {
    filename: "[name].[contenthash:7].js",
    path: resolve("./dist"),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".vue", ".js", ".json"],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: resolve("./public/index.html"),
    }),
  ],
  devServer: {
    port: 9009,
    hot: true,
    open: true,
  },
};
