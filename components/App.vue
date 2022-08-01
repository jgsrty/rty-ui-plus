<template>
  <rty-date-picker v-model="testDate" @changeDate="switchDate"></rty-date-picker>
  <rty-form :model="formModel" ref="rtyFormRef" :rules="rules">
    <rty-form-item label="账号" prop="account">
      <rty-input v-model="formModel.account"></rty-input>
    </rty-form-item>
    <rty-form-item label="密码" prop="password">
      <rty-input v-model="formModel.password"></rty-input>
    </rty-form-item>
    <rty-form-item label="出生日期" prop="birthday">
      <rty-date-picker v-model="formModel.birthday" @changeDate="switchDate"></rty-date-picker>
    </rty-form-item>
    <rty-form-item label="性别">
      <rty-input v-model="formModel.sex"></rty-input>
    </rty-form-item>
    <rty-form-item>
      <div class="group-list">
        <rty-button size="small" @click="handleSubmit(rtyFormRef)">submit</rty-button>
        <rty-button size="small" @click="resetValid(rtyFormRef)" type="info">reset</rty-button>
      </div>
    </rty-form-item>
  </rty-form>
</template>

<script setup>
import { reactive, ref } from "vue";
// import { rtyForm, rtyFormItem, rtyInput, rtyButton, rtyDatePicker } from "rty-ui-plus";
// import "rty-ui-plus/es/style.css";
const testDate = ''
const formModel = reactive({
  account: "",
  password: "",
  birthday: "",
  sex: "",
});
const formModel2 = reactive({
  account: "",
  password: "",
  sex: "",
});
const rules = {
  account: [{ required: true, message: "请输入账户名" }],
  password: [
    { required: true, message: "请输入密码" },
    { min: 3, max: 6, message: "密码长度为3-6" },
  ],
  birthday: [{ required: true, message: "请选择出生日期" }],
};
const rtyFormRef = ref();
const formtest = ref();

const handleSubmit = async (form) => {
  await form.validate((valid) => {
    console.log(valid);
  });
};
const resetValid = async (form) => {
  form.resetValid();
};
const switchDate = (date) => {
  console.log(date);
};
</script>
