# Button 按钮

<script setup>
import { rtyButton } from 'rty-ui-plus'
import 'rty-ui-plus/es/style.css'
</script>

## 基础用法

<rty-button type="primary">Primary</rty-button> <rty-button type="info">Info</rty-button> <rty-button type="success">Success</rty-button> <rty-button type="warning">Warning</rty-button>

```js
<rty-button type="primary">Primary</rty-button>
<rty-button type="info">Info</rty-button>
<rty-button type="success">Success</rty-button>
<rty-button type="warning">Warning</rty-button>
```

## 禁用状态

<rty-button disabled type="primary">Primary</rty-button> <rty-button disabled type="info">Info</rty-button> <rty-button disabled type="success">Success</rty-button> <rty-button disabled type="warning">Warning</rty-button>

```js
<rty-button disabled type="primary">Primary</rty-button>
<rty-button disabled type="info">Info</rty-button>
<rty-button disabled type="success">Success</rty-button>
<rty-button disabled type="warning">Warning</rty-button>
```

## 调整尺寸

<rty-button size="large" type="primary">Primary</rty-button> <rty-button size="normal" type="info">Info</rty-button> <rty-button size="small" type="success">Success</rty-button> <rty-button size="mini" type="warning">Warning</rty-button>

```js
<rty-button size="large" type="primary">Primary</rty-button>
<rty-button size="normal" type="info">Info</rty-button>
<rty-button size="small" type="success">Success</rty-button>
<rty-button size="mini" type="warning">Warning</rty-button>
```

## Button 属性

| 属性     | 说明     | 类型    | 可选值                             | 默认值  |
| -------- | -------- | ------- | ---------------------------------- | ------- |
| type     | 类型     | string  | primary / info / success / warning | primary |
| size     | 尺寸     | string  | large / normal / small / mini      | normal  |
| disabled | 是否禁用 | boolean | --                                 | false   |

<!-- | 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ------ | ------ |
|      |      |      |        |        |
|      |      |      |        |        |
|      |      |      |        |        | -->
