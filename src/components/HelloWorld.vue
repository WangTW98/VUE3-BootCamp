<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <p>
      项目基于Vue-cli3创建,包含基本JS方法,依赖等; 项目地址见：
      <a
        href="https://github.com/WangTW98/VUE3-BootCamp"
        target="_blank"
        rel="noopener"
        >VUE3-BootCamp</a
      >
    </p>
    <h3>基本配置</h3>
    <ul>
      <li>使用ES-Lint</li>
      <li>使用scss</li>
      <li>使用vue-router</li>
      <li>使用vuex</li>
    </ul>
    <h3>基本JS方法</h3>
    <ul>
      <li>本地存储</li>
      <li>获取外部配置</li>
    </ul>
    <h3>常用DEMO</h3>
    <ul>
      <li>MQTT DEMO</li>
      <li>Websocket Demo</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
.hello {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
