import { h, render } from "vue";
import messageComponent from "./index2.js";
const rtyMessage = ({ type, message, duration }) => {
  const onDestroy = () => {
    render(null, document.body);
  };
  const vnode = h(messageComponent, {
    type,
    message,
    duration,
    destroy: onDestroy
  });
  render(vnode, document.body);
};
export { rtyMessage };
