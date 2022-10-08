// 封装消息组件，多次触发只展示最新一条信息
import { Message } from 'element-ui'
let msgInstance = null
const singleMessage = (options = {}) => {
  // 如果弹窗已存在先关闭
  if (msgInstance) {
    msgInstance.close()
  }
  msgInstance = Message(options)
  return msgInstance // 返回实例
}

// 支持 this.$singleMessge.warning('msg') 调用
['success', 'warning', 'info', 'error'].map(type => {
  singleMessage[type] = (options) => {
    if (typeof options === 'string') {
      options = {
        message: options
      };
    }
    options.type = type;
    return singleMessage(options)
  }
})

export default singleMessage