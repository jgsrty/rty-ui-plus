"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const index$1 = require("./button/index2.js");
const index$2 = require("./confirm/index2.js");
const _interopNamespaceDefaultOnly = (e) => Object.freeze(Object.defineProperty({ __proto__: null, default: e }, Symbol.toStringTag, { value: "Module" }));
const index = {
  install(app) {
    const components = Object.assign({ "./src/button/index.vue": () => Promise.resolve().then(() => /* @__PURE__ */ _interopNamespaceDefaultOnly(require("./button/index2.js"))), "./src/confirm/index.vue": () => Promise.resolve().then(() => /* @__PURE__ */ _interopNamespaceDefaultOnly(require("./confirm/index2.js"))) });
    for (const [fullPath, fn] of Object.entries(components)) {
      const componentName = "rty-" + fullPath.replace("./src/", "").split("/")[0];
      app.component(componentName, vue.defineAsyncComponent(fn));
    }
  }
};
exports.rtyButton = index$1;
exports.rtyConfirm = index$2;
exports.default = index;
