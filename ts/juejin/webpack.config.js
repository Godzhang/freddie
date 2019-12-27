const path = require("path");
const glob = require("glob");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TsImportPlugin = require("ts-import-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const pkg = require("./package.json");
const Mock = require("./mock");

const isDev = process.env.NODE_ENV === "development";
const resolve = pathname => path.resolve(__dirname, pathname);
const port = 3000;

let files = glob.sync("./src/styles/var/*.less");
let globalVarFiles = files
  .filter(file => {
    let reg = /(\w+)\.less$/;
    let filename = file.match(reg)[1];
    return filename !== "index";
  })
  .map(filename => resolve(filename));

const config = {
  mode: process.env.NODE_ENV,
  entry: resolve("./src/main.ts"),
  output: {
    path: resolve("./dist"),
    publicPath: isDev ? "" : "/dist/",
    filename: "[name].[chunkhash:8].js"
  },
  resolve: {
    extensions: [".ts", ".js", ".vue", "json"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": resolve("./src")
    }
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          test: resolve("./node_modules"),
          name: "vendor",
          enforce: true
        }
        // styles: {
        //   name: "styles",
        //   test: /\.css$/,
        //   chunks: "all",
        //   enforce: true
        // }
      }
    }
    // minimizer: [
    //   new OptimizeCSSAssetsPlugin({
    //     assetNameRegExp: /\.css$/g,
    //     cssProcessor: require("cssnano")
    //   })
    // ]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
          getCustomTransformers: () => ({
            before: [
              TsImportPlugin({
                libraryDirectory: "src/components",
                libraryName: "view-design"
              })
            ]
          })
        }
      },
      {
        test: /\.(jpg|png|gif|svg|ttf|woff|woff2)$/,
        loader: "file-loader",
        exclude: [resolve("./src/icons/svg")],
        options: {
          name: "[name].[ext]?[hash]",
          outputPath: "assets/"
        }
      },
      {
        test: /\.svg$/,
        loader: "svg-sprite-loader",
        include: [resolve("./src/icons/svg")],
        options: {
          symbolId: "icon-[name]"
        }
      },
      {
        test: /\.css$/,
        use: [
          isDev ? "vue-style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.less$/,
        use: [
          isDev ? "vue-style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true
            }
          },
          {
            loader: "sass-resources-loader",
            options: {
              resources: globalVarFiles
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: resolve("./public/index.html"),
      title: pkg.name,
      favicon: resolve("./public/favicon.ico")
    })
  ],
  devServer: {
    contentBase: resolve("./dist"),
    compress: true,
    port,
    overlay: true,
    proxy: {
      "/api": {
        target: `http://localhost:${port}/`,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    },
    before: app => {
      Mock(app);
    }
  },
  devtool: isDev ? "#source-map" : ""
};

if (!isDev) {
  config.plugins = config.plugins.concat([
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash:8].css"
      // chunkFilename: "[id].[chunkhash:8].css"
    })
  ]);
}

module.exports = config;
