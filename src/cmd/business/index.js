// 询价单审核
import enquiryVerify from './enquiryVerify'
// 询价单审核记录
import enquiryVerifyRecord from './enquiryVerifyRecord'
// 询价跟单管理
import enquiryFollow from './enquiryFollow'
// 询价跟单记录
import enquiryFollowRecord from './enquiryFollowRecord'
// 大额订单管理
import orderLarge from './orderLarge'
// 大额订单跟单查询
import orderLargeFollow from './orderLargeFollow'
// 报价单审核
import quotationVerify from './quotationVerify'
// 报价单审核记录
import quotationVerifyRecord from './quotationVerifyRecord'

export default {
  // 模块名
  $id: 'business',
  // 挂载页面
  enquiryVerify,
  enquiryVerifyRecord,
  enquiryFollow,
  enquiryFollowRecord,
  orderLarge,
  orderLargeFollow,
  quotationVerify,
  quotationVerifyRecord
}
