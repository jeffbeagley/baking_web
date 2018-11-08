import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./store/index.js";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCoffee, faTrash);

Vue.component("font-awesome-icon", FontAwesomeIcon);

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
