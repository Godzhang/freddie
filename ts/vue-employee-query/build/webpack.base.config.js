const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const path = require("path");
const VueloaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  output: { filename: "employee-query.js" },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".vue"],
    alias: {
      vue: "vue/dist/vue.esm.js"
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.tsx?$/i,
        use: [
          {
            loader: "ts-loader",
            options: {
              appendTsSuffixTo: [/\.vue$/]
              // transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      }
    ]
  },
  plugins: [new ForkTsCheckerWebpackPlugin(), new VueloaderPlugin()],
  optimization: {
    splitChunks: {
      // 默认把项目中使用的 node_modules 中的包抽离出来
      chunks: "all"
    }
  }
};
