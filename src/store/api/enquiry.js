import ajax from '@/utils/ajax'
// vuex actions
const actions = {
  // 询价单审核列表
  'a:api/enquiry/verifyList' ({state}, {params, page, rows, button}) {
    return ajax.api({
      data: {
        cmd: 'cn_business/admin/adminAction/verifyEnquiry/verifyEnqList',
        parameters: params,
        page: page,
        rows: rows
      },
      button: button
    })
  },
  // 询价单审核明细
  'a:api/enquiry/verifyDetail' ({state}, {enquirySn, button}) {
    return ajax.api({
      data: {
        cmd: 'cn_business/admin/adminAction/verifyEnquiry/verifyEnqDetail',
        parameters: {
          enquirySn: enquirySn
        }
      },
      button: button
    })
  },
  // 询价单审核记录列表
  'a:api/enquiry/verifyRecordList' ({state}, {params, page, rows, button}) {
    return ajax.api({
      data: {
        cmd: 'cn_business/admin/adminAction/verifyEnquiry/verifyEnqHisList',
        parameters: params,
        page: page,
        rows: rows
      },
      button: button
    })
  },
  // 询价单审核记录明细
  'a:api/enquiry/verifyRecordDetail' ({state}, {enquirySn, button}) {
    return ajax.api({
      data: {
        cmd: 'cn_business/admin/adminAction/verifyEnquiry/verifyEnqHisDetail',
        parameters: {
          enquirySn: enquirySn
        }
      },
      button: button
    })
  },
  // 询价单审核不通过
  'a:api/enquiry/verifyReject' ({state}, {enquirySn, reason, button}) {
    return ajax.api({
      data: {
        cmd: 'cn_business/admin/adminAction/verifyEnquiry/verifyEnqHisDetail',
        parameters: {
          enquirySn: enquirySn,
          reason: reason
        }
      },
      button: button
    })
  }
}

export default {
  actions
}
