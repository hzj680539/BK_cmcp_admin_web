import { business } from '@/cmd'
// 交易管理
import layout from '@/components/layout/Index'
// 询价单审核
const enquiryVerify = {
  index: resolve => require(['@/components/pages/business/enquiryVerify/Index'], resolve),
  detail: resolve => require(['@/components/pages/business/enquiryVerify/Detail'], resolve)
}
// 询价单审核记录
const enquiryVerifyRecord = {
  index: resolve => require(['@/components/pages/business/enquiryVerifyRecord/Index'], resolve),
  detail: resolve => require(['@/components/pages/business/enquiryVerifyRecord/Detail'], resolve)
}
// 询价跟单管理
const enquiryFollow = {
  index: resolve => require(['@/components/pages/business/enquiryFollow/Index'], resolve)
}
// 询价跟单记录
const enquiryFollowRecord = {
  index: resolve => require(['@/components/pages/business/enquiryFollowRecord/Index'], resolve)
}
// 大额订单管理
const orderLarge = {
  index: resolve => require(['@/components/pages/business/orderLarge/Index'], resolve)
}
// 大额订单跟单查询
const orderLargeFollow = {
  index: resolve => require(['@/components/pages/business/orderLargeFollow/Index'], resolve)
}
// 报价单审核
const quotationVerify = {
  index: resolve => require(['@/components/pages/business/quotationVerify/Index'], resolve),
  detail: resolve => require(['@/components/pages/business/quotationVerify/Detail'], resolve)
}
// 报价单审核记录
const quotationVerifyRecord = {
  index: resolve => require(['@/components/pages/business/quotationVerifyRecord/Index'], resolve),
  detail: resolve => require(['@/components/pages/business/quotationVerifyRecord/Detail'], resolve)
}

const routes = [
  {
    path: '/' + business.$id,
    component: layout,
    children: [
      // 询价单审核
      {
        path: business.enquiryVerify.$id + '/index',
        component: enquiryVerify.index
      },
      {
        path: business.enquiryVerify.$id + '/detail',
        component: enquiryVerify.detail
      },
      // 询价单审核记录
      {
        path: business.enquiryVerifyRecord.$id + '/index',
        component: enquiryVerifyRecord.index
      },
      {
        path: business.enquiryVerifyRecord.$id + '/detail',
        component: enquiryVerifyRecord.detail
      },
      // 询价跟单管理
      {
        path: business.enquiryFollow.$id + '/index',
        component: enquiryFollow.index
      },
      // 询价跟单记录
      {
        path: business.enquiryFollowRecord.$id + '/index',
        component: enquiryFollowRecord.index
      },
      // 大额订单管理
      {
        path: business.orderLarge.$id + '/index',
        component: orderLarge.index
      },
      // 大额订单跟单查询
      {
        path: business.orderLargeFollow.$id + '/index',
        component: orderLargeFollow.index
      },
      // 报价单审核
      {
        path: business.quotationVerify.$id + '/index',
        component: quotationVerify.index
      },
      {
        path: business.quotationVerify.$id + '/detail',
        component: quotationVerify.detail
      },
      // 报价单审核记录
      {
        path: business.quotationVerifyRecord.$id + '/index',
        component: quotationVerifyRecord.index
      },
      {
        path: business.quotationVerifyRecord.$id + '/detail',
        component: quotationVerifyRecord.detail
      }
    ]
  }
]

export default routes
