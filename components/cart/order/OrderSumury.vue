<template>
  <fragment>
    <tr>
      <td class="text-center">{{ order.id }}</td>
      <td class="text-center">{{ order.created_at_humans }}</td>
      <td class="">
        <div v-for="product in order.products" :key="product.id" class="my-2">
          <img :src="product.thumbnail" alt="order_image" width="30px" />
          {{ product.name }} (Qty : {{ product.qty }}) (size :
          {{ product.size }})
        </div>
      </td>
      <td class="text-center">{{ order.total }}</td>
      <td class="text-center">
         <component :is="order.status" :order="order"/>
      </td>
    </tr>
  </fragment>
</template>
<script>
import OrderStatusPaymentFailed from "@/components/cart/order/Status/Status-payment_failed";
import OrderStatusPending from "@/components/cart/order/Status/Status-pending";
import OrderStatusProcessing from "@/components/cart/order/Status/Status-processing";
import OrderStatusCompleted from "@/components/cart/order/Status/Status-completed";

export default {
  props: {
    order: {
      required: true,
      type: Object,
    },
  },
  components: {
    payment_failed: OrderStatusPaymentFailed,
    pending: OrderStatusPending,
    processing: OrderStatusProcessing,
    completed: OrderStatusCompleted,
  },
};
</script>
