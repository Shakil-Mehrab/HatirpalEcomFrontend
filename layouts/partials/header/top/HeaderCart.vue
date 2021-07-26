<template>
  <div class="mt-2">
    <div class="text-center">
      <img
        v-if="product.thumbnail"
        v-lazy="product.thumbnail"
        :alt="product.name"
        width="50%"
      />
    </div>
    <h6 class="mt-2 text-center">
      {{ product.full_name }}
    </h6>

    <ul class="my-2">
      <li>
        <a class="remove mx-1" href="#" @click.prevent="deleteCart(product.cart_id)"
          ><i class="fas fa-times"></i> Remove
        </a>
      </li>
      <li>
        <input
          class="cart_qty_ipnut"
          type="number"
          :min="product.minimum_order"
          :step="product.minimum_order"
          v-model="quantity"
        />
      </li>
      <li class="mx-2">
        <select v-model="size_id" @change.prevent="size()">
          <option value="">Select One</option>
          <option :value="size.id" v-for="size in product.sizes" :key="size.id">
            {{ size.size }}
          </option>
        </select>
      </li>
      <li class="mx-2">Price: {{ product.total }} BDT</li>
    </ul>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      size_id: this.product.size_id,
    };
  },
  props: {
    product: {
      required: true,
      type: Object,
    },
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
