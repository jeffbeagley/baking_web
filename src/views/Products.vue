<template>
  <div>
    <div class="bg-light py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-0"><router-link to="/"><a href="#">Home</a></router-link> <span class="mx-2 mb-0">/</span> <strong class="text-black">Products</strong></div>
        </div>
      </div>
    </div>  

    <div class="site-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-12">
            <div class="row mb-5">
                <div v-for="product in products" track-by="id" class="col-sm-6 col-lg-4 mb-4">
                    <div class="block-4 text-center border">
                        <figure class="block-4-image">
                            <a href="shop-single.html"><img src="static/images/cloth_1.jpg" alt="Image placeholder" class="img-fluid"></a>
                        </figure>
                        <div class="block-4-text p-4">
                            <h3><a href="shop-single.html">{{product.name}}</a></h3>
                            <p class="mb-0">{{product.description}}</p>
                            <p class="text-primary font-weight-bold">${{product.price}}</p>
                            <button class="btn btn-primary btn-sm btn-block" @click='addToCart(product)'>Add to Cart</button>

                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
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