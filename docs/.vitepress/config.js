const path = require("path");
const fs = require("fs");

export default {
  // base: "/rty-ui-plus/",
  base: process.env.NODE_ENV === "production" ? "/rty-ui-plus/" : "",
  title: "rty-ui-plus",
  lastUpdated: true,
  appearance: true,
  themeConfig: {
    lastUpdatedText: "Updated Date",
    socialLinks: [{ icon: "github", link: "https://github.com/jgsrty/rty-ui-plus" }],
    nav: nav(),
    sidebar: {
      "/components/": [
        {
          text: "Guide 指南",
          items: [
            {
              text: "快速开始",
              link: "/components/guide/getting-start",
            },
          ],
        },
        {
          text: "Components 组件",
          items: getSidebar("components"),
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
      link: "/components/guide/getting-start",
      activeMatch: "/components/",
    },
    {
      text: "了解更多",
      items: [
        { text: "移动端", link: "http://47.100.53.108:7300/#/index" },
        {
          text: "管理后台模板",
          link: "http://47.100.53.108:9527/#/charts/pieChart",
        },
        { text: "掘金", link: "https://juejin.cn/user/2154698520407687/posts" },
      ],
    },
  ];
}

function getSidebar(dir) {
  let group = [];
  let p = path.join(__dirname, "../", dir);
  let files = fs.readdirSync(p);
  files.map((file) => {
    let isFile = fs.lstatSync(path.join(p, file)).isFile();
    // 只读取文件
    if (isFile) {
      let title = path.basename(file, ".md");
      let text = "";
      let link = "";
      text = title;
      link = "/" + dir + "/" + title;
      group.push({ text, link });
    }
  });
  return group;
}
