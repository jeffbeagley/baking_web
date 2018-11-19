<template>
    <header class="site-navbar" role="banner">
        <div class="container site-navigation site-navbar-top">
            <b-navbar toggleable type="light" variant="">
                <b-navbar-toggle target="nav_text_collapse"></b-navbar-toggle>
                <b-navbar-brand>The Gentle Baker</b-navbar-brand>
                <b-collapse is-nav id="nav_text_collapse">
                    <b-navbar-nav class="ml-auto site-menu">
                        <b-nav-item to="/">Home</b-nav-item>
                        <b-nav-item to="/about">About</b-nav-item>
                        <b-nav-item to="/products">Products</b-nav-item>
                        <b-nav-item to="/cart">
                            <span class="icon icon-shopping_cart"></span>
                            <span class="count">{{itemsInCart}}</span>                       
                        </b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>

    </header>

</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    itemsInCart() {
      let cart = this.$store.getters.cartProducts;
      return cart.reduce((accum, item) => accum + item.quantity, 0);
    }
  }
};
</script>
