module.exports = {
  theme: "",
  title: "VuePress + Element",
  description: "VuePress搭建Element的组件库文档教程示例代码",
  base: "/",
  port: "8080",
  themeConfig: {
    nav: [
      // 配置顶部导航栏
      {
        text: "首页",
        link: "/",
      },
      {
        text: "组件",
        link: "/comps/",
      },
    ],
    sidebar: ["/comps/", "/comps/select.md"],
    displayAllHeaders: true,
  },
  head: [],
  plugins: ["demo-container"],
  markdown: {},
};
