# 快速开始

## 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```js
// main.js
import { createApp } from "vue";
import App from "./App.vue";
import rtyUiPlus from "rty-ui-plus";
import "rty-ui-plus/es/style.css";

const app = createApp(App);

app.use(rtyUiPlus).mount("#app");
```

## 按需引入

```js
// App.vue
<template>
  <rty-button>按钮</rty-button>
</template>

<script setup>
import { rtyButton } from 'rty-ui-plus';
</script>
```

<div class="gitalk-container">
  <div id="gitalk-container"></div>
</div>

<script setup>
import { onMounted } from 'vue'
import Gitalk from 'gitalk'
import 'gitalk/dist/gitalk.css'

onMounted(() => {
const wlArr = window.location.pathname.split('/')
const id = wlArr[wlArr.length - 1].split('.')[0].toString()
const commentConfig = {
  clientID: 'e4337b4599b0cb66c046',
  clientSecret: '71797b71fb021647307fa4d87e94909764276618',
  repo: 'rty-ui-plus',
  owner: 'jgsrty',
  id,
  admin: ['jgsrty']
};
const gitalk = new Gitalk(commentConfig);
gitalk.render('gitalk-container');
  // const body = document.querySelector('.gitalk-container');
  // const script = document.createElement('script');
  // script.src = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js';
  // body.appendChild(script);
  // script.onload = () => {
  //   const commentConfig = {
  //     clientID: 'e4337b4599b0cb66c046',
  //     clientSecret: '71797b71fb021647307fa4d87e94909764276618',
  //     repo: 'rty-ui-plus',
  //     owner: 'jgsrty',
  //     // 这里接受一个数组，可以添加多个管理员
  //     admin: ['jgsrty'],
  //     // id 用于当前页面的唯一标识，一般来讲 pathname 足够了，
      
  //     // 但是如果你的 pathname 超过 50 个字符，GitHub 将不会成功创建 issue，此情况可以考虑给每个页面生成 hash 值的方法.
  //     id: location.pathname,
  //     distractionFreeMode: false,
  //   };
  //   const gitalk = new Gitalk(commentConfig);
  //   gitalk.render('gitalk-container');
  // };
})
</script>
