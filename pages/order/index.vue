<template>
  <div class="container">
    <div class="row bg-white my-3">
      <div class="col-md-12">
        <table class="table table-hover" v-if="orders.length">
          <thead>
            <tr>
              <th class="text-center">Order Id</th>
              <th class="text-center">Order Created</th>
              <th class="">Products</th>
              <th class="text-center">Total</th>
              <th class="text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            <OrderSumury v-for="order in orders" :key="order.id" :order="order"/>
          </tbody>
        </table>
        <div class="text-center" v-else>
            No Order
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import OrderSumury from "@/components/cart/order/OrderSumury";
export default {
  data() {
    return {
      orders: [],
    };
  },
  components: {
    OrderSumury,
  },
  async asyncData({ app }) {
    let response = await app.$axios.$get("api/order");
    return {
      orders: response.data,
    };
  },
};
</script>

