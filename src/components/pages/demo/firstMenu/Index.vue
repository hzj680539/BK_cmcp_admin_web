<template>
  <section>
    示例首页 {{xxx}}
    <cmcp-demo></cmcp-demo>
    <button @click="logout">登出</button>
  </section>
</template>
<script>
import { mapState } from 'vuex'
import { CmcpDemo } from '@/components/modules'
import Domain from '@/domain'
export default {
  // 外部属性
  props: {
    id: {
      type: String,
      default: '111'
    }
  },
  // 计算属性
  data () {
    return {
      // 参数对象
      params: {}
    }
  },
  // 自有属性
  computed: {
    ...mapState({
      xxx: state => state.demo.firstMenu.xxx
    })
  },
  // 自有方法
  methods: {
    // 初始化想法
    init () {
      this.$cookie.set('token', 'xxxxxx', {domain: Domain.tlp})
      this.$store.commit('m:demo/firstMenu/xxx', '示例变量')
      this.$store.dispatch('a:demo/firstMenu/getXxx1', this.params)
    },
    // 登出
    logout () {
      this.$store.commit('m:common/access/logout')
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
