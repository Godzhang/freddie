const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const resolve = (dir) => path.resolve(__dirname, dir);
const srcDir = resolve("../src");

module.exports = {
  entry: resolve("../src/main.js"),
  output: {
    path: resolve("../dist"),
    filename: "js/[name].[hash:8].js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      "@": srcDir,
      pages: resolve("../src/pages"),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: srcDir,
        exclude: /node_modules/,
        use: ["babel-loader?cacheDirectory=true"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        include: [srcDir],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        include: [srcDir],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve("../public/index.html"),
    }),
  ],
};
