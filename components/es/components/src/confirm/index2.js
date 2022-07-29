import { ref, onMounted, openBlock, createElementBlock, Fragment, createVNode, Transition, withCtx, createCommentVNode, toDisplayString, createElementVNode, createTextVNode } from "vue";
import rtyButton from "../button/index2.js";
import "./index.vue_vue_type_style_index_0_scoped_true_lang.js";
import _export_sfc from "../../../_virtual/plugin-vue_export-helper.js";
const _hoisted_1 = {
  key: 0,
  class: "confirm-container"
};
const _hoisted_2 = {
  key: 0,
  class: "title"
};
const _hoisted_3 = { class: "content" };
const _hoisted_4 = { class: "button" };
const _sfc_main = {
  __name: "index",
  props: {
    title: {
      type: String
    },
    content: {
      type: String,
      required: true
    },
    cancelText: {
      type: String,
      default: "\u53D6\u6D88"
    },
    confirmText: {
      type: String,
      default: "\u786E\u5B9A"
    },
    cancelHandler: {
      type: Function
    },
    confirmHandler: {
      type: Function
    },
    close: {
      type: Function
    }
  },
  setup(__props) {
    const props = __props;
    const isVisiable = ref(false);
    const duration = 500;
    onMounted(() => {
      isVisiable.value = true;
    });
    const onCancelClick = () => {
      if (props.cancelHandler) {
        props.cancelHandler();
      }
      close();
    };
    const onConfirmClick = () => {
      if (props.confirmHandler) {
        props.confirmHandler();
      }
      close();
    };
    const close = () => {
      isVisiable.value = false;
      setTimeout(() => {
        if (props.close) {
          props.close();
        }
      }, duration);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(Transition, { name: "fade" }, {
          default: withCtx(() => [
            isVisiable.value ? (openBlock(), createElementBlock("div", {
              key: 0,
              onClick: close,
              class: "confirm-bg"
            })) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(Transition, { name: "up" }, {
          default: withCtx(() => [
            isVisiable.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
              __props.title ? (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString(__props.title), 1)) : createCommentVNode("", true),
              createElementVNode("div", _hoisted_3, toDisplayString(__props.content), 1),
              createElementVNode("div", _hoisted_4, [
                createVNode(rtyButton, {
                  size: "mini",
                  type: "info",
                  onClick: onCancelClick
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(__props.cancelText), 1)
                  ]),
                  _: 1
                }),
                createVNode(rtyButton, {
                  size: "mini",
                  type: "primary",
                  onClick: onConfirmClick
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(__props.confirmText), 1)
                  ]),
                  _: 1
                })
              ])
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ], 64);
    };
  }
};
var confirmComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-06efd67a"]]);
export { confirmComponent as default };
