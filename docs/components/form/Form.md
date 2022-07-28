# Form 表单

## 基础用法

<rty-form :model="formModel2" ref="formtest">
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
    <rty-button size="small" @click="handleNormalSubmit">submit</rty-button>
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
    <rty-button size="small" @click="handleSubmit">submit</rty-button>
  </rty-form-item>
</rty-form>

<script setup>
const formModel = reactive({
  account: "",
  password: "",
  sex: "",
});

const handleSubmit = () => {
    console.log(formModel);
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
    <div class="group-list">
      <rty-button size="small" @click="handleSubmit(rtyFormRef)">submit</rty-button>
      <rty-button size="small" @click="resetValid(rtyFormRef)" type="info">reset</rty-button>
    </div>
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
import {reactive,ref} from 'vue'
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
const formtest = ref();

const handleSubmit = async (form) => {
  await form.validate((valid) => {
    console.log(valid);
  });
};
const resetValid = async (form) => {
  form.resetValid();
};
const handleNormalSubmit = () => {
    console.log(formModel2);
};
</script>

<style lang="scss" scoped>
.group-list {
  display:flex;
  align-items:center;
  .rty-button:first-child {
    margin-right:10px
  }
}
</style>

## Form 配置项

| 属性  | 说明         | 类型   | 默认值 |
| ----- | ------------ | ------ | ------ |
| model | 表单数据对象 | object | --     |
| rules | 表单验证规则 | object | --     |

## Form 方法

| 属性       | 说明                                             | 类型            |
| ---------- | ------------------------------------------------ | --------------- |
| validate   | 对整个表单的内容进行验证。 接收一个回调函数      | callback(valid) |
| resetValid | 重置该表单项，将其值重置为初始值，并移除校验结果 | --              |

## Form Item 配置项

| 属性  | 说明                                                                  | 类型   | 默认值 |
| ----- | --------------------------------------------------------------------- | ------ | ------ |
| prop  | model 的键名。在定义了 validate、resetFields 的方法时，该属性是必填的 | string | --     |
| label | 标签文本                                                              | --     |        |

<commentComp />
