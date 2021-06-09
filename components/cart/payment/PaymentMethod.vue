<template>
  <div class="row">
    <template v-if="selecting">
      <PaymentMethodSelector
        :payment-methods="paymentMethods"
        :selected-payment-method="selectedPaymentMethod"
        @click="paymentMethodSelected"
      />
    </template>
    <template v-else-if="creating">
      <PaymentMethodCreator @cancel="creating = false" @added="created" />
    </template>
    <template v-else>
      <h6><img src="@/assets/images/bkash.png" width="25px" alt="" /> Bkash</h6>
      <div>
        <a href="" class="brand_button" @click.prevent="selecting = true"
          >Change Payment Method</a
        >
        <a href="" class="brand_button" @click.prevent="creating = true"
          >Add a Payment Method</a
        >
      </div>
    </template>
  </div>
</template>
<script>
import PaymentMethodSelector from "@/components/cart/payment/PaymentMethodSelector";
import PaymentMethodCreator from "@/components/cart/payment/PaymentMethodCreator";

export default {
  data() {
    return {
      selecting: false,
      creating: false,
      localPaymentMethods: this.paymentMethods,
      selectedPaymentMethod: null,
    };
  },
  watch: {
    selectedPaymentMethod(paymentMethod) {
      ///checkout-index page a address_id dynamic change er jonno eta
      this.$emit("input", paymentMethod.id); //checkout-index page er v-model **input** listen kore
    },
  },
  components: {
    PaymentMethodSelector,
    PaymentMethodCreator
  },
  props: {
    // paymentMethods: {
    //   required: true,
    //   type: Array
    // }
  },
  computed: {
    defaultPaymentMethod() {
      // return this.localAddresses.find((address)=>{
      //   return address.default ===true;
      // })
      return this.localPaymentMethods.find((p) => p.default === 1); //this.localAddresses=addresses a=address jata database theke asche.default adress table theke
    },
  },
  methods: {
    paymentMethodSelected(paymentMethod) {
      this.switchPaymentMethod(paymentMethod);
      this.selecting = false;
    },
    switchPaymentMethod(paymentMethod) {
      this.selectedPaymentMethod = paymentMethod;
    },
    created(paymentMethod) {
      //ShippingAddressCreator theke response.data meand address niye asche
      this.localPaymentMethods.push(paymentMethod);
      this.creating = false;
      this.switchPaymentMethod(paymentMethod);
    },
  },
  created() {
    //created age.created switch  call krche
    // if (this.paymentMethods.length) {
    //   this.switchPaymentMethod(this.defaultPaymentMethod);
    // }
  },
};
</script>
