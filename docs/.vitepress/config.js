// const path = require("path");
// const fs = require("fs");

export default {
  // base: "/rty-ui-plus/",
  base: process.env.NODE_ENV === "production" ? "/rty-ui-plus/" : "",
  title: "rty-ui-plus",
  appearance: true,
  themeConfig: {
    lastUpdatedText: "Updated Date",
    socialLinks: [
      { icon: "github", link: "https://github.com/jgsrty/rty-ui-plus" },
    ],
    nav: nav(),
    sidebar: {
      "/components/": [
        {
          text: "Guide 指南",
          items: [
            {
              text: "快速开始",
              link: "/components/getting-start",
            },
          ],
        },
        {
          text: "Components 组件",
          items: [
            {
              text: "Button 按钮",
              link: "/components/button",
            },
            {
              text: "Icon 图标",
              link: "/components/icon",
            },
            {
              text: "Confirm 按钮",
              link: "/components/confirm",
            },
          ],
        },
      ],
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2099-present Evan You",
    },
  },
};

function nav() {
  return [
    {
      text: "Vue3 组件",
      link: "/components/getting-start",
      activeMatch: "/components/",
    },
    {
      text: "了解更多",
      items: [
        { text: "掘金", link: "https://juejin.cn/user/2154698520407687/posts" },
        { text: "码云gitee", link: "https://gitee.com/RtyXmd" },
        { text: "简书", link: "https://www.jianshu.com/u/0f735486a824" },
        { text: "移动端Music", link: "http://47.100.53.108:7300/#/index" },
        {
          text: "管理后台模板",
          link: "http://47.100.53.108:9527/#/charts/pieChart",
        },
      ],
    },
  ];
}

// function getSidebar(dir) {
//   let group = [];
//   let p = path.join(__dirname, "../", dir);
//   let files = fs.readdirSync(p);
//   files.map((file) => {
//     let title = path.basename(file, ".md");
//     let text = "";
//     let link = "";
//     text = title;
//     link = "/" + dir + "/" + title;
//     group.push({ text, link });
//   });
//   return group;
// }
