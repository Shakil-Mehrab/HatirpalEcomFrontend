<template>
  <tr>
    <td class="text-center">
      <i class="fas fa-times"></i>
    </td>
    <td class="text-center">
      <img :src="productVariation.thumbnail" alt="" width="50px" />
    </td>
    <td class="text-center">
      <h6>
        <a href="">{{ productVariation.name }}</a>
      </h6>
    </td>

    <td class="text-center">
      <select>
        <option value="">Select One</option>
        <option
          :value="size.id"
          v-for="size in productVariation.sizes"
          :key="size.id"
          :selected="size.id == productVariation.size_id"
        >
          {{ size.size }}
        </option>
      </select>
    </td>
    <td class="text-center">
      <input type="number" v-model="quantity" />
    </td>
    <td class="text-center">{{ productVariation.total }}</td>
  </tr>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  computed: {
    quantity: {
      get() {
        return this.productVariation.quantity;
      },
      set(quantity) {
        this.update({ productVariationId: this.productVariation.id, quantity });
      },
    },
  },
  props: {
    productVariation: {
      required: true,
      type: Object,
    },
  },
   methods: {
    ...mapActions({
      destroy:'cart/destroy',
      update:'cart/update'
    }),
  },
};
</script>
