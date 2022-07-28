# Confirm 弹窗

## 基础用法

<rty-button @click="testConfirm">Test Confirm</rty-button>

```js
<script setup>
import { rtyConfirm, rtyButton } from 'rty-ui-plus'

const testConfirm = () => {
  rtyConfirm('标题','内容风刀霜剑啊浪费的时间')
    .then(() => {
      console.log('点击了确定');
    })
    .catch(() => {
      console.log('点击了取消');
    });
}
</script>
```
<script setup>
import { rtyConfirm, rtyButton, rtyMessage } from 'rty-ui-plus'
import 'rty-ui-plus/es/style.css'
import commentComp from '../../vueComponents/comment.vue'

const testConfirm = () => {
  rtyConfirm('标题','内容风刀霜剑啊浪费的时间')
    .then(() => {
      rtyMessage({
        message:'点击确定按钮'
      })
    })
    .catch(() => {
      rtyMessage({
        type:'plain',
        message:'点击取消按钮'
      })
    });
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

<commentComp />
