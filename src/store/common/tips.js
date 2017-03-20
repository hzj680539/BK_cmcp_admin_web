// vuex state
const state = {
  // 错误提示
  errorInfo: '',
  // 成功提示
  succInfo: ''
}
// vuex mutations
const mutations = {
  'm:common/tips/errorInfo' (state, errorInfo) {
    state.errorInfo = errorInfo
  },
  'm:common/tips/succInfo' (state, succInfo) {
    state.succInfo = succInfo
  }
}

// vuex actions
const actions = {
  'a:common/tips/errorInfo' ({commit}, errorInfo) {
    console.log('errorInfo:' + errorInfo)
    commit('m:common/tips/errorInfo', errorInfo)
    setTimeout(() => {
      commit('m:common/tips/errorInfo', '')
    }, 3000)
  },
  'a:common/tips/succInfo' ({commit}, succInfo) {
    console.log('succInfo:' + succInfo)
    commit('m:common/tips/succInfo', succInfo)
    setTimeout(() => {
      commit('m:common/tips/succInfo', '')
    }, 3000)
  }
}

export default {
  state,
  mutations,
  actions
}
