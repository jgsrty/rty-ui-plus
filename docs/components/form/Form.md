<!-- # Form 表单

## 基础用法

<rty-form :model="formModel2">
  <rty-form-item label="账号">
    <rty-input v-model="formModel2.account"></rty-input>
  </rty-form-item>
  <rty-form-item label="密码">
    <rty-input v-model="formModel2.password"></rty-input>
  </rty-form-item>
  <rty-form-item label="性别">
    <rty-input v-model="formModel2.sex"></rty-input>
  </rty-form-item>
  <rty-form-item>
    <rty-button size="small" @click="handleSubmit">submit</rty-button>
  </rty-form-item>
</rty-form>

```js
<rty-form :model="formModel">
  <rty-form-item label="账号">
    <rty-input v-model="formModel.account"></rty-input>
  </rty-form-item>
  <rty-form-item label="密码">
    <rty-input v-model="formModel.password"></rty-input>
  </rty-form-item>
  <rty-form-item label="性别">
    <rty-input v-model="formModel.sex"></rty-input>
  </rty-form-item>
  <rty-form-item>
    <rty-button size="small" @click="handleNormalSubmit">submit</rty-button>
  </rty-form-item>
</rty-form>

<script setup>
const formModel = reactive({
  account: "",
  password: "",
  sex: "",
});

const handleNormalSubmit = () => {
    console.log(formModel.value);
};
</script>
```

## 表单校验

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
    <rty-button size="small" @click="handleSubmit(rtyFormRef)">submit</rty-button>
    <rty-button size="small" @click="resetValid(rtyFormRef)" type="info">reset</rty-button>
  </rty-form-item>
</rty-form>

```js
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
    <rty-button size="small" @click="handleSubmit(rtyFormRef)">submit</rty-button>
    <rty-button size="small" @click="resetValid(rtyFormRef)" type="info">reset</rty-button>
  </rty-form-item>
</rty-form>

<script setup>
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
  await form.validate((valid) => {
    console.log(valid);
  });
};
const resetValid = async (form) => {
  form.resetValid();
};
</script>
```

<script setup>
import { rtyForm, rtyFormItem, rtyInput, rtyButton } from 'rty-ui-plus'
import 'rty-ui-plus/es/style.css'
import commentComp from '../../vueComponents/comment.vue'

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
  });
};
const resetValid = async (form) => {
  form.resetValid();
};
const handleNormalSubmit = () => {
    console.log(formModel2.value);
};
</script>

<style lang="scss" scoped>
.group-list {
  display:flex;
  justify-content:space-evenly;
  align-items:center
}
</style>

## Form 配置项

| 属性 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
|      |      |      |        |

<commentComp /> -->
