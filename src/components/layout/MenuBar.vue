<template>
  <div class="navbar">
    <ul>
      <li v-for="item in navBarList">
        <div class="level-one"><router-link v-bind:to="item.path">{{item.name}}</router-link></div>
        <transition v-if="item.showChildren">
          <ul v-if="item.children && item.children.length">
            <li v-for="subitem in item.children">
              <div class="level-two"><router-link v-bind:to="item.path + subitem.path">{{subitem.name}}</router-link></div>
            </li>
          </ul>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>
  import navBar from '@/config/navbar'

  export default {
    data () {
      return {
        navBarList: navBar.navBarList
      }
    },
    created () {
//      console.dir(this.navBarList)
    }
  }
</script>

<style lang="less" scoped>
  ul li {
    list-style: none;
  }
  .level-one {
    background: green;
  }
</style>
