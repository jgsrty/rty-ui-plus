<template>
  <div ref="formItemRef">
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
import AsyncValidator from "async-validator";

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
const formItemRef = ref();

const validate = async (trigger, callback) => {
  const rules = getFilteredRule(trigger);
  console.log(rules);
};
const getProp = (obj, path, defaultValue) => {
  return {
    get value() {
      return get(obj, path, defaultValue);
    },
    set value(val) {
      set(obj, path, val);
    },
  };
};
const getFilteredRule = (trigger) => {
  const rules = props.rules ? porps.rules : [];
  const formRules = formContext?.rules;
  console.log(formRules)
  console.log(props.prop)
  if (formRules && props.prop) {
    const _rules = getProp(formRules, props.prop).value;
    console.log(_rules);
  }
};
const context = reactive({
  ...toRefs(props),
  $el: formItemRef,
  validate,
});

onMounted(() => {
  if (props.prop) {
    formContext?.addField(context);
    // initialValue = clone(fieldValue.value);
  }
});
</script>

<style lang="scss" scoped></style>
