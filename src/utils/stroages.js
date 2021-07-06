/**
 * @description 设置cookie
 * @param {string} cname cookie名
 * @param {string} cvalue cookie值
 * @param {number} exdays cookie时间（不传为关闭浏览器失效）
 */
export function setCookie (cname, cvalue, exdays) {
  var d = new Date()
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
  var expires = 'expires=' + d.toGMTString()
  document.cookie = cname + '=' + cvalue + '; ' + expires
}

/**
 * @description 获取cookie
 * @param {string} cname cookie名
 * @returns {string} 返回cookie值
 */
export function getCookie (cname) {
  var name = cname + '='
  var ca = document.cookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim()
    if (c.indexOf(name) === 0) return c.substring(name.length, c.length)
  }
  return ''
}

/**
 * @description 设置LocalStorage
 * @param {string} key 名称
 * @param {object} value 值
 */
export function setLocalStorage (key, value) {
  if (!window.localStorage) {
    console.warn('浏览器不支持LocalStorage')
  } else {
    const localStorage = window.localStorage
    localStorage.setItem(key, JSON.stringify(value))
  }
}

/**
 * @description 获取LocalStorage
 * @param {string} key 名称
 * @returns {object} LocalStorage值
 */
export function getLocalStorage (key) {
  if (!window.localStorage) {
    console.warn('浏览器不支持LocalStorage')
  } else {
    const localStorage = window.localStorage
    return localStorage.getItem(key)
  }
}

/**
 * @description 删除LocalStorage
 * @param {string} key 名称
 * @returns {boolean} 是否成功删除
 */
export function removeLocalStorage (key) {
  if (!window.localStorage) {
    console.warn('浏览器不支持LocalStorage')
  } else if (getLocalStorage(key) !== null) {
    const localStorage = window.localStorage
    localStorage.removeItem(key)
    return true
  }
  return false
}
