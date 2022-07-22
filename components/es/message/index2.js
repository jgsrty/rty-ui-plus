import { ref, onMounted, openBlock, createBlock, Transition, withCtx, withDirectives, createElementVNode, normalizeClass, createVNode, toDisplayString, vShow } from "vue";
import rtySvg from "../svg/index2.js";
import "./index.vue_vue_type_style_index_0_scoped_true_lang.js";
import _export_sfc from "../_virtual/plugin-vue_export-helper.js";
const _hoisted_1 = { class: "text" };
const types = {
  success: {
    icon: "user-happy",
    iconColor: "#19be6b",
    class: "rty-message-success"
  },
  plain: {
    icon: "user-plain",
    iconColor: "#909399",
    class: "rty-message-plain"
  },
  warning: {
    icon: "user-sick",
    iconColor: "#ff9900",
    class: "rty-message-warning"
  },
  error: {
    icon: "user-sad",
    iconColor: "#f56c6c",
    class: "rty-message-error"
  }
};
const _sfc_main = {
  __name: "index",
  props: {
    type: {
      type: String,
      default: "success",
      validator(val) {
        const keys = Object.keys(types);
        const res = keys.includes(val);
        if (!res) {
          throw new Error(`\u4F60\u7684 type \u5FC5\u987B\u662F ${keys.join("||")} \u4E2D\u7684\u4E00\u4E2A`);
        }
        return res;
      }
    },
    message: {
      type: String,
      required: true
    },
    duration: {
      type: Number,
      default: 3e3
    },
    destroy: {
      type: Function
    }
  },
  setup(__props) {
    const props = __props;
    const visible = ref(false);
    onMounted(() => {
      visible.value = true;
      setTimeout(() => {
        visible.value = false;
      }, props.duration);
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: "fade",
        onAfterLeave: __props.destroy
      }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("div", {
            class: normalizeClass(["rty-message", types[__props.type].class])
          }, [
            createVNode(rtySvg, {
              name: types[__props.type].icon,
              color: types[__props.type].iconColor
            }, null, 8, ["name", "color"]),
            createElementVNode("span", _hoisted_1, toDisplayString(__props.message), 1)
          ], 2), [
            [vShow, visible.value]
          ])
        ]),
        _: 1
      }, 8, ["onAfterLeave"]);
    };
  }
};
var messageComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-beb0eaba"]]);
export { messageComponent as default };
