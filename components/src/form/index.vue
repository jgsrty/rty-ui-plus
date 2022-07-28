<template>
  <form @submit.prevent><slot /></form>
</template>

<script setup>
import { provide, reactive, toRefs } from "vue";
import AsyncValidator from "async-validator";

const props = defineProps({
  model: {
    type: Object,
    required: true,
  },
  rules: {
    type: Object,
  },
});

const initialModel = JSON.parse(JSON.stringify(props.model));

const fields = [];

const addField = (field) => {
  fields.push(field);
};
const validate = (callback) => {
  if (!props.rules) {
    return;
  }
  let validator = new AsyncValidator(props.rules);
  let validSuccess = true;
  validator.validate(props.model, (errors) => {
    fields.forEach((formItem) => {
      let error = errors?.find((error) => error.field === formItem.prop);
      if (error) validSuccess = false;
      formItem.validateMessage = (error && error.message) || "";
    });
  });
  callback?.(validSuccess);
};

const resetValid = () => {
  for (let key in props.model) {
    props.model[key] = initialModel[key];
  }
  fields.forEach((formItem) => (formItem.validateMessage = ""));
};

provide(
  "rty-form",
  reactive({
    ...toRefs(props),
    addField,
    validate,
  })
);

defineExpose({
  validate,
  resetValid,
});
</script>

<style lang="scss" scoped></style>
