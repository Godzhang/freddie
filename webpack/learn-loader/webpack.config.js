const path = require("path");

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  entry: resolve("./src/index.js"),
  output: {
    path: resolve("./dist/"),
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.txt$/i,
        use: ["a-loader", "b-loader", "c-loader"],
      },
    ],
  },
  resolveLoader: {
    modules: [resolve("node_modules"), resolve("loaders")],
  },
};
