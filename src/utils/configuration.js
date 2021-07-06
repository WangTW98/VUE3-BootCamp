import axios from 'axios'
import { setCookie, setLocalStorage } from './stroages'

/**
 * @description 将获取的配置文件以cookie形式存储
 * @param {function} func 回调函数
 */
export function setCookieConfig (func) {
  axios.get('./conf.json').then((res) => {
    setCookie('config', JSON.stringify(res.data))
    func(res.data)
  }).catch(function (err) {
    console.log(err)
  })
}

/**
 * @description 将获取的配置文件以LocalStorage形式存储
 * @param {function} func 回调函数
 */
export function setLocalStorageConfig (func) {
  axios.get('./conf.json').then((res) => {
    setLocalStorage('config', JSON.stringify(res.data))
    func(res.data)
  }).catch(function (err) {
    console.log(err)
  })
}
