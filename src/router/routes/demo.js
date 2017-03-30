import layout from '@/components/layout/Index'
import { demo } from '@/cmd'

// 子菜单
const firstMenu = {
  index: resolve => require(['@/components/pages/demo/firstMenu/Index'], resolve),
  detail: resolve => require(['@/components/pages/demo/firstMenu/Detail'], resolve)
}

const routes = [
  {
    path: '/' + demo.$id,  // 模块
    component: layout,
    children: [
      {
        path: demo.firstMenu.$id + '/index',  // 子模块首页
        component: firstMenu.index
      },
      {
        path: demo.firstMenu.$id + '/detail', // 子模块详情页
        component: firstMenu.detail
      }
    ]
  }
]

export default routes
