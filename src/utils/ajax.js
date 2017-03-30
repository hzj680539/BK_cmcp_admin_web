import axios from 'axios'
import store from '@/store'
import cookies from 'js-cookie'
import {DOMAIN, TOKEN_NAME} from '@/utils/config'
import auth from '@/utils/auth'

axios.defaults.baseURL = DOMAIN.apiPath

export default {
  // 登陆后私有接口使用
  api ({data, button}) {
    return new Promise((resolve, reject) => {
      // 判断cmd是否在按钮中配置
      if (button && !auth.cmd(button, data.cmd)) {
        const error = {
          errorCode: '',
          errorInfo: '代码错误，cmd未配置'
        }
        store.dispatch('a:common/tips/errorInfo', error.errorInfo)
        reject(error)
        return
      }
      // 触发ajax
      axios.post('/', data, {
        // 注入token
        data: {
          userToken: cookies.get(TOKEN_NAME)
        }
      }).then(
        // 请求成功
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
        // 请求失败
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
