<template>
  <div class="wrapper">
    <nav-bar></nav-bar>
    <menu-bar></menu-bar>
    <section class="main">
      <router-view></router-view>
    </section>
    <footer-bar></footer-bar>
  </div>
</template>
<script>
import NavBar from './NavBar'
import MenuBar from './MenuBar'
import FooterBar from './FooterBar'

export default {
  components: {
    NavBar,
    MenuBar,
    FooterBar
  }
}
</script>
<style lang="less">
@import '~@/assets/styles/general.less';
</style>
