<template>
  <transition name="fade" @after-leave="destroy">
    <div class="rty-message" :class="types[type].class" v-show="visible">
      <rty-svg :name="types[type].icon" :color="types[type].iconColor" />
      <span class="text">{{ message }}</span>
    </div>
  </transition>
</template>

<script>
const types = {
  success: {
    icon: "user-happy",
    iconColor: "#19be6b",
    class: "rty-message-success",
  },
  plain: {
    icon: "user-plain",
    iconColor: "#909399",
    class: "rty-message-plain",
  },
  warning: {
    icon: "user-sick",
    iconColor: "#ff9900",
    class: "rty-message-warning",
  },
  error: {
    icon: "user-sad",
    iconColor: "#f56c6c",
    class: "rty-message-error",
  },
};
</script>

<script setup>
import { ref, onMounted } from "vue";
import rtySvg from "../svg/index.vue";

const props = defineProps({
  type: {
    type: String,
    default: "success",
    validator(val) {
      const keys = Object.keys(types);
      const res = keys.includes(val);
      if (!res) {
        throw new Error(`你的 type 必须是 ${keys.join("||")} 中的一个`);
      }
      return res;
    },
  },
  message: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    default: 3000,
  },
  destroy: {
    type: Function,
  },
});

const visible = ref(false);

onMounted(() => {
  visible.value = true;
  setTimeout(() => {
    visible.value = false;
  }, props.duration);
});
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
