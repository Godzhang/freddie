const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: path.resolve(__dirname, "../src/main.ts"),
  output: {
    libraryTarget: "umd",
    library: "EmployeeQuery"
  },
  externals: [nodeExternals()],
  plugins: [new CleanWebpackPlugin()]
};
