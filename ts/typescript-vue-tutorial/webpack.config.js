const path = require("path");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const env = process.env.NODE_ENV;

const config = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: env === "production" ? "/dist/" : "./",
    filename: "build.js"
  },
  resolve: {
    extensions: [".ts", ".js", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm.js"
    }
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    historyApiFallback: true,
    hot: true
  },
  performance: {
    hints: false
  },
  devtool: env === "production" ? "#source-map" : "#eval-source-map",
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          scss: "vue-style-loader!css-loader!sass-loader",
          sass: "vue-style-loader!css-loader!sass-loader?indentedSyntax"
        }
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]"
        }
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html")
    }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      "typeof window": JSON.stringify("object"),
      "process.env": { NODE_ENV: JSON.stringify(env) }
    })
  ]
};

module.exports = config;
