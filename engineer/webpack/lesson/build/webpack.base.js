const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { WebPlugin } = require("web-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin");
const webpack = require("webpack");
const DashboardPlugin = require("webpack-dashboard/plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const NamedModulesPlugin = require("webpack/lib/NamedModulesPlugin");
const ModuleConcatenationPlugin = require("webpack/lib/optimize/ModuleConcatenationPlugin");
const MyPlugin = require("../src/my-plugin.js");
// const ParallelUglifyPlugin = require("webpack-parallel-uglify-plugin");
// const HappyPack = require("happypack");
// const happyThreadPool = HappyPack.ThreadPool({ size: 5 });
// const SpeedMeasureWebpackPlugin = require("speed-measure-webpack-plugin");
// const smp = new SpeedMeasureWebpackPlugin();
// const SizePlugin = require("size-plugin");

const resolve = pathname => path.resolve(__dirname, pathname);

const plugins = [
  new MyPlugin(),
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "../src/index.html")
  }),
  new CleanWebpackPlugin(),
  new webpack.ProvidePlugin({
    $: "jquery",
    _join: ["lodash/join"]
  }),
  // new SizePlugin(),
  new DashboardPlugin(),
  new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
  }),
  new webpack.HashedModuleIdsPlugin({
    hashDigest: "hex"
  }),
  new webpack.NamedChunksPlugin(chunk => {
    return chunk.name || Array.from(chunk.modulesIterable, m => m.id).join("_");
  })
  // new ModuleConcatenationPlugin()
  // new NamedModulesPlugin()
  // new HappyPack({
  //   id: "babel",
  //   loaders: ["babel-loader"],
  //   threadPool: happyThreadPool
  // })
  // new webpack.WatchIgnorePlugin([/index\.js/])
  // new webpack.ProgressPlugin((percentage, message, ...args) => {
  //   console.info(~~(percentage * 100) + "%", message, ...args);
  // })
  // new CopyWebpackPlugin([
  //   { from: "./src/**", to: "../src-copy", ignore: ["*.js"] }
  // ])
  // new webpack.BannerPlugin({
  //   banner: "hello world"
  // })
  // new webpack.IgnorePlugin({
  //   resourceRegExp: /\.\/locale$/,
  //   contextRegExp: /moment$/
  // })
];

// const files = fs.readdirSync(path.resolve(__dirname, "../dll"));
// files.forEach(file => {
//   if (/.*\.dll\.js/.test(file)) {
//     plugins.push(
//       new AddAssetHtmlWebpackPlugin({
//         filepath: path.resolve(__dirname, `../dll/${file}`)
//       })
//     );
//   }
//   if (/.*\.manifest\.json/.test(file)) {
//     plugins.push(
//       new webpack.DllReferencePlugin({
//         manifest: path.resolve(__dirname, `../dll/${file}`)
//       })
//     );
//   }
// });

module.exports = {
  entry: {
    main: path.resolve(__dirname, "../src/index.js")
  },
  output: {
    path: path.resolve(__dirname, "../dist")
    // publicPath: "//js.cdn.com/"
  },
  resolve: {
    modules: [resolve("../node_modules")],
    // 举例: 优先找jsnext:main对应的入口文件，为 esModule 方式，支持scoping hoisting 和 tree shaking
    mainFields: ["jsnext:main", "main"], // 第三方库package.json代表入口文件的字段
    extensions: [".js", ".json"],
    // 对第三方库使用alias会影响tree shaking
    alias: {
      "@": resolve("../src"),
      lodash$: resolve("../node_modules/lodash/lodash.js")
    }
  },
  module: {
    // 不会解析某些模块，但不影响打包, fn | regexp | string
    noParse: /lodash$/,
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // include: path.resolve(__dirname, "../src"),
        // use: ["babel-loader", "eslint-loader"]
        use: ["babel-loader"]
        // use: ["happypack/loader?id=babel"]
        // use: [
        //   { loader: "babel-loader" }
        //   // { loader: "imports-loader?this=>window" }
        // ]
      },
      // {
      //   test: require.resolve("jquery"),
      //   use: [
      //     {
      //       loader: "expose-loader",
      //       options: "$"
      //     }
      //   ]
      // },
      // {
      //   test: /globals\.js/,
      //   loader: "exports-loader?file,parse=helpers.parse"
      // },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name].[contenthash].[ext]",
              outputPath: "images/",
              limit: 2048
              // publicPath: "//img.cdn.com/"
            }
          },
          "image-webpack-loader"
        ]
      },
      {
        test: /\.(eot|ttf|svg|woff)$/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "font/"
          }
        }
      }
      // {
      //   test: /\.html$/,
      //   loader: "html-loader"
      // }
    ]
  },
  plugins,
  optimization: {
    runtimeChunk: {
      name: "runtime"
    },
    namedChunks: true,
    // mode为production时默认开启tree shaking
    usedExports: true,
    splitChunks: {
      chunks: "all",
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: "~",
      automaticNameMaxLength: 30,
      name: true,
      cacheGroups: {
        // vendors: false,
        // default: false,
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: "vendor"
          // filename: "vendors.js"
        },
        default: {
          minChunks: 1,
          priority: -20,
          reuseExistingChunk: true,
          filename: "common.js"
        }
      }
    }
  },
  performance: false
};
