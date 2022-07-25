<template>
  <div class="gitalk-container">
    <div id="gitalk-container"></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Gitalk from "gitalk";
import "gitalk/dist/gitalk.css";

onMounted(() => {
  const wlArr = window.location.pathname.split("/");
  const id = wlArr[wlArr.length - 1].split(".")[0].toString();
  const commentConfig = {
    clientID: "e4337b4599b0cb66c046",
    clientSecret: "71797b71fb021647307fa4d87e94909764276618",
    repo: "rty-ui-plus",
    owner: "jgsrty",
    id,
    admin: ["jgsrty"],
  };
  const gitalk = new Gitalk(commentConfig);
  gitalk.render("gitalk-container");
});
</script>

<style lang="scss" scoped></style>
