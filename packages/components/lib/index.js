"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var vue = require("vue");
var index$1 = require("./button/index2.js");
var index$2 = require("./confirm/index2.js");
function _interopNamespaceDefaultOnly(e) {
  return Object.freeze(Object.defineProperty({ __proto__: null, "default": e }, Symbol.toStringTag, { value: "Module" }));
}
var index = {
  install(app) {
    const components = { "./src/button/index.vue": () => Promise.resolve().then(function() {
      return /* @__PURE__ */ _interopNamespaceDefaultOnly(require("./button/index2.js"));
    }), "./src/confirm/index.vue": () => Promise.resolve().then(function() {
      return /* @__PURE__ */ _interopNamespaceDefaultOnly(require("./confirm/index2.js"));
    }) };
    for (const [fullPath, fn] of Object.entries(components)) {
      const componentName = "rty-" + fullPath.replace("./src/", "").split("/")[0];
      app.component(componentName, vue.defineAsyncComponent(fn));
    }
  }
};
exports.rtyButton = index$1;
exports.rtyConfirm = index$2;
exports["default"] = index;
