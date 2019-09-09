const path = require("path");
const fs = require("fs");
const glob = require("glob");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PAGE_PATH = path.resolve(__dirname, "../src/pages");

exports.getEntries = () => {
  let entryFiles = glob.sync(PAGE_PATH + "/*/*.js"); // 同步读取所有入口文件
  let map = {};

  entryFiles.forEach(filePath => {
    let filename = filePath.substring(
      filePath.lastIndexOf("/") + 1,
      filePath.lastIndexOf(".")
    );
    map[filename] = filePath;
  });

  return map;
};

exports.htmlPlugin = configs => {
  let entryHtml = glob.sync(PAGE_PATH + "/*/*.html");
  let arr = [];

  entryHtml.forEach(filePath => {
    let filename = filePath.substring(
      filePath.lastIndexOf("/") + 1,
      filePath.lastIndexOf(".")
    );
    let conf = {
      template: filePath,
      filename: filename + ".html",
      chunks: ["chunk-vendors", "chunk-common", filename],
      inject: true
    };

    if (configs) {
      conf = merge(conf, configs);
    }

    if (process.env.NODE_ENV === "production") {
      conf = merge(conf, {
        minify: {
          removeComments: true,
          collapseWhitespace: true
        },
        chunksSortMode: "manual"
      });
    }
    arr.push(new HtmlWebpackPlugin(conf));
  });

  return arr;
};

exports.setPages = configs => {
  let entryFiles = glob.sync(PAGE_PATH + "/*/*.js"); // 同步读取所有入口文件
  let map = {};

  entryFiles.forEach(filePath => {
    let filename = filePath.substring(
      filePath.lastIndexOf("/") + 1,
      filePath.lastIndexOf(".")
    );
    let tmp = filePath.substring(0, filePath.lastIndexOf("/"));

    let conf = {
      entry: filePath,
      template: tmp + ".html",
      filename: filename + ".html",
      chunks: ["chunk-vendors", "chunk-common", filename],
      inject: true
    };

    if (configs) {
      conf = merge(conf, configs);
    }

    if (process.env.NODE_ENV === "production") {
      conf = merge(conf, {
        minify: {
          removeComments: true,
          collapseWhitespace: true
        },
        chunksSortMode: "manual"
      });
    }

    map[filename] = conf;
  });

  return map;
};
