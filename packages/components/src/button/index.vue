<template>
  <button ref="btnRef" @click="handleClick" :class="[component, typeClass, sizeClass, { 'is-disabled': disabled }]" :disabled="disabled">
    <slot />
  </button>
</template>

<script>
const types = ["primary", "info", "success", "warning"];
const sizes = ["large", "normal", "small", "mini"];
</script>

<script setup>
import { ref, nextTick } from "vue";

const component = "rty-button";
const typeClass = component + "-" + props.type;
const sizeClass = component + "-" + props.size;

const btnRef = ref();

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "primary",
    validator(val) {
      const res = types.indexOf(val) > -1;
      if (!res) {
        throw new Error(`type必须是${types.join("||")}中的一个`);
      }
      return res;
    },
  },
  size: {
    type: String,
    default: "normal",
    validator(val) {
      const res = sizes.indexOf(val) > -1;
      if (!res) {
        throw new Error(`size必须是${sizes.join("||")}中的一个`);
      }
      return res;
    },
  },
});

const emit = defineEmits(["click"]);

const handleClick = (e) => emit("click", e);

nextTick(() => {
  if (!props.disabled && props.type === "info") {
    btnRef.value.classList.add("info-no-hover");
    console.log(btnRef.value.classList);
  }
});
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
