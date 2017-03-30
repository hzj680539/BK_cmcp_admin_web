export default {
  navBarList: [
    {
      id: 1,
      name: '数据统计',
      path: '/statistic',
      showChildren: true,
      children: [
        {
          name: '网站概况',
          path: '/website_overview'
        },
        {
          name: '实时访客',
          path: '/realtime_visitor'
        },
        {
          name: '趋势分析',
          path: '/trend_analysis'
        },
        {
          name: '受访页面',
          path: '/visited_page'
        }
      ]
    },
    {
      id: 2,
      name: '交易管理',
      path: '/business',
      showChildren: true,
      children: [
        {
          name: '询价单审核',
          path: '/enquiry_verify/index'
        },
        {
          name: '询价单审核记录',
          path: '/enquiry_verify_record/index'
        },
        {
          name: '询价跟单管理',
          path: '/enquiry_follow/index'
        },
        {
          name: '询价跟单记录',
          path: '/enquiry_follow_record/index'
        },
        {
          name: '大额订单管理',
          path: '/order_large/index'
        },
        {
          name: '大额订单跟单查询',
          path: '/order_large_follow/index'
        },
        {
          name: '报价单审核',
          path: '/quotation_verify/index'
        },
        {
          name: '报价单审核记录',
          path: '/quotation_verify_record/index'
        }
      ]
    }
  ]
}
