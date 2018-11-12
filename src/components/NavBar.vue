<template>
    <b-navbar toggleable="md" type="light" fixed="top">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand to="/">NavBar</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-navbar-nav>
                <b-nav-item to="/">Home</b-nav-item>
                <b-nav-item to="/about">About</b-nav-item>
                <b-nav-item to="/products">Store</b-nav-item>
                <b-nav-item to="/cart">Cart ({{itemsInCart}})</b-nav-item>
                </b-navbar-nav>

            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	computed: {
		itemsInCart(){
			let cart = this.$store.getters.cartProducts;
			return cart.reduce((accum, item) => accum + item.quantity, 0)
		}
	}
}
</script>