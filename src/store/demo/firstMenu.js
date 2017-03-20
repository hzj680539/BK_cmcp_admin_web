/*
 * 示例文件，正式开发时应删除
 */

import rc from '@/resource'

// vuex state
const state = {
  // 定义一个状态变量
  xxx: ''
}
// vuex mutations
const mutations = {
  'm:demo/firstMenu/xxx' (state, xxx) {
    state.xxx = xxx
  }
}

const actions = {
  // normal (has token)
  'a:demo/firstMenu/getXxx1' ({commit}, params) {
    rc.api({
      url: '/xxx/xxx',
      params: params
    }).then(
      res => {
        commit('m:demo/firstMenu/xxx', res)
      },
      rej => {
        // commit('m:demo/firstMenu/xxx', '')
      }
    )
  },
  // normal (no token)
  'a:demo/firstMenu/getXxx2' ({commit}, params) {
    rc.apiPublic({
      url: '/xxx/xxx',
      params: params
    }).then(
      res => {
        commit('m:demo/firstMenu/xxx', res)
      },
      rej => {
        commit('m:demo/firstMenu/xxx', '')
      }
    )
  },
  // upload file
  'a:demo/firstMenu/getXxx3' ({commit}, file) {
    rc.apiPublic({
      url: '/xxx/xxx',
      params: {
        file: file
      }
    }).then(
      res => {
        commit('m:demo/firstMenu/xxx', res)
      },
      rej => {
        commit('m:demo/firstMenu/xxx', '')
      }
    )
  },
  // has Promise
  'a:demo/firstMenu/setXxx' ({commit}, file) {
    return new Promise((resolve, reject) => {
      rc.api({
        url: '/xxx/xxx',
        params: {
          file: file
        }
      }).then(
        res => {
          commit('m:demo/firstMenu/xxx', res)
          resolve(res)
        },
        rej => {
          commit('m:demo/firstMenu/xxx', '')
          reject()
        }
      )
    })
  }
}

export default {
  state,
  mutations,
  actions
}
