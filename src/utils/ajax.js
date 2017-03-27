import Vue from 'vue'
import axios from 'axios'
import { DOMAIN } from '@/utils/config'
import store from '@/store'

axios.defaults.baseURL = DOMAIN.apiPath

export default {
  // 登陆后私有接口使用
  api (params) {
    return new Promise((resolve, reject) => {
      axios.post('/', params, {
        data: {
          userToken: Vue.cookie.get('userToken')
        }
      }).then(
        res => {
          if (res.data.error) {
            if (res.data.error.errorCode === 15) {
              store.commit('m:common/account/logout')
            } else {
              store.dispatch('a:common/tips/errorInfo', res.data.error.errorInfo)
              reject(res.data.error)
            }
          } else {
            resolve(res.data)
          }
        }
      ).catch(
        res => {
          const error = {
            errorCode: res.status,
            errorInfo: res.statusText
          }
          store.dispatch('a:common/tips/errorInfo', '接口错误, status:' + res.status + ',' + res.statusText)
          reject(error)
        }
      )
    })
  },
  // 未登录公有接口使用
  apiPublic (params) {
    return new Promise((resolve, reject) => {
      axios.post('/', params).then(
        res => {
          if (res.data.error) {
            store.dispatch('a:common/tips/errorInfo', res.data.error.errorInfo)
            reject(res.data.error)
          } else {
            resolve(res.data)
          }
        }
      ).catch(
        res => {
          const error = {
            errorCode: res.status,
            errorInfo: res.statusText
          }
          store.dispatch('a:common/tips/errorInfo', '接口错误, status:' + res.status + ',' + res.statusText)
          reject(error)
        }
      )
    })
  },
  // 以formdate格式上传，待确定
  apiFormData (params) {
    // return new Promise((resolve, reject) => {
    //   const formData = new window.FormData()
    //   formData.append('token', window.localStorage.getItem('token'))
    //   Object.keys(params).map(key => {
    //     formData.append(key, params[key])
    //   })
    //   axios.post('/', formData).then(
    //     res => {
    //       if (res.data.error) {
    //         if (res.data.error.errorCode === 15) {
    //           store.commit('m:common/access/logout')
    //           window.location.reload()
    //         } else {
    //           store.dispatch('a:common/tips/errorInfo', res.data.error.errorInfo)
    //           reject(res.data.error)
    //         }
    //       } else {
    //         resolve(res.data)
    //       }
    //     }
    //   ).catch(
    //     res => {
    //       const error = {
    //         errorCode: res.status,
    //         errorInfo: res.statusText
    //       }
    //       store.dispatch('a:common/tips/errorInfo', '接口错误, status:' + res.status + ',' + res.statusText)
    //       reject(error)
    //     }
    //   )
    // })
  }
}
