import { h, render } from 'vue'
import confirmComponent from './index.vue'

export const rtyConfirm = (title, content, cancelText, confirmText) => {
  return new Promise((resovle, reject) => {
    if (title && !content) {
      // 用户没传递content 则title作为content
      content = title
      title = ''
    }

    const close = () => {
      render(null, document.body)
    }
    const cancelHandler = () => {
      reject(new Error('取消按钮点击'))
    }
    const confirmHandler = () => {
      resovle()
    }

    const vnode = h(confirmComponent, {
      title,
      content,
      cancelText,
      confirmText,
      close,
      cancelHandler,
      confirmHandler
    })
    render(vnode, document.body)
  })
}