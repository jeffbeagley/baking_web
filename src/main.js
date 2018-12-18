import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store/index.js'
import BootstrapVue from 'bootstrap-vue'
import Notifications from 'vue-notification'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './assets/fonts/icomoon/style.css'
import './assets/css/style.css'

// Environment configuration
if(process.env.NODE_ENV === 'production') {
    window.endpoint = 'https://stickly.herokuapp.com'
} else {
    window.endpoint = 'http://localhost:9001/api'
}

Vue.use(BootstrapVue)
Vue.use(Notifications)

Vue.component('modal', { template: '#modal-template' })

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
