<template>
  <rty-form :model="formModel" ref="rtyFormRef" :rules="rules">
    <rty-form-item label="账号" prop="account">
      <input type="text" v-model="formModel.account" />
    </rty-form-item>
    <rty-form-item label="密码" prop="password">
      <input type="password" v-model="formModel.password" />
    </rty-form-item>
    <rty-form-item label="性别">
      <input type="select" v-model="formModel.sex" />
    </rty-form-item>
    <rty-form-item>
      <rty-button size="small" @click="handleSubmit(rtyFormRef)">submit</rty-button>
    </rty-form-item>
  </rty-form>
  <!-- <div @click="testConfirm">test</div> -->
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
// import { rtyMessage, rtyConfirm, rtyForm, rtyFormItem } from "./index";
// import rtyConfirm from './src/confirm/index.vue'
import { reactive, ref } from "vue";

const formModel = reactive({
  account: "",
  password: "",
  sex: "",
});
const rules = {
  account: [{ required: true, message: "请输入账户名", trigger: "blur" }],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 3, max: 6, message: "密码长度为3-6", trigger: "blur" },
  ],
};
const rtyFormRef = ref();

const handleSubmit = async (form) => {
  await form.validate((valid, fields) => {
    console.log(valid, fields);
  });
};

const test = (e) => {
  console.log(1);
  console.log(e);
};

const testConfirm = () => {
  rtyConfirm("标题", "内容风刀霜剑啊浪费的时间")
    .then((res) => {
      console.log(res);
      rtyMessage({
        message: "点击确定按钮",
      });
    })
    .catch((err) => {
      console.log(err);
      rtyMessage({
        type: "plain",
        message: "点击取消按钮",
      });
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
