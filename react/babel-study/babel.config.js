module.exports = {
  presets: [
    [
      "@babel/env",
      {
        targets: {
          edge: "17",
          firefox: "60",
          chrome: "67",
          safari: "11.1",
        },
        corejs: "3",
        // useBuiltIns: "entry", // 会将文件中 import "@babel/polyfilll" 语句 结合 targets ，转换为一系列引入语句，去掉目标浏览器已支持的polyfilll 模块，不管代码里有没有用到，只要目标浏览器不支持都会引入对应的polyfilll 模块
        useBuiltIns: "usage", // 不需要手动在代码里写 @import "@babel/polyfill"，但需要手动安装
        // 需要注意的是在webpack打包文件配置的entry 中引入的 @babel/polyfill 不会根据useBuiltIns 配置任何转换处理。
      },
    ],
  ],
};
