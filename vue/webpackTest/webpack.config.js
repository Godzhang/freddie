const path = require("path");
const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => {
  if (!env) {
    env = {};
  }

  let plugins = [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "app/views/index.html")
    })
  ];

  if (env.production) {
    plugins.push(
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: "production"
        }
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css"
      })
    );
  }

  return {
    entry: {
      app: "./app/js/main.js"
    },
    output: {
      filename: "[name].min.js",
      path: path.resolve(__dirname, "dist")
    },
    resolve: {
      extensions: [".js", ".vue", ".json"],
      alias: {
        vue$: "vue/dist/vue.esm.js"
      }
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          loader: "html-loader"
        },
        {
          test: /\.vue$/,
          loader: "vue-loader",
          options: {}
        },
        {
          test: /\.scss$/,
          use: [
            env.production ? MiniCssExtractPlugin.loader : "vue-style-loader",
            {
              loader: "css-loader",
              options: {
                modules: true
              }
            },
            {
              loader: "px2rem-loader",
              options: {
                remUnit: 75,
                remPrecision: 8
              }
            },
            "sass-loader"
          ]
        }
      ]
    },
    plugins,
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 9000
    }
  };
};
