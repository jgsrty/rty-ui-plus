<template>
  <input
    class="rty-input"
    type="text"
    v-model="inputValue"
    @input="handleInput"
  />
</template>

<script setup>
import { useVModel } from "@vueuse/core";
import { inject } from "vue";

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
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
