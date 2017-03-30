import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'
import common from './common'
import demo from './demo'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    api,
    common,
    demo
  }
})
