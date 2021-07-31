<template>
  <div>
    WebSocket Demo, see details in your browser dev tools.
  </div>
</template>

<script>
export default {
  name: 'WebSocketDemo',
  data () {
    return {
      websock: null
    }
  },
  created () { // 页面创建生命周期函数
    this.initWebSocket()
  },
  methods: {
    // 初始化websocket
    initWebSocket () {
      // WebSocket与普通的请求所用协议有所不同，ws等同于http，wss等同于https
      this.websock = new WebSocket('ws://localhost:5418/WebsocketDemo/test')
      this.websock.onopen = this.websocketonopen
      this.websock.onerror = this.websocketonerror
      this.websock.onmessage = this.websocketonmessage
      this.websock.onclose = this.websocketclose
    },
    // 建立连接后执行方法
    websocketonopen () {
      console.log('WebSocket连接成功')
      this.websock.send('Test "websocketsend" function')
    },
    // 连接失败方法
    websocketonerror () {
      console.log('WebSocket连接发生错误')
    },
    // 获取websocket消息
    websocketonmessage (e) {
      console.log('WebSocket Data:', e.data)
    },
    // 发送websocket消息
    websocketsend (Data) { // 数据发送
      this.websock.send(Data)
      console.log('Data:', Data, 'has been send')
    },
    // 关闭websocket
    websocketclose (e) {
      console.log('connection closed (' + e.code + ')')
    }
  }
}
</script>
<style scoped>
</style>
