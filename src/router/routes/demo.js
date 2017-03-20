import layout from '@/components/layout/Index'

// 子菜单
const firstMenu = {
  index: resolve => require(['@/components/pages/demo/firstMenu/Index'], resolve),
  detail: resolve => require(['@/components/pages/demo/firstMenu/Detail'], resolve)
}

const routes = [
  {
    path: '/demo',  // 模块
    component: layout,
    children: [
      {
        path: 'firstMenu/index',  // 子模块首页
        component: firstMenu.index
      },
      {
        path: 'firstMenu/detail', // 子模块详情页
        component: firstMenu.detail
      }
    ]
  }
]

export default routes