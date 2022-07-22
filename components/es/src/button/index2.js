import { computed, ref, nextTick, openBlock, createElementBlock, normalizeClass, unref, renderSlot } from "vue";
import "./index.vue_vue_type_style_index_0_scoped_true_lang.js";
import _export_sfc from "../../_virtual/plugin-vue_export-helper.js";
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
    const classes = computed(() => {
      return [
        component,
        `${component}-${props.type}`,
        `${component}-${props.size}`,
        { "is-disabled": props.disabled }
      ];
    });
    const btnRef = ref();
    const handleClick = (e) => emit("click", e);
    nextTick(() => {
      var _a;
      if (props.disabled && props.type === "info") {
        (_a = btnRef.value) == null ? void 0 : _a.classList.add("info-no-hover");
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        ref_key: "btnRef",
        ref: btnRef,
        onClick: handleClick,
        class: normalizeClass(unref(classes)),
        disabled: __props.disabled
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 10, _hoisted_1);
    };
  }
};
var Button = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5880e77b"]]);
export { Button as default };
