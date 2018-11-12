<template>
  <div>
    <h1 class="title">Store</h1>

    <div v-for="product in products" track-by="id">
        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">{{product.name}}</h2>
            <h5>${{product.price}}</h5>
            <p class="lead">{{product.description}}</p>
            <b-button @click='addToCart(product)' variant="primary">Add to Cart</b-button>
          </div>
          <div class="col-md-5">
            <img class="featurette-image img-fluid mx-auto" src="/static/images/products/cake-1.jpg" alt="Generic placeholder image">
          </div>
        </div>

        <hr class="featurette-divider">
    </div>
  </div>

</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'app',
  computed: mapGetters({
    products: 'allProducts',
    length: 'getNumberOfProducts'
  }),
  methods: mapActions([
    'addToCart'
  ])
}
</script>