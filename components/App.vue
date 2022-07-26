<template>
  <div @click="testConfirm">test</div>
  <!-- <rty-confirm></rty-confirm> -->
  <!-- <div @click="testMessage">启动测试</div> -->
  <!-- <rty-message type="error" message="Success" @afterLeave="msgAfterleave"></rty-message> -->
  <!-- <rty-svg name="wall" :size="30" color="lightblue"></rty-svg> -->
  <!-- <rty-button icon="wall" type="primary" size="large">发的送</rty-button>
  <rty-button icon="wall" type="info" size="normal">发的送</rty-button>
  <rty-button icon="wall" type="success" size="small">发的送</rty-button>
  <rty-button icon="wall" type="warning" size="mini" @click="test">发的送</rty-button>
  <rty-button icon="wall" type="primary" size="large" disabled>发的送</rty-button>
  <rty-button icon="wall" type="info" size="normal" disabled>发的送</rty-button>
  <rty-button icon="wall" type="success" size="small" disabled>发的送</rty-button>
  <rty-button icon="wall" type="warning" size="mini" disabled @click="test">发的送</rty-button>
  <rty-confirm></rty-confirm> -->
</template>

<script setup>
import { rtyMessage, rtyConfirm } from "./index";
// import rtyConfirm from './src/confirm/index.vue'
const test = (e) => {
  console.log(1);
  console.log(e);
};

const testConfirm = () => {
  rtyConfirm('标题','内容风刀霜剑啊浪费的时间')
    .then((res) => {
      console.log(res)
      rtyMessage({
        message:'点击确定按钮'
      })
    })
    .catch((err) => {
      console.log(err)
      rtyMessage({
        type:'plain',
        message:'点击取消按钮'
      })
    });
};

const testMessage = () => {
  rtyMessage({
    type: "error",
    message: "error test",
    duration: 500000,
  });
};
const msgAfterleave = () => {
  console.log("msg 消失");
};
</script>
