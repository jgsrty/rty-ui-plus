# Button 按钮

<script setup>
import { rtyButton, rtySvg } from 'rty-ui-plus'
import 'rty-ui-plus/es/style.css'
</script>

## 基础用法

<div class="group-list">
  <rty-button type="primary">Primary</rty-button> <rty-button type="info">Info</rty-button> 
  <rty-button type="success">Success</rty-button> <rty-button type="warning">Warning</rty-button>
</div>

```js
<rty-button type="primary">Primary</rty-button>
<rty-button type="info">Info</rty-button>
<rty-button type="success">Success</rty-button>
<rty-button type="warning">Warning</rty-button>
```

## 禁用状态

<div class="group-list">
  <rty-button disabled type="primary">Primary</rty-button> <rty-button disabled type="info">Info</rty-button> <rty-button disabled type="success">Success</rty-button> <rty-button disabled type="warning">Warning</rty-button>
</div>

```js
<rty-button disabled type="primary">Primary</rty-button>
<rty-button disabled type="info">Info</rty-button>
<rty-button disabled type="success">Success</rty-button>
<rty-button disabled type="warning">Warning</rty-button>
```

## 调整尺寸

<div class="group-list">
  <rty-button size="large" type="primary">Primary</rty-button> 
  <rty-button size="normal" type="info">Info</rty-button> 
  <rty-button size="small" type="success">Success</rty-button> 
  <rty-button size="mini" type="warning">Warning</rty-button>
</div>

```js
<rty-button size="large" type="primary">Primary</rty-button>
<rty-button size="normal" type="info">Info</rty-button>
<rty-button size="small" type="success">Success</rty-button>
<rty-button size="mini" type="warning">Warning</rty-button>
```

## 图标按钮

<div class="group-list">
  <rty-button icon="user-happy" type="primary">Primary</rty-button>
  <rty-button icon="user-smile" type="info">Info</rty-button>
  <rty-button icon="user-sad" type="success">Success</rty-button>
  <rty-button icon="user-sick" type="warning">Warning</rty-button>
</div>

```js
<rty-button icon="user-happy" type="primary">Primary</rty-button>
<rty-button icon="user-smile" type="info">Info</rty-button>
<rty-button icon="user-sad" type="success">Success</rty-button>
<rty-button icon="user-sick" type="warning">Warning</rty-button>
```

## Button 属性

| 属性     | 说明     | 类型    | 可选值                              | 默认值  |
| -------- | -------- | ------- | ----------------------------------- | ------- |
| type     | 类型     | string  | primary / info / success / warning  | primary |
| size     | 尺寸     | string  | large / normal / small / mini       | normal  |
| disabled | 是否禁用 | boolean | --                                  | false   |
| icon     | 图标     | string  | [foo](/components/Icon%20图标.html) | --      |

<style lang="scss" scoped>
.group-list {
  display:flex;
  justify-content:space-evenly;
  align-items:center
}
</style>

<!-- | 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ------ | ------ |
|      |      |      |        |        |
|      |      |      |        |        |
|      |      |      |        |        | -->
