import { defineConfig } from "vitepress";

export default defineConfig({
  base: '/mylifeblog/',
  title: "叶子的生活随笔点滴", // 网站的标题
  description: "记录自己生活中的学习和点滴", // 网站的描述
  themeConfig: {
    // 对主题的配置
    nav: [
      // 导航栏的配置
      { text: "首页", link: "/" },
      { text: "关于", link: "/about" },
    ],
    sidebar: [
      // 侧边栏的配置
      {
        text: "配置随记",
        items: [
          { text: "nvm的安装", link: "/essays/nvm" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],
    socialLinks: [
      // 友链的配置，也可以叫做社交链接
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
