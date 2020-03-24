const path = require("path");

module.exports = {
  // mode: "production",
  mode: "development",
  entry: "./src/index.js",
  externals: "lodash",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "library.js",
    library: "library",
    libraryTarget: "umd"
  }
};
