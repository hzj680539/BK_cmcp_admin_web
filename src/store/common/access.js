/*
 * 登出方法
 */

import Vue from 'vue'
import Domian from '@/domain'
// vuex mutations
const mutations = {
  'm:common/access/logout' (state) {
    Vue.cookie.delete('token', {domain: Domian.tlp})
  }
}

export default {
  mutations
}
