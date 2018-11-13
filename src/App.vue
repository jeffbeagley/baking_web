<template>
  <div id="app">
    <nav-bar></nav-bar>
    <transition name="router-anim">
        <router-view></router-view>
    </transition>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import FooterBar from './components/FooterBar'

export default {
  name: 'app',
  components: {
  	NavBar,
    FooterBar
  },
  data () {
    return {}
  }
}
</script>

