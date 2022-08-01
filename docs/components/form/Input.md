# Input 输入框

## 基础用法

<rty-input v-model="modelValue"></rty-input>

```js
<rty-input v-model="modelValue"></rty-input>

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

## 带图标

<rty-input icon="email" v-model="modelValue"></rty-input>

<script setup>
import {ref} from 'vue'
import {rtyInput} from 'rty-ui-plus'
import 'rty-ui-plus/es/style.css'
import commentComp from '../../vueComponents/comment.vue'

const modelValue = ref('')
</script>

## Input 属性

| 属性    | 说明   | 类型          | 默认值 |
| ------- | ------ | ------------- | ------ |
| v-model | 绑定值 | string/number | --     |
| icon | 图标 | [Icons](/components/Icon.html) | --   |
| placeholder | 占位内容 | string | 请输入内容   |

<commentComp />
