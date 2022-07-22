import { defineAsyncComponent } from "vue";
export { default as rtyButton } from "./src/button/index2.js";
export { default as rtyConfirm } from "./src/confirm/index2.js";
export { default as rtySvg } from "./src/svg/index2.js";
export { rtyMessage } from "./src/message/index.js";
var index = {
  install(app) {
    const components = { "./src/button/index.vue": () => import("./src/button/index2.js"), "./src/confirm/index.vue": () => import("./src/confirm/index2.js"), "./src/message/index.vue": () => import("./src/message/index2.js"), "./src/svg/index.vue": () => import("./src/svg/index2.js") };
    for (const [fullPath, fn] of Object.entries(components)) {
      const componentName = "rty-" + fullPath.replace("./src/", "").split("/")[0];
      app.component(componentName, defineAsyncComponent(fn));
    }
  }
};
export { index as default };
