<template>
  <section>
    示例首页 {{xxx}}
    <cmcp-demo></cmcp-demo>
    <button @click="logout">登出</button>
  </section>
</template>
<script>
import cookies from 'js-cookie'
import { mapState } from 'vuex'
import { CmcpDemo } from '@/components/modules'
import { DOMAIN, TOKEN_NAME } from '@/utils/config'
export default {
  // 外部属性
  props: {
    id: {
      type: String,
      default: '111'
    }
  },
  // 自有属性
  data () {
    return {
      // 参数对象
      params: {}
    }
  },
  // 计算属性
  computed: {
    ...mapState({
      xxx: state => state.demo.firstMenu.xxx
    })
  },
  // 自有方法
  methods: {
    // 初始化想法
    init () {
      cookies.set(TOKEN_NAME, 'xxxxxx', {domain: DOMAIN.tld})
      this.$store.commit('m:demo/firstMenu/xxx', '示例变量')
      // this.$store.dispatch(demo.firstMenu.search.actionName, this.params)
    },
    // 登出
    logout () {
      this.$store.commit('m:common/account/logout')
    }
  },
  // 监听方法
  watch: {
    params: function (val) {
      // do something
    }
  },
  // 引入组件
  components: {
    CmcpDemo
  },
  // 生命周期
  created () {
    this.init()
  }
}
</script>
<style lang="less" scoped>

</style>
