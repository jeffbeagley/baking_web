<template>
  <div class="cart">
    <h1 class="title">Cart</h1>
    <p v-show="!products.length">
      <b-alert variant="info" show>Your cart is currently empty</b-alert>
      <router-link to="/products">Go shopping</router-link>
    </p>
    <table class="table is-striped" v-show="products.length">
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Edit</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in products" track-by="id">
            <td>{{ p.name }}</td>
            <td>${{ p.price }}</td>
            <td>{{ p.quantity }}</td>
            <td>
                <b-button variant="primary" @click='remove_item(p)'><font-awesome-icon icon="trash"/> Remove</b-button>
            </td>
          </tr>
          <tr>
            <td><b>Total:</b></td>
            <td><b>${{ total }}</b></td>
            <td><b>{{ totalQuantity }}</b></td>
            <td></td>
          </tr>
      </tbody>
    </table>
    <p>
        <b-button v-show="products.length" variant="primary" @click='checkout'> Checkout</b-button>
    </p>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      products: 'cartProducts'
    }),
    total () {
      return this.products.reduce((total, p) => {
        return total + p.price * p.quantity
      }, 0)
    },
    totalQuantity () {
      return this.products.reduce((quantity, p) => {
        return quantity + p.quantity
      }, 0)

    }
  },
  methods: mapActions([
    "remove_item",
    "checkout"
  ])
}
</script>