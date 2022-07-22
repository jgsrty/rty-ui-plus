<template>
  <div @click="testMessage">启动测试</div>
  <!-- <rty-message type="error" message="Success" @afterLeave="msgAfterleave"></rty-message> -->
  <!-- <rty-svg name="wall" :size="30" color="lightblue"></rty-svg> -->
  <!-- <rty-button type="primary" size="large">发的送</rty-button>
  <rty-button type="info" size="normal">发的送</rty-button>
  <rty-button type="success" size="small">发的送</rty-button>
  <rty-button type="warning" size="mini" @click="test">发的送</rty-button>
  <rty-button type="primary" size="large" disabled>发的送</rty-button>
  <rty-button type="info" size="normal" disabled>发的送</rty-button>
  <rty-button type="success" size="small" disabled>发的送</rty-button>
  <rty-button type="warning" size="mini" disabled @click="test">发的送</rty-button>
  <rty-confirm></rty-confirm> -->
</template>

<script setup>
import { rtyMessage } from "./index";
const test = (e) => {
  console.log(1);
  console.log(e);
};

const testMessage = () => {
  rtyMessage({
    type: "error",
    message: "error test",
  });
};
const msgAfterleave = () => {
  console.log("msg 消失");
};
</script>
