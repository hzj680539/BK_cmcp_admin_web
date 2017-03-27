import Vue from 'vue'
import Router from 'vue-router'
import demo from './routes/demo'

Vue.use(Router)

export default new Router({
  routes: [
    ...demo,
    {
      path: '*',
      redirect: to => {
        return '/demo/first_menu/index'
      }
    }
  ]
})
