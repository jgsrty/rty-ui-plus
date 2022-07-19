import { defineAsyncComponent } from "vue";
import { default as default2 } from "./button/index2.js";
import { default as default3 } from "./confirm/index2.js";
const index = {
  install(app) {
    const components = Object.assign({ "./src/button/index.vue": () => import("./button/index2.js"), "./src/confirm/index.vue": () => import("./confirm/index2.js") });
    for (const [fullPath, fn] of Object.entries(components)) {
      const componentName = "rty-" + fullPath.replace("./src/", "").split("/")[0];
      app.component(componentName, defineAsyncComponent(fn));
    }
  }
};
export {
  index as default,
  default2 as rtyButton,
  default3 as rtyConfirm
};
