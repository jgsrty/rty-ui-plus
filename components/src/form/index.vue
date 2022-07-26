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
  try {
    const result = await doValidateField(modelProps);
    console.log(result)
    if (result) {
      callback?.(result);
    }
    return result;
  } catch (e) {
    const invalidFields = e

    // if (props.scrollToError) {
    //   scrollToField(Object.keys(invalidFields)[0])
    // }
    callback?.(false, invalidFields)
    return typeof(callback) !== 'function' && Promise.reject(invalidFields)
  }
};
const doValidateField = async (props) => {
  let validationErrors = {};
  for (const field of fields) {
    try {
      await field.validate("");
    } catch (err) {
      validationErrors = {
        ...validationErrors,
        ...fields,
      };
    }
  }
  if (Object.keys(validationErrors).length === 0) return true;
  return Promise.reject(validationErrors);
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
