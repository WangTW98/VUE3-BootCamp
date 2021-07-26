import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setCookieConfig, setLocalStorageConfig } from './utils/configuration'
import { getCookie, setLocalStorage, getLocalStorage, removeLocalStorage } from './utils/stroages'

setCookieConfig((data) => {
  setLocalStorage('1config', data)
  console.log('getLocalStorage:', getLocalStorage('config'))
  console.log('removeLocalStorage:', removeLocalStorage('config'))
  console.log('cookies:', getCookie('config'))
})

setLocalStorageConfig((data) => {
  setLocalStorage('1config', data)
  console.log('getLocalStorage:', getLocalStorage('config'))
  console.log('removeLocalStorage:', removeLocalStorage('config'))
  console.log('cookies:', getCookie('config'))
})

createApp(App).use(store).use(router).mount('#app')

router.beforeEach((to, from, next) => {
  // 路由发生变化修改页面title，需配合router.js代码生效
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
