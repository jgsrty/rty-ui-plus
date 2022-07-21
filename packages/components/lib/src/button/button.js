"use strict";
var vue = require("vue");
require("./button.vue_vue_type_style_index_0_scoped_true_lang.js");
var pluginVue_exportHelper = require("../../_virtual/plugin-vue_export-helper.js");
const _sfc_main = {
  __name: "button",
  props: {
    type: {
      type: String,
      default: "primary"
    },
    size: {
      type: String,
      default: "normal"
    }
  },
  setup(__props) {
    const types = ["primary", "info", "success", "warning"];
    console.log(types);
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("button", {
        class: vue.normalizeClass(__props.size)
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 2);
    };
  }
};
var Button = /* @__PURE__ */ pluginVue_exportHelper(_sfc_main, [["__scopeId", "data-v-176f27e0"]]);
module.exports = Button;
