/*
 * 登出方法
 */

import cookies from 'js-cookie'
import {DOMAIN, TOKEN_NAME} from '@/utils/config'
// vuex mutations
const mutations = {
  'm:common/account/logout' (state) {
    cookies.remove(TOKEN_NAME, {domain: DOMAIN.tld})
  }
}

const actions = {
  'a:common/account/authButton' ({state}, buttonName) {
    return true
  }
}

export default {
  mutations,
  actions
}
