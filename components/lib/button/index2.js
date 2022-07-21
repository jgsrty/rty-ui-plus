"use strict";
var vue = require("vue");
require("./index.vue_vue_type_style_index_0_scoped_true_lang.js");
var pluginVue_exportHelper = require("../_virtual/plugin-vue_export-helper.js");
const _hoisted_1 = ["disabled"];
const types = ["primary", "info", "success", "warning"];
const sizes = ["large", "normal", "small", "mini"];
const _sfc_main = {
  __name: "index",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
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
  emits: ["click"],
  setup(__props, { emit }) {
    const props = __props;
    const component = "rty-button";
    const classes = vue.computed(() => {
      return [
        component,
        `${component}-${props.type}`,
        `${component}-${props.size}`,
        { "is-disabled": props.disabled }
      ];
    });
    const btnRef = vue.ref();
    const handleClick = (e) => emit("click", e);
    vue.nextTick(() => {
      if (props.disabled && props.type === "info") {
        btnRef.value.classList.add("info-no-hover");
      }
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("button", {
        ref_key: "btnRef",
        ref: btnRef,
        onClick: handleClick,
        class: vue.normalizeClass(vue.unref(classes)),
        disabled: __props.disabled
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 10, _hoisted_1);
    };
  }
};
var Button = /* @__PURE__ */ pluginVue_exportHelper(_sfc_main, [["__scopeId", "data-v-710e52be"]]);
module.exports = Button;
