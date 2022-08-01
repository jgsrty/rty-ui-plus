<template>
  <div class="rty-input">
    <input :placeholder="placeholder" class="input" :class="[icon ? 'icon-input' : '']" type="text" v-model="inputValue" @input="handleInput" />
    <rty-svg color="#9ea2aa" v-if="icon" class="svg-icon" :name="icon"></rty-svg>
  </div>
</template>

<script setup>
import { useVModel } from "@vueuse/core";
import { inject } from "vue";
import rtySvg from "../svg/index.vue";

const props = defineProps({
  modelValue: {
    type: [String, Number, Date],
    default: "",
  },
  icon: {
    type: String,
    defualt: "",
  },
  placeholder: {
    type: String,
    default: "请输入内容",
  },
});
const emits = defineEmits(["update:modelValue"]);
const formContext = inject("rty-form", undefined);
const inputValue = useVModel(props, "modelValue", emits);

const handleInput = () => {
  if (formContext) formContext.validate();
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
