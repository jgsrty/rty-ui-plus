import { h, render } from "vue";
import messageComponent from "./index.vue";

export const rtyMessage = ({ type, message, duration }) => {
  // 3.删除render
  const onDestroy = () => {
    render(null, document.body);
  };
  // 1.拿到vnode
  const vnode = h(messageComponent, {
    type,
    message,
    duration,
    destroy: onDestroy,
  });
  // 2.render vnode
  render(vnode, document.body);
};
