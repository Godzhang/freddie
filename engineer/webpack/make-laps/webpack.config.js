const path = require("path");
// const CopyrightWebpackPlugin = require("./plugins/copyright-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FileListPlugin = require("./plugins/file-list-webpack-plugin");
const WebpackPluginApiPlugin = require("./plugins/webpack-plugin-api-plugin");
const ZipPlugin = require("./plugins/zip-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  plugins: [
    // new CopyrightWebpackPlugin({
    //   name: "zhangqi"
    // })
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html")
    }),
    new ZipPlugin({
      filename: "offline"
    })
    // new FileListPlugin({
    //   filename: "file-list",
    //   ext: "txt"
    // }),
    // new WebpackPluginApiPlugin()
  ],
  resolveLoader: {
    modules: ["node_modules", path.resolve(__dirname, "./loaders")]
  },
  module: {
    rules: [
      // {
      //   test: /\.html$/,
      //   use: [
      //     "html-loader",
      //     { loader: "html-minify-loader", options: { comments: false } }
      //   ]
      // },
      {
        test: /\.js$/,
        use: [
          {
            loader: "test_loader"
          }
        ]
      },
      {
        test: /\.js$/,
        loader: "test_2_loader"
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          "sprite-loader"
          // {
          //   loader: "add-use-strict-loader",
          //   options: {
          //     sourceMap: true
          //   }
          // }
          // {
          //   loader: "test_loader"
          // }
        ]
      },
      {
        test: /\.png|jpe?g|gif$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10240
            }
          }
        ]
      }
      // {
      //   test: /\.(txt)$/,
      //   use: [
      //     "html-loader",
      //     {
      //       loader: "html-layout-loader",
      //       options: { layoutPath: path.resolve(__dirname, "./src/index.html") }
      //     }
      //   ]
      // }
      //     {
      //       test: /\.js$/,
      //       use: [
      //         {
      //           loader: "replaceLoader"
      //         },
      //         {
      //           loader: "replaceLoaderAsync",
      //           options: {
      //             name: "mercury"
      //           }
      //         }
      //       ]
      //     }
    ]
  }
};
