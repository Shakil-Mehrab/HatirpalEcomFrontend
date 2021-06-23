<template>
  <div class="container mx-auto">
    <div class="row bg-white">
      <h6 class="mt-2"><strong>Cart</strong></h6>
      <Progressbar nameOfPage="cart" />
      <CartSumury v-if="products.length" />
      <div class="col-md-12" v-else>
        <p>Your Cart is Empty</p>
      </div>
      <div class="mb-4 shopping_checkout">
        <nuxt-link :to="{ name: 'index' }" v-if="!empty" class="brand_button"
          >Continue Shopping</nuxt-link
        >
        <nuxt-link :to="{ name: 'checkout' }" v-if="!empty" class="brand_button"
          >Checkout</nuxt-link
        >
      </div>
    </div>
    <br />
  </div>
</template>
<script>
import { mapGetters } from "vuex";

import Progressbar from "@/components/cart/Progressbar";
import CartSumury from "@/components/cart/CartSumury";
export default {
  components: {
    Progressbar,
    CartSumury,
  },
  middleware: ["redirectIfGuest"],
  computed: {
    ...mapGetters({
      empty: "cart/empty",
      products: "cart/products",
    }),
  },
};
</script>
