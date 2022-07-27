<template>
  <form @submit.prevent><slot /></form>
</template>

<script>
const formEmits = {
  validate: (prop, isValid, message) => {
    console.log(prop)
    console.log(isValid)
    console.log(message)
    return true;
  },
};
</script>

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
const emits = defineEmits(formEmits);

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
    if (result) {
      callback?.(result);
    }
    return result;
  } catch (e) {
    const invalidFields = e;

    // if (props.scrollToError) {
    //   scrollToField(Object.keys(invalidFields)[0])
    // }
    callback?.(false, invalidFields);
    return typeof callback !== "function" && Promise.reject(invalidFields);
  }
};
const doValidateField = async (props) => {
  let validationErrors = {};
  console.log(props);
  // if (!props) return true;
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
    emits,
    addField,
    removeField,
  })
);

defineExpose({
  validate,
});
</script>

<style lang="scss" scoped></style>
