<template>
  <div class="container mx-auto">
    <div class="row bg-white">
      <h6 class="mt-2"><strong>Checkout</strong></h6>
      {{ errors }}
      <Progressbar nameOfPage="checkout" />
      <div class="col-md-9">
        <article class="bg-white">
          <h6><strong>Ship to</strong></h6>
          <ShippingAddress :addresses="addresses" v-model="form.address_id" />
          <span class="help-block" v-if="errors">
            <strong style="color: red">{{ errors["address_id"] }}</strong>
          </span>
        </article>
        <hr />
        <!-- <article class="bg-white">
          <h6><strong>Payment Method</strong></h6>
          <PaymentMethod v-model="form.payment_method"/>
        </article>
        <hr /> -->

        <div class="message row">
          <h6><strong>Shipping Method</strong></h6>
          <div class="col-md-6">
            <select class="form-control" v-model="form.shipping_method">
              <option value="">Select One</option>
              <option
                :value="shippingway.name"
                v-for="shippingway in shippingWays"
                :key="shippingway.id"
              >
                {{ shippingway.name }}
              </option>
            </select>
            <span class="help-block" v-if="errors">
              <strong style="color: red">{{
                errors["shipping_method"]
              }}</strong>
            </span>
          </div>
          <div
            class="col-md-6 text-danger"
            v-if="
              form.shipping_method == 'Flight' ||
              form.shipping_method == 'Ship' ||
              form.shipping_method == 'Pickup Van' ||
              form.shipping_method == 'Truck'
            "
          >
            <h6>
              Extra Charge Required.
              <strong style="white-space: nowrap"
                >Contact Us: +8801400560808</strong
              >
            </h6>
          </div>
        </div>
        <hr />
        <article v-if="products.length">
          <h6><strong>Cart Sumury</strong></h6>
          <CartSumury>
            <template slot="rows" v-if="shippingMethodId">
              <tr>
                <td class="text-center">Shipping Cost</td>
                <td class="text-center">{{ shipping.expense }}</td>
              </tr>
              <tr>
                <td class="text-center">Total</td>
                <td class="text-center">{{ total }}</td>
              </tr>
            </template>
          </CartSumury>
        </article>
        <article class="message mb-2">
          <button
            class="btn btn-success btn-sm form-control"
            :disabled="empty || submitting"
            @click.prevent="order"
          >
            Palce Order
          </button>
        </article>
      </div>
      <div class="col-md-3">
        <button
          class="btn btn-success btn-sm form-control"
          :disabled="empty || submitting"
          @click.prevent="order"
        >
          Palce Order
        </button>
      </div>
    </div>
    <br />
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Progressbar from "@/components/cart/Progressbar";
import ShippingAddress from "@/components/cart/Address/ShippingAddress";
import CartSumury from "@/components/cart/CartSumury";
import PaymentMethod from "@/components/cart/payment/PaymentMethod";

export default {
  data() {
    return {
      submitting: false,
      addresses: [],
      shippingMethods: [],
      paymentMethods: [],
      shippingWays: [],
      errors: "",
      form: {
        address_id: null,
        payment_method: "Hatirpal Pay",
        shipping_method: "",
      },
    };
  },
  middleware: ["redirectIfGuest"],

  watch: {
    "form.address_id"(addressId) {
      this.getShippingMethodsForAddress(addressId).then(() => {
        this.setShipping(this.shippingMethods); //previous this.shippingMethods[0] by shakil
      });
    },
    shippingMethodId() {
      this.getCart();
    },
  },
  components: {
    Progressbar,
    CartSumury,
    ShippingAddress,
    PaymentMethod,
  },
  computed: {
    ...mapGetters({
      total: "cart/total",
      products: "cart/products",
      empty: "cart/empty",
      shipping: "cart/shipping",
    }),
    shippingMethodId: {
      get() {
        return this.shipping ? this.shipping.id : "";
      },
      set(shippingMethodId) {
        this.setShipping(
          this.shippingMethods.find((s) => s.id === shippingMethodId)
        );
      },
    },
  },
  methods: {
    ...mapActions({
      setShipping: "cart/setShipping",
      getCart: "cart/getCart",
      // flash: "alert/flash"
    }),
    message() {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
      });
      Toast.fire({
        icon: "error",
        title: "Something wrong!",
      });
    },
    async order() {
      this.submitting = true;
      console.log(this.form);
      try {
        await this.$axios.$post("api/order", {
          ...this.form,
        });
        
        await this.getCart();
        this.$router.replace({
          name: "order",
        });
      } catch (e) {
        // this.flash(e.response.data.message);
        this.errors = e.response.data.errors;
        this.message();
      }
      this.submitting = false;
    },
    async getShippingMethodsForAddress(addressId) {
      let response = await this.$axios.$get(
        `api/address/${addressId}/shipping`
      );
      this.shippingMethods = response.data; //comment by shakil for expense
      return response;
    },
  },
  async asyncData({ app }) {
    let address = await app.$axios.$get("api/address");
    let shippingWays = await app.$axios.$get("api/shipping/method");
    return {
      addresses: address.data,
      shippingWays: shippingWays.data,
    };
  },
};
</script>

