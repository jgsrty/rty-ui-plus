# icon 图标

## 图标集合

<div class="icon-list">
  <div v-for="item in svgArr" :key="item">
    <rty-svg :name="item"/>
    <span>{{item}}</span>
  </div>
</div>

<script setup>
import { ref } from 'vue'
import { rtySvg } from 'rty-ui-plus'
import 'rty-ui-plus/es/style.css'

const modules = import.meta.globEager('../node_modules/rty-ui-plus/src/assets/svg/*.svg')
let svgArr = ref([])
for(const path in modules) {
  let itemArr = path.split('/')
  svgArr.value.push(itemArr[itemArr.length - 1].split('.')[0])
}
</script>

<style lang="scss" scoped>
.icon-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
