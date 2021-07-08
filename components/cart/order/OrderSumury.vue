<template>
  <fragment>
    <tr>
      <td class="text-center">{{ order.id }}</td>
      <td class="text-center">{{ order.created_at_humans }}</td>
      <td class="">
        <div v-for="product in order.products" :key="product.id" class="my-2">
          <img :src="product.thumbnail" alt="order_image" width="30px" />
          {{ product.name }} (Qty : {{ product.qty }}) (size :
          {{ product.size_id }})
        </div>
      </td>
      <td class="text-center">{{ order.subtotal }}</td>
      <td class="text-center">{{ order.total }}</td>
      <td class="text-center">
        <div class="btn btn-sm" :class="'status_' + order.status">
          {{ order.status }}
        </div>
      </td>
    </tr>
    <Status :order="order" />
  </fragment>
</template>
<script>
import Status from "@/components/cart/order/Status";
export default {
  
  props: {
    order: {
      required: true,
      type: Object,
    },
  },
  components: {
    Status
  },
};
</script>
