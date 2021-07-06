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
