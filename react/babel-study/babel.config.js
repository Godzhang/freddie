module.exports = {
  // babel-loader + @babel/core + @babel/preset-env + core-js3 + regenerator-runtime
  // presets: [
  //   [
  //     "@babel/preset-env",
  //     {
  //       corejs: { version: 3, proposals: true },
  //       useBuiltIns: "usage",
  //       modules: false, // 对es6的模块文件不做转化，以便使用tree shaking, sideEffects等
  //     },
  //   ],
  // ],
  // babel-loader + @babel/core + @babel/preset-env + @babel/plugin-transform-runtime + @babel/runtime-corejs3
  presets: [["@babel/preset-env", { modules: false }]],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: {
          version: 3,
          proposals: true,
        },
        useESModules: true,
      },
    ],
  ],
  // 自定义preset
  // presets: ["./my-preset.js"],
};
