import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Products from "./components/store/Products.vue";
import Cart from "./components/store/Cart.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { title: "home" }
    },
    {
      path: "/about",
      name: "about",
      meta: { title: "about page" },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/products",
      name: "Products",
      meta: { title: "Products" },
      component: Products
    },
    {
      path: "/cart",
      name: "Cart",
      meta: { title: "Cart" },
      component: Cart
    }
  ]
});
