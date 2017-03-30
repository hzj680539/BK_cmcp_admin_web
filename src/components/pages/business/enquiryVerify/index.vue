<!-- 询价单审核列表页 -->
<template>
  <h1>询价单审核列表页</h1>
</template>
<script>
import { business } from '@/cmd'
export default {
  methods: {
    init () {
      this.$store.dispatch('a:api/enquiry/verifyEnqList', {
        params: {},
        button: business.CheckEnquiryList.search
      })
    }
  },
  created () {
    this.init()
  }
}
</script>
