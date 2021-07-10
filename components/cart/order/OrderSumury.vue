<template>
  <fragment>
    <tr>
      <td class="text-center">{{ order.order_id }}</td>
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
        <div class="btn btn-sm" :class="'status_' + order.status" v-if="order.status!='pending'">
          {{ order.status }}
        </div>
        <div class="btn btn-danger btn-sm" v-else>Please wait for confirmation</div>
      </td>
       <td class="text-center">
        <template>{{order.payment_method}}</template>
      </td>
      <td class="text-center">
        <template>{{order.payment_id}}</template>
      </td>
      <td class="text-center">
        <template v-if="order.payment_status=='pending'"><nuxt-link :to="{name:'payment-slug',params:{slug:order.slug}}" class="btn btn-info btn-sm">Pay now</nuxt-link></template>
        <template v-else><span class="btn btn-success btn-sm">{{order.payment_status}}</span> </template>

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
