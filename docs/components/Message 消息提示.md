# icon 图标

## 图标集合

<rty-button @click="testMsg">test message</rty-button>

<script setup>
import { ref } from 'vue'
import { rtyMessage, rtyButton } from 'rty-ui-plus'
import 'rty-ui-plus/es/style.css'

const testMsg = () => {
  console.log(1)
  rtyMessage({
    message:'success'
  })
}
</script>
