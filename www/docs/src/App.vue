<template>
  <div id="nav">
    <router-link to="/">首页</router-link>|
    <router-link to="/guide">组件</router-link>
    <Link>npm</Link>
    <cc-button></cc-button>
  </div>
  <router-view></router-view>
</template>

<script lang="ts">
import Link from 'uninterest'
import {
  defineComponent
} from 'vue'
export default defineComponent({
  components: { Link }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
