# DatePicker 日期选择

## 基础用法

<rty-date-picker v-model="testDate" @changeDate="switchDate"></rty-date-picker>

```js
<rty-date-picker v-model="testDate" @changeDate="switchDate"></rty-date-picker>

<script setup>
import { ref } from 'vue'

const testDate = ref('')

const switchDate = (val) => {
  rtyMessage({
    message: val
  })
}
</script>
```

<script setup>
import { ref } from 'vue'
import { rtyDatePicker, rtyInput, rtyMessage } from 'rty-ui-plus'
import 'rty-ui-plus/es/style.css'
import commentComp from '../../vueComponents/comment.vue'

const testDate = ref('')

const switchDate = (val) => {
  rtyMessage({
    message: val
  })
}
</script>

<style lang="scss" scoped>
</style>

## DatePicker 配置项

| 属性        | 说明         | 类型        | 默认值     |
| ----------- | ------------ | ----------- | ---------- |
| model       | 选中项绑定值 | Date/String | today      |
| placeholder | 占位内容     | String      | 请选择日期 |

## DatePicker 方法

| 属性       | 说明                   | 回调参数 |
| ---------- | ---------------------- | -------- |
| changeDate | 用户确认选定的值时触发 | date     |

<commentComp />
