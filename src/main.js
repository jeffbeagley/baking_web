import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./store/index.js";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "./assets/fonts/icomoon/style.css";
import "./assets/css/style.css";

Vue.use(BootstrapVue);

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
