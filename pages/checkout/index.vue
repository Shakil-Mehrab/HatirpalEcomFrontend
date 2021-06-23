<template>
  <div class="container mx-auto">
    <div class="row bg-white">
      <h6 class="mt-2"><strong>Checkout</strong></h6>
      <Progressbar nameOfPage="checkout" />
      <div class="col-md-9">
        <article class="bg-white">
          <h6><strong>Ship to</strong></h6>
          <ShippingAddress 
          :addresses="addresses"
            v-model="form.address_id"
          />
        </article>
        <hr />
        <article class="bg-white">
          <h6><strong>Payment Method</strong></h6>
          <PaymentMethod />
        </article>
        <hr />

        <article class="message">
          <h6><strong>Shipping Method</strong></h6>
          <div class="col-md-6">
            <select class="form-control">
              <option value="">Select One</option>
              <option value="1">Bkash (20 BDT)</option>
            </select>
          </div>
        </article>
        <article v-if="products.length">
          <h6><strong>Cart Sumury</strong></h6>
          <CartSumury />
        </article>
        <article class="message mb-2">
          <button
            class="btn btn-success btn-sm form-control"
            @click.prevent="order"
          >
            Palce Order
          </button>
        </article>
      </div>
      <div class="col-md-3">
        <button
          class="btn btn-success btn-sm form-control"
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
import {mapGetters,mapActions} from 'vuex'
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
      form: {
        address_id: null,
        payment_method_id: null,
      },
    };
  },
  middleware:[
    'redirectIfGuest'
  ],

  watch: {
    // "form.address_id"(addressId) {
    //   this.getShippingMethodsForAddress(addressId).then(() => {
    //     this.setShipping(this.shippingMethods[0]); //cart.js a setShipping parameter chay.ekhane default etkta pathalam
    //   });
    // },
    // shippingMethodId() {
    //   this.getCart();
    // }
  },
  components: {
    Progressbar,
    CartSumury,
    ShippingAddress,
    PaymentMethod
  },
  computed: {
    ...mapGetters({
      total:'cart/total',
      products:'cart/products',
      empty:'cart/empty',
      shipping:'cart/shipping'
    }),
    shippingMethodId:{ //eta first call hobe.call hobe + shippingMethodId=shipping.id o dhore rakhbe.cz eta v-model+method
      get(){
        // return this.shipping? this.shipping.id : ''
      },
      set(shippingMethodId){
        // this.setShipping(this.shippingMethods.find(s=>s.id===shippingMethodId))
        //eta na deya porjonto upore get(){ return this.shipping=null}/eta mapActions a setShipping call korche
      }
    }
  },
  methods: {
    ...mapActions({
      setShipping: "cart/setShipping",
      getCart: "cart/getCart",
      // flash: "alert/flash"
    }),
    // async order() {
    //   this.submitting = true;
    //   console.log(this.form.payment_method_id);
    //   try {
    //     await this.$axios.$post("orders", {
    //       ...this.form,
    //       shipping_method_id: this.shippingMethodId
    //     });
    //     await this.getCart(); //cart refresh
    //     this.$router.replace({
    //       //go to order page
    //       name: "orders"
    //     });
    //   } catch (e) {
    //     this.flash(e.response.data.message);
    //     this.getCart();
    //   }
    //   this.submitting = false;
    // },
    // async getShippingMethodsForAddress(addressId) {
    //   let response = await this.$axios.$get(`addresses/${addressId}/shipping`);
    //   this.shippingMethods = response.data; //adress component help korlo
    //   return response;
    // }
  },
  async asyncData({ app }) {
    let address = await app.$axios.$get("api/address");
    // let paymentMethods = await app.$axios.$get("payment-methods");

    return {
      addresses: address.data,
      // paymentMethods: paymentMethods.data
    };
  }
};
</script>

