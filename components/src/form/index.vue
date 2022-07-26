<template>
  <form @submit.prevent><slot /></form>
</template>

<script setup>
import { provide, reactive, toRefs, watch } from "vue";

const props = defineProps({
  model: {
    type: Object,
    required: true,
  },
  labelPosition: {
    type: String,
    values: ["left", "right", "center"],
    default: "right",
  },
  rules: {
    type: Object,
  },
});
console.log(props.rules);
const fields = [];

const addField = (field) => {
  fields.push(field);
};
const removeField = (field) => {
  if (field.prop) {
    fields.splice(fields.indexOf(field), 1);
  }
};
const validate = async (callback) => {
  validateField(undefined, callback);
};
const validateField = async (modelProps, callback) => {
  const result = await doValidateField(modelProps);
  console.log(result);
};
const doValidateField = async (props) => {
  for (const field of fields) {
    try {
      await field.validate("");
    } catch (err) {
      console.log(err);
    }
  }
};

watch(
  () => props.rules,
  (val) => {
    console.log(val);
  },
  { deep: true }
);

provide(
  "rty-form",
  reactive({
    ...toRefs(props),
    addField,
    removeField,
  })
);

defineExpose({
  validate,
});
</script>

<style lang="scss" scoped></style>
