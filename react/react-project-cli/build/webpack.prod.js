const { merge } = require("webpack-merge");
const os = require("os");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HappyPack = require("happypack");

const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const webpackCommon = require("./webpack.common");

module.exports = merge(webpackCommon, {
  mode: "production",
  output: {
    path: resolve("../dist"),
    filename: "js/[name].[chunkhash:8].js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: srcDir,
        exclude: /node_modules/,
        use: ["happypack/loader?id=happybabel"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:8].css",
      chunkFilename: "chunk/[id].[contenthash:8].css",
    }),
    new HappyPack({
      id: "happybabel",
      loaders: ["babel-loader?cacheDirectory=true"],
      threadPool: happyThreadPool,
      cache: true,
      verbose: true,
    }),
  ],
});
