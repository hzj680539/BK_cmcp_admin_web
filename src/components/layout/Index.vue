<template>
  <div class="app">
    <section class="header">
      <header-bar/>
    </section>
    <section class="container">
      <section class="left-side">
        <menu-bar/>
      </section>
      <section class="right-side">
        <router-view></router-view>
      </section>
    </section>
    <section class="footer">
      <footer-bar/>
    </section>
  </div>
</template>

<script>
import HeaderBar from './HeaderBar'
import FooterBar from './FooterBar'
import MenuBar from './MenuBar'

export default {
  components: {
    HeaderBar,
    MenuBar,
    FooterBar
  }
}
</script>

<style lang="less">
.app {
  margin: 0 auto;
  width: 1280px;
  min-height: 600px;
  height: auto;
  background: yellow;
  .header {
    width: 100%;
    height: 60px;
    background: green;
  }
  .container {
    height: 600px;
    .left-side {
      float: left;
      width: 250px;
      min-height: 500px;
      height: auto;
      background: gray;
    }
    .right-side {
      float: left;
      margin-left: 5px;
      width: 950px;
      min-height: 600px;
      height: auto;
      background: darkgray;
    }
  }
  .footer {
    width: 100%;
    height: 60px;
    background: green;
  }
}

</style>
