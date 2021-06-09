<template>
  <div class="container mx-auto">
    <div class="row bg-white">
      <h6 class="mt-2"><strong>Cart</strong></h6>
      <Progressbar nameOfPage="checkout" />
      <CartSumury />
      <div class="mb-4 shopping_checkout">
        <a href="/" class="brand_button"
          >Continue Shopping</a
        >
        <a
          href="/cart/checkout"
          class="brand_button"
          >Go to Checkout</a
        >
      </div>
    </div>
    <br>
  </div>
</template>
<script>
import Progressbar from "@/components/cart/Progressbar";
import CartSumury from "@/components/cart/CartSumury";

export default {
  components: {
    Progressbar,
    CartSumury,
  },
};
</script>
