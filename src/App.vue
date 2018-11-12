<template>
  <div id="app">
    <nav-bar></nav-bar>
<transition name="router-anim">
  <router-view></router-view>
</transition>
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'app',
  components: {
  	NavBar
  },
  data () {
    return {}
  }
}
</script>

