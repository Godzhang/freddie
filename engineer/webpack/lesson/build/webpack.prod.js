const path = require("path");
const baseConfig = require("./webpack.base");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const PurifyCssWebpack = require("purifycss-webpack");
const glob = require("glob");
const UglifyESPlugin = require("uglifyjs-webpack-plugin");

const prodConfig = {
  mode: "production",
  devtool: "cheap-module-source-map",
  output: {
    // filename: "[name].[contenthash].js",
    // chunkFilename: "[name].[contenthash].chunk.js"
    filename: "[name].[contenthash].js",
    chunkFilename: "[name].[contenthash].chunk.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // publicPath: "//img.cdn.com/"
            }
          },
          {
            loader: "css-loader",
            options: { sourceMap: true }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // publicPath: "//img.cdn.com/"
            }
          },
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[name].[contenthash].chunk.css"
    })
    // css tree shaking
    // new PurifyCssWebpack({
    //   paths: glob.sync(path.join(__dirname, "../src/*.html")) // 同步扫描所有html文件中所引用的css
    // })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({ parallel: true }),
      // new UglifyESPlugin({
      //   sourceMap: true
      // }),
      new OptimizeCSSAssetsPlugin()
    ]
  }
};

module.exports = merge(baseConfig, prodConfig);
