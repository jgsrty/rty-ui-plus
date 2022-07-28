import { inject, ref, reactive, toRefs, onMounted, openBlock, createElementBlock, createElementVNode, createCommentVNode, renderSlot, createTextVNode, toDisplayString } from "vue";
import "./index.vue_vue_type_style_index_0_scoped_true_lang.js";
import _export_sfc from "../../../_virtual/plugin-vue_export-helper.js";
const _hoisted_1 = { class: "rty-form-item" };
const _hoisted_2 = { class: "label" };
const _hoisted_3 = {
  key: 0,
  class: "required"
};
const _hoisted_4 = { class: "content" };
const _hoisted_5 = { class: "err-msg" };
const _sfc_main = {
  __name: "index",
  props: {
    label: String,
    prop: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const formContext = inject("rty-form");
    const validateMessage = ref("");
    const context = reactive({
      ...toRefs(props),
      validateMessage
    });
    onMounted(() => {
      if (props.prop) {
        formContext == null ? void 0 : formContext.addField(context);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          __props.prop ? (openBlock(), createElementBlock("span", _hoisted_3, "* ")) : createCommentVNode("", true),
          renderSlot(_ctx.$slots, "label", {}, () => [
            createTextVNode(toDisplayString(__props.label), 1)
          ], true)
        ]),
        createElementVNode("div", _hoisted_4, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true),
          renderSlot(_ctx.$slots, "error", {}, () => [
            createElementVNode("div", _hoisted_5, toDisplayString(validateMessage.value), 1)
          ], true)
        ])
      ]);
    };
  }
};
var FormItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-aff51970"]]);
export { FormItem as default };
