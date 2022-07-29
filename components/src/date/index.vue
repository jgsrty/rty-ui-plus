<template>
  <div></div>
</template>

<script setup>
import { generateDateData } from "./utils";
const test = generateDateData([2022, 7]);
console.log(test);
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
