/*
 * 示例文件，正式开发时应删除
 */

import ajax from '@/utils/ajax'

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
  // normal (no token)
  'a:demo/firstMenu/getXxx2' ({commit, dispatch}, params) {
    dispatch('a:api/order/myEnquiry/saveDraft', params).then()
  },
  // has Promise
  'a:demo/firstMenu/setXxx' ({commit}, params) {
    return new Promise((resolve, reject) => {
      ajax.api({
        cmd: '/xxx/xxx',
        parameters: params
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
