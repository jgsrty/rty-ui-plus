<template>
  <div>
    <div class="label">
      <slot name="label">{{ label }}</slot>
    </div>
    <div class="content">
      <slot />
      <slot name="error">
        <div>{{ validateMessage }}</div>
      </slot>
    </div>
  </div>
</template>

<script setup>
import { inject, onMounted, reactive, toRefs, ref } from "vue";

const props = defineProps({
  label: String,
  prop: {
    type: String,
  },
  required: {
    type: Boolean,
    default: false,
  },
});

const formContext = inject("rty-form");
const validateMessage = ref("");

const context = reactive({
  ...toRefs(props),
  validateMessage,
});

onMounted(() => {
  if (props.prop) {
    formContext?.addField(context);
  }
});
</script>

<style lang="scss" scoped></style>
