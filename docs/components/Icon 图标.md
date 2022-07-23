# Icon 图标

## 图标集合

<div class="icon-list">
  <div class="item" @click="copy(item)" v-for="item in svgArr" :key="item">
    <rty-svg :name="item"/>
    <span>{{item}}</span>
  </div>
</div>

## 基础用法

<div class="icon-list-evenly">
  <rty-svg name="user-happy"/>
  <rty-svg name="user-smile"/>
  <rty-svg name="user-plain"/>
  <rty-svg name="user-sad"/>
  <rty-svg name="user-sick"/>
</div>

```js
<rty-svg name="user-happy"/>
<rty-svg name="user-smile"/>
<rty-svg name="user-plain"/>
<rty-svg name="user-sad"/>
<rty-svg name="user-sick"/>
```

## 大小

<div class="icon-list-evenly">
  <rty-svg :size="12" name="user-happy"/>
  <rty-svg name="user-smile"/>
  <rty-svg :size="25" name="user-plain"/>
  <rty-svg :size="30" name="user-sad"/>
  <rty-svg :size="40" name="user-sick"/>
</div>

```js
<rty-svg :size="12" name="user-happy"/>
<rty-svg name="user-smile"/>
<rty-svg :size="25" name="user-plain"/>
<rty-svg :size="30" name="user-sad"/>
<rty-svg :size="35"name="user-sick"/>
```

## 颜色

<div class="icon-list-evenly">
  <rty-svg :size="12" name="user-happy"/>
  <rty-svg color="#1989fa" name="user-smile"/>
  <rty-svg :size="25" color="#19be6b" name="user-plain"/>
  <rty-svg :size="30" color="#ff9900" name="user-sad"/>
  <rty-svg :size="35" color="#f56c6c" name="user-sick"/>
</div>

```js
<rty-svg :size="12" name="user-happy"/>
<rty-svg color="#1989fa" name="user-smile"/>
<rty-svg :size="25" color="#19be6b" name="user-plain"/>
<rty-svg :size="30" color="#ff9900" name="user-sad"/>
<rty-svg :size="35" color="#f56c6c" name="user-sick"/>
```

## Button 属性

| 属性  | 说明     | 类型                         | 可选值 | 默认值  |
| ----- | -------- | ---------------------------- | ------ | ------- |
| size  | 图标颜色 | Number                       | --     | 15      |
| color | 图标大小 | Pick<CSSProperties, 'color'> | --     | inherit |

<script setup>
import { ref, watch } from 'vue'
import { useClipboard } from '@vueuse/core'
import { rtySvg,rtyMessage } from 'rty-ui-plus'
import 'rty-ui-plus/es/style.css'

const modules = import.meta.globEager('../node_modules/rty-ui-plus/src/assets/svg/*.svg')
let svgArr = ref([])
for(const path in modules) {
  let itemArr = path.split('/')
  svgArr.value.push(itemArr[itemArr.length - 1].split('.')[0])
}

console.log(window.matchMedia('prefers-color-scheme: dark').matches)
const { text, copy, copied, isSupported } = useClipboard()
watch(text,(textV) => {
  if(copied){
    rtyMessage({
      message:`icon：${textV} 已复制`
    })
  }
})

</script>

<style lang="scss" scoped>
.icon-list {
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
  .item {
    padding:20px 0;
    margin-bottom:20px;
    cursor:pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 140px;
    text-overflow:ellipsis;
    white-space:nowrap;
    overflow:hidden;
    &:hover {
      background:#f2f6fc
    }
    span {
      padding-top:10px
    }
    /* #2B2B2C */
  }
}
.dark {
  .icon-list {
    svg{
      fill:white
    }
    .item {
      color: white;
      &:hover{
        background:#2B2B2C
      }
    }
  }
}
.icon-list-evenly {
  display:flex;
  justify-content:space-evenly;
  align-items:center
}
</style>
