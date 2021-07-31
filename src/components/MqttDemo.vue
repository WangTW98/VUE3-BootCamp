<template>
  <div>
    MQTT Demo, see details in your browser dev tools.
  </div>
</template>

<script>
// 使用前需npm安装mqtt依赖：‘npm install mqtt --save’ // demo使用版本： "mqtt": "^4.2.8",
import mqtt from 'mqtt'
export default {
  name: 'MQTTDemo',
  created () { // 页面创建生命周期函数
    this.mqtt()
  },
  methods: {
    mqtt () {
      const options = {
        connectTimeout: 40000,
        // clientId: 'uuidMqttId',
        clean: true,
        protocol: 'ws'
      }
      var client = mqtt.connect('ws://127.0.0.1:8083/mqtt', options)
      // mqtt连接
      client.on('connect', (e) => {
        console.log('连接成功:', e)
        client.subscribe('newVideoAlarm')
      })
      // 接收消息处理
      client.on('message', (topic, message) => {
        console.log('收到来自', topic, '的消息', message.toString())
      })
      // 断开发起重连
      client.on('reconnect', (error) => {
        console.log('正在重连:', error)
      })
      // 链接异常处理
      client.on('error', (error) => {
        console.log('连接失败:', error)
      })
    }
  }
}
</script>
<style scoped>
</style>
