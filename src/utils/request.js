import axios from 'axios'
import {
  Message,
  Loading
} from 'element-plus'
import router from '@/router'
import qs from 'qs'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API // url = base url + request url
  // request timeout
  // timeout: 15000
})
var timeouts = 15000

let loading = null

service.interceptors.request.use(
  config => {
    if (config.loading) {
      loading = Loading.service({
        lock: true,
        text: '加载中……',
        background: 'rgba(0, 0, 0, 0.7)'
      })
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    if (response.config.loading) {
      loading.close()
    }
    if (response.status === 200) {
      // 包装分页数据
      // response.data.pageParams = extractPageParams(response.data);
      return Promise.resolve(response.data)
    }
    return Promise.reject(response)
  },
  error => {
    loading.close()
    if (error.response) {
      switch (error.response.status) {
        case 401:
          error.response = null
          router.push({
            path: '/login'
          })
          break
        default:
          console.error('网络请求异常：', error)
      }
    }

    //
    if (error.response) {
      Message.error(error.response.data.msg || '出现错误')
    } else {
      Message.error('请求超时')
    }

    console.error('网络请求异常22：', error)

    return Promise.reject(error)
  }
)

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * @param {Object} loading [请求时loading]
 */
export function get (url, params, loading, timeout = timeouts) {
  return new Promise((resolve, reject) => {
    service
      .get(url, {
        params: params,
        loading: loading,
        timeout: timeout,
        paramsSerializer: params => {
          return qs.stringify(params, {
            arrayFormat: 'repeat'
          })
        }
      })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err.response ? err.response.data : err)
      })
  })
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} data [请求时携带的参数]
 * @param {Object} loading [请求时loading]
 */
export function post (url, data, loading, timeout = timeouts) {
  return new Promise((resolve, reject) => {
    service
      .post(url, data, {
        loading: loading,
        timeout: timeout
      })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err.response ? err.response.data : err)
      })
  })
}

/**
 * put方法，对应put请求
 * @param {String} url [请求的url地址]
 * @param {Object} data [请求时携带的参数]
 * @param {Object} loading [请求时loading]
 */
export function put (url, data, loading, timeout = timeouts) {
  return new Promise((resolve, reject) => {
    service
      .put(url, data, loading, { timeout: timeout })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err.response ? err.response.data : err)
      })
  })
}

/**
 * delete方法，对应delete请求
 * @param {String} url [请求的url地址]
 * @param {Object} data [请求时携带的参数]
 * @param {Object} loading [请求时loading]
 */

export function del (url, data, loading, timeout = timeouts) {
  return new Promise((resolve, reject) => {
    service
      .delete(url, {
        data: data,
        loading: loading,
        timeout: timeout
      })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err.response ? err.response.data : err)
      })
  })
}
