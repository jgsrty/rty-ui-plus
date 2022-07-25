import { h, render } from "vue";
import confirmComponent from "./index2.js";
const rtyConfirm = (title, content, cancelText, confirmText) => {
  return new Promise((resovle, reject) => {
    if (title && !content) {
      content = title;
      title = "";
    }
    const close = () => {
      render(null, document.body);
    };
    const cancelHandler = () => {
      reject(new Error("\u53D6\u6D88\u6309\u94AE\u70B9\u51FB"));
    };
    const confirmHandler = () => {
      resovle();
    };
    const vnode = h(confirmComponent, {
      title,
      content,
      cancelText,
      confirmText,
      close,
      cancelHandler,
      confirmHandler
    });
    render(vnode, document.body);
  });
};
export { rtyConfirm };
