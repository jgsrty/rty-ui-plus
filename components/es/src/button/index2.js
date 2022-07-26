import { computed, ref, nextTick, openBlock, createElementBlock, normalizeClass, unref, createBlock, createCommentVNode, renderSlot } from "vue";
import rtySvg from "../svg/index2.js";
import "./index.vue_vue_type_style_index_0_scoped_true_lang.js";
import _export_sfc from "../../_virtual/plugin-vue_export-helper.js";
const _hoisted_1 = ["disabled"];
const types = ["primary", "info", "success", "warning"];
const sizes = {
  large: {
    val: "large",
    iconSize: 20
  },
  normal: {
    val: "normal",
    iconSize: 18
  },
  small: {
    val: "small",
    iconSize: 14
  },
  mini: {
    val: "mini",
    iconSize: 12
  }
};
const _sfc_main = {
  __name: "index",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
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
        const keys = Object.keys(sizes);
        const res = keys.indexOf(val) > -1;
        if (!res) {
          throw new Error(`size\u5FC5\u987B\u662F${keys.join("||")}\u4E2D\u7684\u4E00\u4E2A`);
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
        __props.icon ? (openBlock(), createBlock(rtySvg, {
          key: 0,
          size: sizes[__props.size].iconSize,
          name: __props.icon
        }, null, 8, ["size", "name"])) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 10, _hoisted_1);
    };
  }
};
var rtyButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5e54b199"]]);
export { rtyButton as default };
