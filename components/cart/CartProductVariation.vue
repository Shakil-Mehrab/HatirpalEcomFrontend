<template>
  <tr>
    <td class="text-center">
      <a href="#" @click.prevent="destroy(productVariation.id)"
        ><i class="fas fa-times"></i
      ></a>
    </td>
    <td class="text-center">
      <img :src="productVariation.thumbnail" alt="" width="50px" />
    </td>
    <td class="text-center">
      <h6>
        <nuxt-link :to="link(productVariation)">{{ productVariation.name }}</nuxt-link>
      </h6>
    </td>

    <td class="text-center">
      <select v-model="size_id" @change.prevent="size()">
        <option value="">Select One</option>
        <option
          :value="size.id"
          v-for="size in productVariation.sizes"
          :key="size.id"
        >
          <!-- :selected="size.id == productVariation.size_id" -->

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
import { mapActions } from "vuex";
export default {
  data(){
    return{
      size_id:this.productVariation.size_id
    }
  },
  computed: {
    quantity: {
      get() {
        return this.productVariation.quantity;
      },
      set(quantity) {
        this.update({
          productVariationId: this.productVariation.id,
          size_id: this.productVariation.size_id,
          quantity,
        });
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
    size() {
      if(this.size_id){
      this.update({
          productVariationId: this.productVariation.id,
          size_id: this.size_id,
          quantity:this.productVariation.quantity,
        });
      }
    },
    ...mapActions({
      destroy: "cart/destroy",
      update: "cart/update",
    }),
    link(arg) {
      return {
        name: "product-slug",
        params: {
          slug: arg.product_slug,
        },
      };
    },
  },
};
</script>
