<template>
  <tr>
    <td class="text-center">
      <a href="#" @click.prevent="deleteCart(product.cart_id)"
        ><i class="fas fa-times"></i
      ></a>
    </td>
    <td class="text-center">
      <img
        v-if="product.thumbnail"
        v-lazy="product.thumbnail"
        :alt="product.name"
        width="50px"
      />
    </td>
    <td class="text-center">
      <h6>
        <nuxt-link :to="link(product)">{{ product.name }}</nuxt-link>
      </h6>
    </td>

    <td class="text-center">
      <select v-model="size_id" @change.prevent="size()">
        <option value="">Select One</option>
        <option :value="size.id" v-for="size in product.sizes" :key="size.id">
          <!-- :selected="size.id == product.size_id" -->

          {{ size.size }}
        </option>
      </select>
    </td>
    <td class="text-center">
      <input
        type="number"
        :min="product.minimum_order"
        :step="product.minimum_order"
        v-model="quantity"
      />
    </td>
    <td class="text-center">{{ product.total }}</td>
  </tr>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      size_id: this.product.size_id,
    };
  },
  computed: {
    quantity: {
      get() {
        return this.product.quantity;
      },
      set(quantity) {
        this.update({
         
          cartId: this.product.cart_id,
          size_id: this.product.size_id,
          quantity,
        });
      },
    },
  },
  props: {
    product: {
      required: true,
      type: Object,
    },
  },
  methods: {
    size() {
      if (this.size_id) {
        this.update({
          cartId: this.product.cart_id,
          size_id: this.size_id,
          quantity: this.product.quantity,
        });
      }
    },
    message() {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
      });
      Toast.fire({
        icon: "success",
        title: "Product Revomes from Cart!",
      });
    },
    ...mapActions({
      destroy: "cart/destroy",
      update: "cart/update",
      getCart: "cart/getCart",
    }),
    async deleteCart(cartId) {
      try {
        this.destroy(cartId);
        this.message();
      } catch {
        console.log("something prodblem");
      }
    },
    link(arg) {
      return {
        name: "product-slug",
        params: {
          slug: arg.slug,
        },
      };
    },
  },
};
</script>
