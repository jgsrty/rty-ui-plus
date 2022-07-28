import { defineAsyncComponent } from "vue";
export { default as rtyButton } from "./src/button/index2.js";
export { default as rtySvg } from "./src/svg/index2.js";
export { default as rtyInput } from "./src/input/index2.js";
import "./src/form/index.js";
export { rtyMessage } from "./src/message/index.js";
export { rtyConfirm } from "./src/confirm/index.js";
import _sfc_main from "./src/form/index2.js";
export { default as rtyForm } from "./src/form/index2.js";
var index = {
  install(app) {
    const components = { "./src/button/index.vue": () => import("./src/button/index2.js"), "./src/confirm/index.vue": () => import("./src/confirm/index2.js"), "./src/form/index.vue": () => import("./src/form/index2.js"), "./src/form-item/index.vue": () => import("./src/form-item/index.js"), "./src/input/index.vue": () => import("./src/input/index2.js"), "./src/message/index.vue": () => import("./src/message/index2.js"), "./src/svg/index.vue": () => import("./src/svg/index2.js") };
    for (const [fullPath, fn] of Object.entries(components)) {
      const componentName = "rty-" + fullPath.replace("./src/", "").split("/")[0];
      app.component(componentName, defineAsyncComponent(fn));
    }
  }
};
const rtyFormItem = _sfc_main.Item;
export { index as default, rtyFormItem };
