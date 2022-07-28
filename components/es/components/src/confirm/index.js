import { h, render } from "vue";
import confirmComponent from "./index2.js";
const rtyConfirm = (title, content, cancelText, confirmText) => {
  return new Promise((resovle, reject) => {
    if (title && !content) {
      content = title;
      title = "";
    }
    const div = document.createElement("div");
    const bodyDiv = document.body.appendChild(div);
    const close = () => {
      document.body.removeChild(bodyDiv);
      render(null, bodyDiv);
    };
    const cancelHandler = () => {
      reject(false);
    };
    const confirmHandler = () => {
      resovle(true);
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
    render(vnode, bodyDiv);
  });
};
export { rtyConfirm };
