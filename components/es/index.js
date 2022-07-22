import { defineAsyncComponent } from "vue";
export { default as rtyButton } from "./button/index2.js";
export { default as rtyConfirm } from "./confirm/index2.js";
export { default as rtySvg } from "./svg/index2.js";
export { rtyMessage } from "./message/index.js";
var index = {
  install(app) {
    const components = { "./src/button/index.vue": () => import("./button/index2.js"), "./src/confirm/index.vue": () => import("./confirm/index2.js"), "./src/message/index.vue": () => import("./message/index2.js"), "./src/svg/index.vue": () => import("./svg/index2.js") };
    for (const [fullPath, fn] of Object.entries(components)) {
      const componentName = "rty-" + fullPath.replace("./src/", "").split("/")[0];
      app.component(componentName, defineAsyncComponent(fn));
    }
  }
};
export { index as default };
