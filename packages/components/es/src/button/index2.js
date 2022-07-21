import { openBlock, createElementBlock, pushScopeId, popScopeId, createElementVNode } from "vue";
import "./index.vue_vue_type_style_index_0_scoped_true_lang.js";
import _export_sfc from "../../_virtual/plugin-vue_export-helper.js";
const _sfc_main = {};
const _withScopeId = (n) => (pushScopeId("data-v-06574e2e"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "main" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("button", { class: "test" }, "test-btn", -1));
const _hoisted_3 = [
  _hoisted_2
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1, _hoisted_3);
}
var Button = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-06574e2e"]]);
export { Button as default };
