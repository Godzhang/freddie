const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js",
    index2: "./src/index2.js"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    chunkFilename: "[name].[contenthash].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, "src")],
        use: [{ loader: MiniCssExtractPlugin.loader }, { loader: "css-loader" }]
      }
    ]
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: "all"
    }
    // moduleIds: "hashed"
  },
  plugins: [
    // 默认使用自增id进行模块标识。HashedModuleIdsPlugin会根据模块路径生成moduleId，可以稳定moduleId
    new webpack.HashedModuleIdsPlugin({
      hashDigest: "hex"
    }),
    // chunkId使用数字自增命名，使用下面插件稳定chunkId
    new webpack.NamedChunksPlugin(
      chunk =>
        chunk.name || Array.from(chunk.modulesIterable, m => m.id).join("_")
    ),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[name].[contenthash].css"
    })
  ]
};
