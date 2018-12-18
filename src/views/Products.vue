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
                            <a href="#" @click.stop="viewProduct(product)"><img :src='product.image_url' alt="Image placeholder" class="img-fluid"></a>
                        </figure>
                        <div class="block-4-text p-4">
                            <h3><a href="#" @click.stop="viewProduct(product)">{{product.name}}</a></h3>
                            <p class="mb-0">{{product.short_description}}</p>
                            <p class="text-primary font-weight-bold">${{product.price}}</p>
                            <button class="btn btn-primary btn-sm btn-block" @click.stop="viewProduct(product)">View Details</button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal ref="topic_info_modal" hide-footer hide-header size="lg">
      <div class="d-block">
        <b-container class="bv-example-row">
            <b-row class="text-center">
                <b-col lg="5">
                    <img :src='modal.product.image_url' slot="aside" alt="Media Aside" class="img-fluid" />

                </b-col>
                <b-col lg="7">
                    <h4>{{modal.product.name}}</h4>
                    <p class="text-left">
                        {{modal.product.description}}
                    </p>
                    <div v-if="modal.show_options">
                        <b-form>
                            <b-form-group v-for="option in modal.product.options" track-by="id" id="exampleInputGroup3"
                                :label=option.title
                                >
                                <b-form-select id="exampleInput3"
                                            :options="option.options"
                                            required
                                            >
                                </b-form-select>
                            </b-form-group>
                        </b-form>
                    </div>
                    <button class="btn btn-primary btn-sm btn-block" @click='addToCart(modal.product)'>Add item to Cart</button>
                </b-col>

            </b-row>
        </b-container>

      </div>
    </b-modal>
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
    data () {
        return {
            show: true,
            modal: {
                product: '',
                show_options: false
            }
        }
    },
    methods: {
        ...mapActions(['addToCart']),
        viewProduct (product) {
            let self = this

            self.modal.product = product
            self.modal.show_options = false

            if(typeof (product.options) !== 'undefined') {
                self.modal.show_options = true
            }

            self.$refs.topic_info_modal.show()
        }
    }
}
</script>
