import { inject, withDirectives, openBlock, createElementBlock, isRef, vModelText, unref } from "vue";
import { useVModel } from "../../../node_modules/.pnpm/@vueuse_core@8.9.4_vue@3.2.37/node_modules/@vueuse/core/index.js";
import "./index.vue_vue_type_style_index_0_scoped_true_lang.js";
import _export_sfc from "../../../_virtual/plugin-vue_export-helper.js";
const _sfc_main = {
  __name: "index",
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const formContext = inject("rty-form", void 0);
    const inputValue = useVModel(props, "modelValue", emits);
    const handleInput = () => {
      if (formContext)
        formContext.validate();
    };
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("input", {
        class: "rty-input",
        type: "text",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(inputValue) ? inputValue.value = $event : null),
        onInput: handleInput
      }, null, 544)), [
        [vModelText, unref(inputValue)]
      ]);
    };
  }
};
var Input = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6fe7ff68"]]);
export { Input as default };
