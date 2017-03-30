import Vue from 'vue'
import Router from 'vue-router'
import demo from './routes/demo'
import statistic from './routes/statistic'
import business from './routes/business'
import layout from '@/components/layout/Index'

Vue.use(Router)

export default new Router({
  routes: [
    ...demo,
    ...statistic, // 数据统计
    ...business, // 交易管理
    {
      path: '/',
      component: layout
    },
    {
      path: '*',
      redirect: to => {
        return '/demo/first_menu/index'
      }
    }
  ]
})
