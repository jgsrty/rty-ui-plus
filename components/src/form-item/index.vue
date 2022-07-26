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
import { inject, onMounted, reactive, toRefs, ref, computed } from "vue";
import AsyncValidator from "async-validator";
import { get, set } from "lodash-unified";

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

const validateState = ref("");
const validateMessage = ref("");
const formItemRef = ref();

const fieldValue = computed(() => {
  const model = formContext?.model;
  if (!model || !props.prop) {
    return;
  }
  return model[props.prop];
  // return getProp(model, props.prop).value
});

const setValidationState = (state) => {
  validateState.value = state;
};
const onValidationSucceeded = () => {
  setValidationState("success");
  formContext?.emit("validate", props.prop, true, "");
};
const onValidationFailed = (error) => {
  const { errors, fields } = error;
  if (!errors || !fields) {
    console.error(error);
  }

  setValidationState("error");
  validateMessage.value = errors
    ? errors?.[0]?.message ?? `${props.prop} is required`
    : "";

  formContext?.emit("validate", props.prop, false, validateMessage.value);
};
const doValidate = async (rules) => {
  const modelName = props.prop;
  const validator = new AsyncValidator({
    [modelName]: rules,
  });
  return validator
    .validate({ [modelName]: fieldValue.value }, { firstFields: true })
    .then(() => {
      onValidationSucceeded();
      return true;
    })
    .catch((err) => {
      onValidationFailed(err);
      return Promise.reject(err);
    });
};
const validate = async (trigger, callback) => {
  const rules = getFilteredRule(trigger);
  if (rules.length === 0) {
    callback?.(true);
    return true;
  }
  setValidationState("validating");
  return doValidate(rules)
    .then(() => {
      callback?.(true);
      return true;
    })
    .catch((err) => {
      const { fields } = err;
      callback?.(false, fields);
      return hasCallback ? false : Promise.reject(fields);
    });
};
const _rules = computed(() => {
  const rules = props.rules ? porps.rules : [];
  const formRules = formContext?.rules;
  if (formRules && props.prop) {
    const _rules = formRules[props.prop];
    // const _rules = getProp(formRules, props.prop).value;
    if (_rules) {
      rules.push(..._rules);
    }
  }
  return rules;
});
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
  const rules = _rules.value;
  return rules
    .filter((rule) => {
      if (!rule.trigger || !trigger) return true;
      if (Array.isArray(rule.trigger)) {
        return rule.trigger.includes(trigger);
      } else {
        return rule.trigger === trigger;
      }
    })
    .map(({ trigger, ...rule }) => rule);
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
