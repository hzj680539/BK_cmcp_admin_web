import Vue from 'vue'
import VueResource from 'vue-resource'
import DOMAIN from './domain'
import store from './store'

Vue.use(VueResource)

// http参数
const options = {
  credentials: true
}

const urlPrefix = DOMAIN.api

export default {
  // 登陆后私有接口使用
  api ({url, params}) {
    return new Promise((resolve, reject) => {
      const bodys = {
        token: window.localStorage.getItem('token')
      }
      const _body = Object.assign({}, bodys, params)
      Vue.http.post(urlPrefix + url, _body, options).then(
        res => {
          return res.json()
        },
        res => {
          const error = {
            errorCode: res.status,
            errorInfo: res.statusText
          }
          store.dispatch('a:common/tips/errorInfo', error.errorInfo)
          reject(error)
        }
      ).then(
        res => {
          if (!res) {
            store.dispatch('a:common/tips/errorInfo', '接口错误')
            reject('接口错误')
          } else if (res.error) {
            if (res.error.errorCode === 15) {
              store.commit('m:common/access/logout')
              window.location.reload()
            } else {
              store.dispatch('a:common/tips/errorInfo', res.error.errorInfo)
              reject(res.error)
            }
          } else {
            resolve(res.response)
          }
        }
      )
    })
  },
  // 未登录公有接口使用
  apiPublic ({url, params}) {
    return new Promise((resolve, reject) => {
      Vue.http.post(urlPrefix + url, params, options).then(
        res => {
          return res.json()
        },
        res => {
          const error = {
            errorCode: res.status,
            errorInfo: res.statusText
          }
          store.dispatch('a:common/tips/errorInfo', error.errorInfo)
          reject(error)
        }
      ).then(
        res => {
          if (res.error) {
            store.dispatch('a:common/tips/errorInfo', res.error.errorInfo)
            reject(res.error)
          } else {
            resolve(res.response)
          }
        }
      )
    })
  },
  // 以formdate格式上传
  apiFormData ({url, params}) {
    return new Promise((resolve, reject) => {
      const formData = new window.FormData()
      formData.append('token', window.localStorage.getItem('token'))
      Object.keys(params).map(key => {
        formData.append(key, params[key])
      })
      Vue.http.post(urlPrefix + url, formData, options).then(
        res => {
          return res.json()
        },
        res => {
          const error = {
            errorCode: res.status,
            errorInfo: res.statusText
          }
          store.dispatch('a:common/tips/errorInfo', error.errorInfo)
          reject(error)
        }
      ).then(
        res => {
          if (!res) {
            store.dispatch('a:common/tips/errorInfo', '接口错误')
            reject('接口错误')
          } else if (res.error) {
            if (res.error.errorCode === 15) {
              store.commit('m:common/access/logout')
              window.location.reload()
            } else {
              store.dispatch('a:common/tips/errorInfo', res.error.errorInfo)
              reject(res.error)
            }
          } else {
            resolve(res.response)
          }
        }
      )
    })
  }
}
