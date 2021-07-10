<template>
  <div class="container">
    <div class="row bg-white my-3">
      <h6 class="mt-2"><strong>Order</strong></h6>
      <div class="col-md-12 order">
        {{orders}}
        <table class="table table-hover table-bordered" >
          <!-- v-if="orders.length" -->
          <thead>
            <tr>
              <th class="text-center">Order Id</th>
              <th class="text-center">Order Created</th>
              <th class="">Products</th>
              <th class="text-center">Subtotal</th>
              <th class="text-center">Total</th>
              <th class="text-center">Order Status</th>
              <th class="text-center">Payment Method</th>
              <th class="text-center">Payment Id</th>
              <th class="text-center">Payment Status</th>
            </tr>
          </thead>
          <tbody>
            
            <OrderSumury
              v-for="order in orders"
              :key="order.id"
              :order="order"
            />
          </tbody>
        </table>
        <div class="text-center mb-4">
          <h6>No Order</h6>
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
      orders: []
    };
  },
  middleware: ["redirectIfGuest"],
  components: {
    OrderSumury
  },
  async asyncData({ app }) {
    try {
      let response = await app.$axios.$get("api/order");
      return {
        orders: response.data
      };
    } catch (e) {
      console.log(e.response.data);
    }
  }
};
</script>
