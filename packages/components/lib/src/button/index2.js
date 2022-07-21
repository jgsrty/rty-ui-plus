"use strict";
var vue = require("vue");
require("./index.vue_vue_type_style_index_0_scoped_true_lang.js");
var pluginVue_exportHelper = require("../../_virtual/plugin-vue_export-helper.js");
const types = ["primary", "info", "success", "warning"];
const sizes = ["large", "normal", "small", "mini"];
const _sfc_main = {
  __name: "index",
  props: {
    type: {
      type: String,
      default: "primary",
      validator(val) {
        const res = types.indexOf(val) > -1;
        if (!res) {
          throw new Error(`type\u5FC5\u987B\u662F${types.join("||")}\u4E2D\u7684\u4E00\u4E2A`);
        }
        return res;
      }
    },
    size: {
      type: String,
      default: "normal",
      validator(val) {
        const res = sizes.indexOf(val) > -1;
        if (!res) {
          throw new Error(`size\u5FC5\u987B\u662F${sizes.join("||")}\u4E2D\u7684\u4E00\u4E2A`);
        }
        return res;
      }
    }
  },
  setup(__props) {
    const props = __props;
    const component = "button-";
    const typeClass = component + props.type;
    const sizeClass = component + props.size;
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("button", {
        class: vue.normalizeClass([typeClass, sizeClass])
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 2);
    };
  }
};
var Button = /* @__PURE__ */ pluginVue_exportHelper(_sfc_main, [["__scopeId", "data-v-143d5d77"]]);
module.exports = Button;
