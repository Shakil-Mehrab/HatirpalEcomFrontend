<template>
  <fragment>
    <div class="col-md-12">
      <div class="overflow-scroll cart">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th class="text-center">Remove</th>
              <th class="text-center">Image</th>
              <th class="text-center">Name</th>
              <th class="text-center">Size</th>
              <th class="text-center">Quantity</th>
              <th class="text-center">Price (BDT)</th>
            </tr>
          </thead>
          <tbody>
            <!-- {{products}} -->
            <template v-for="(product, index) in products">
              <CartProductVariation :key="index" :product="product" />
            </template>
          </tbody>
        </table>
      </div>
    </div>
    <div class="col-md-4 offset-md-8">
      <div class="my-2">
        <table class="table table-bordered">
          <tbody>
            <tr>
              <td class="text-center">Sub Total</td>
              <td class="text-center">{{ subtotal }}</td>
            </tr>
            <!-- <tr>
              <td class="text-center">Tax</td>
              <td class="text-center">4000</td>
            </tr> -->
            <!-- <tr>
              <td class="text-center">Grand Total</td>
              <td class="text-center">{{total}}</td>
            </tr> -->
            <slot name="rows" />
          </tbody>
        </table>
      </div>
    </div>
  </fragment>
</template>
<script>
import { mapGetters } from "vuex";
export default {
 
  computed: {
    ...mapGetters({
      products: "cart/products",
      subtotal: "cart/subtotal",
      total: "cart/total",
    }),
  },
};
</script>
