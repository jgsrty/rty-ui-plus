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