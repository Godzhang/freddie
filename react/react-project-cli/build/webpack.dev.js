const webpack = require("webpack");
const { merge } = require("webpack-merge");
const webpackCommon = require("./webpack.common");

module.exports = merge(webpackCommon, {
  mode: "development",
  devServer: {
    port: 9000,
    hot: true,
    open: true,
    historyApiFallback: true,
    compress: true,
  },
  plugins: [
    new webpack.NamedModulesPlugin(), // 在热加载时直接返回更新文件名，而不是文件的id
    new webpack.HotModuleReplacementPlugin(),
  ],
});
