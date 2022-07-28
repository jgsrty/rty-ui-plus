<template>
  <rty-input v-model="formModel.account"></rty-input>
  <rty-form :model="formModel" ref="rtyFormRef" :rules="rules">
    <rty-form-item label="账号" prop="account">
      <rty-input v-model="formModel.account"></rty-input>
    </rty-form-item>
    <rty-form-item label="密码" prop="password">
      <rty-input v-model="formModel.password"></rty-input>
    </rty-form-item>
    <rty-form-item label="性别">
      <rty-input v-model="formModel.sex"></rty-input>
    </rty-form-item>
    <rty-form-item>
      <rty-button size="small" @click="handleSubmit(rtyFormRef)"
        >submit</rty-button
      >
      <rty-button size="small" @click="resetValid(rtyFormRef)" type="info"
        >reset</rty-button
      >
    </rty-form-item>
  </rty-form>
  <rty-form :model="formModel2">
    <rty-form-item label="账号">
      <rty-input v-model="formModel2.account"></rty-input>
    </rty-form-item>
    <rty-form-item>
      <rty-button size="small" @click="handleNormalSubmit">submit</rty-button>
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
import { rtyButton, rtyForm, rtyInput, rtyFormItem } from "./index";
// import rtyConfirm from './src/confirm/index.vue'
import { reactive, ref } from "vue";

const formModel = reactive({
  account: "",
  password: "",
  sex: "",
});
const formModel2 = reactive({
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
  await form.validate((valid) => {
    console.log(valid);
    console.log(formModel);
  });
};
const resetValid = async (form) => {
  form.resetValid();
};

const test = (e) => {
  console.log(1);
  console.log(e);
};
const handleNormalSubmit = () => {
  console.log(formModel2)
}

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
