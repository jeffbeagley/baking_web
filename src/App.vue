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

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.router-anim-enter-active {
  animation: coming .1s;
  opacity: 0;
}
.router-anim-leave-active {
  animation: going .1;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(50px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateX(50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

</style>
