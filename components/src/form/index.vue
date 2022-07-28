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

const fields = [];

const addField = (field) => {
  fields.push(field);
};
const validate = (callback) => {
  let validator = new AsyncValidator(props.rules);
  let validSuccess = true;
  validator.validate(props.model, (errors) => {
    fields.forEach((formItem) => {
      let error = errors?.find((error) => error.field === formItem.prop);
      if (error) validSuccess = false;
      formItem.validateMessage = (error && error.message) || "";
    });
  });
  callback(validSuccess);
};

provide(
  "rty-form",
  reactive({
    ...toRefs(props),
    addField,
  })
);

defineExpose({
  validate,
});
</script>

<style lang="scss" scoped></style>
