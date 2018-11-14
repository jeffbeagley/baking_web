import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { title: "Gentle Baker" }
    },
    {
      path: "/about",
      name: "about",
      meta: { title: "About the Baker | Kattee Smith" },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/products",
      name: "Products",
      meta: { title: "Gentle Baker Current Products" },
      component: () =>
        import(/* webpackChunkName: "products" */ "./views/Products.vue")
    },
    {
      path: "/cart",
      name: "Cart",
      meta: { title: "Gentle Baker Shopping Cart" },
      component: () =>
        import(/* webpackChunkName: "cart" */ "./views/Cart.vue")
    }
  ]
});
