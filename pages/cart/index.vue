<template>
  <div class="container mx-auto">
    <div class="row bg-white">
      <h6 class="mt-2"><strong>Cart</strong></h6>
      <Progressbar nameOfPage="cart" v-if="!empty" />
      <template v-if="!empty">
        <CartSumury />
      </template>
      <template v-else>
        <div class="text-center my-4">
          <h6>Your Cart is Empty</h6>
        </div>
      </template>
      <div class="mb-4 shopping_checkout">
        <nuxt-link :to="{ name: 'index' }" v-if="!empty" class="brand_button p-1"
          >Continue Shopping</nuxt-link
        >
        <nuxt-link :to="{ name: 'checkout' }" v-if="!empty" class="brand_button p-1"
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
    }),
  },
};
</script>
