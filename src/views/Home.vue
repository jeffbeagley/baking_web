<template>
    <div class="home">

        <div class="site-blocks-cover" style="background-image: url('/static/images/hero_1.jpg');">
            <div class="container">
                <div class="row align-items-start align-items-md-center justify-content-end">
                <div class="col-md-5 text-center text-md-left pt-5 pt-md-0">
                    <h1 class="mb-2">Lorem Ipsum</h1>
                    <div class="intro-text text-center text-md-left">
                    <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla. </p>
                    <router-link to="/products">
                        <button class="btn btn-primary btn-sm">Shop Now</button>
                    </router-link>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div class="site-section site-section-sm site-blocks-1">
            <div class="container">
                <div class="row">
                <div class="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4">
                    <div class="icon mr-4 align-self-start">
                    <span class="icon-truck"></span>
                    </div>
                    <div class="text">
                    <h2 class="text-uppercase">Free Shipping</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4">
                    <div class="icon mr-4 align-self-start">
                    <span class="icon-refresh2"></span>
                    </div>
                    <div class="text">
                    <h2 class="text-uppercase">Free Returns</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4">
                    <div class="icon mr-4 align-self-start">
                    <span class="icon-help"></span>
                    </div>
                    <div class="text">
                    <h2 class="text-uppercase">Customer Support</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  name: "home"
};
</script>
