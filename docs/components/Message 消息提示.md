# Message 消息提示

## 基础用法

<rty-button @click="testMsg">Test Message</rty-button>

```js
<script setup>
  import {(rtyMessage, rtyButton)} from 'rty-ui-plus' const testMsg = () =>{" "}
  {rtyMessage({
    message: "success",
  })}
</script>
```

## 不同状态

<div class="group-list">
  <rty-button type="success" @click="Success">Success</rty-button>
  <rty-button type="info" @click="Plain">Plain</rty-button>
  <rty-button type="warning" @click="Warning">Warning</rty-button>
  <rty-button type="primary" @click="Error">Error</rty-button>
</div>

```js
  <rty-button type="success" @click="Success">Success</rty-button>
  <rty-button type="info" @click="Plain">Plain</rty-button>
  <rty-button type="warning" @click="Warning">Warning</rty-button>
  <rty-button type="primary" @click="Error">Error</rty-button>

<script setup>
import { rtyMessage } from 'rty-ui-plus'

const Success = () => {
  rtyMessage({
    type:'success',
    message:'Success Message'
  })
}
const Plain = () => {
  rtyMessage({
    type:'plain',
    message:'Plain Message'
  })
}
const Warning = () => {
  rtyMessage({
    type:'warning',
    message:'Warning Message'
  })
}
const Error = () => {
  rtyMessage({
    type:'error',
    message:'Error Message'
  })
}
</script>
```

<script setup>
import { rtyMessage, rtyButton } from 'rty-ui-plus'
import 'rty-ui-plus/es/style.css'

const testMsg = () => {
  rtyMessage({
    message:'Text Message'
  })
}
const Success = () => {
  rtyMessage({
    type:'success',
    message:'Success Message'
  })
}
const Plain = () => {
  rtyMessage({
    type:'plain',
    message:'Plain Message'
  })
}
const Warning = () => {
  rtyMessage({
    type:'warning',
    message:'Warning Message'
  })
}
const Error = () => {
  rtyMessage({
    type:'error',
    message:'Error Message'
  })
}
</script>

<style lang="scss" scoped>
.group-list {
  display:flex;
  justify-content:space-evenly;
  align-items:center
}
</style>

## Message 配置项

| 属性     | 说明         | 类型   | 默认值  |
| -------- | ------------ | ------ | ------- |
| type     | 消息类型     | string | success |
| message  | 消息提示文字 | string | --      |
| duration | 消息显示时间 | number | 3000    |
