const { override, fixBabelImports, addWebpackAlias, addLessLoader } = require("customize-cra");
const path = require("path");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addWebpackAlias({
    "@": path.resolve(__dirname, "./src"),
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#4C37A8' }
  })
);
