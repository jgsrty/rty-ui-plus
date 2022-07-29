import { provide, reactive, toRefs, openBlock, createElementBlock, withModifiers, renderSlot } from "vue";
import Schema from "../../../node_modules/.pnpm/async-validator@4.2.5/node_modules/async-validator/dist-web/index.js";
const _sfc_main = {
  __name: "index",
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  },
  setup(__props, { expose }) {
    const props = __props;
    const initialModel = JSON.parse(JSON.stringify(props.model));
    const fields = [];
    const addField = (field) => {
      fields.push(field);
    };
    const validate = (callback) => {
      if (!props.rules) {
        return;
      }
      let validator = new Schema(props.rules);
      let validSuccess = true;
      validator.validate(props.model, (errors) => {
        fields.forEach((formItem) => {
          let error = errors == null ? void 0 : errors.find((error2) => error2.field === formItem.prop);
          if (error)
            validSuccess = false;
          formItem.validateMessage = error && error.message || "";
        });
      });
      callback == null ? void 0 : callback(validSuccess);
    };
    const resetValid = () => {
      for (let key in props.model) {
        props.model[key] = initialModel[key];
      }
      fields.forEach((formItem) => formItem.validateMessage = "");
    };
    provide("rty-form", reactive({
      ...toRefs(props),
      addField,
      validate
    }));
    expose({
      validate,
      resetValid
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("form", {
        onSubmit: _cache[0] || (_cache[0] = withModifiers(() => {
        }, ["prevent"]))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 32);
    };
  }
};
export { _sfc_main as default };
