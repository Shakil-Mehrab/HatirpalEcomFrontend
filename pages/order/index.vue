<template>
  <div class="container">
    <div class="row bg-white my-3">
      <h6 class="mt-2"><strong>Order</strong></h6>
      <div class="col-md-12 order">
        <div class="my-2 order_status_div">
          <div class="order_status bg-warning">Pendig</div>
          <div class="px-2 mx-2 border_between_status"></div>
          <div class="order_status bg-info">Process</div>
          <div class="px-2 mx-2 border_between_status"></div>
          <div class="order_status bg-success">Complete</div>
           <div class="px-2 mx-2 border_between_status"></div>
          <div class="order_status bg-danger">Failed</div>
        </div>
        <table class="table table-hover" v-if="orders.length">
          <thead>
            <tr>
              <th class="text-center">Order Id</th>
              <th class="text-center">Order Created</th>
              <th class="">Products</th>
              <th class="text-center">Subtotal</th>
              <th class="text-center">Total</th>
              <th class="text-center">Status</th>
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
        <div class="text-center mb-4" v-else>
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
