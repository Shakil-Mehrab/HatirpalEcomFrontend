<template>
  <div class="row">
    <template v-if="selecting">
      <PaymentMethodSelector
        @click="paymentMethodSelected"
        :selected-payment-method="selectedPaymentMethod"
      />
        <!-- :payment-methods="paymentMethods" -->
    </template>
    <!-- <template v-else-if="creating">
      <PaymentMethodCreator @cancel="creating = false" @added="created" />
    </template> -->
    <template v-else>
      <h6><img src="@/assets/images/bkash.png" width="25px" alt="" /> Bkash</h6>
      <div>
        <a href="" class="brand_button" @click.prevent="selecting = true"
          >Change Payment Method</a
        >
        <!-- <a href="" class="brand_button" @click.prevent="creating = true"
          >Add a Payment Method</a
        > -->
      </div>
    </template>
  </div>
</template>
<script>
import PaymentMethodSelector from "@/components/cart/payment/PaymentMethodSelector";
// import PaymentMethodCreator from "@/components/cart/payment/PaymentMethodCreator";

export default {
  data() {
    return {
      selecting: false,
      // creating: false,
      // localPaymentMethods: this.paymentMethods,
      selectedPaymentMethod: null,
    };
  },
  watch: {
    selectedPaymentMethod(paymentMethod) {
      this.$emit("input", paymentMethod);
    },
  },
  components: {
    PaymentMethodSelector,
    // PaymentMethodCreator
  },
  props: {
    // paymentMethods: {
    //   required: true,
    //   type: Array
    // }
  },
  computed: {
    defaultPaymentMethod() {
      // return this.localPaymentMethods.find((p) => p.default === 1); 
      return "bkash"
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
    // created(paymentMethod) {
    //   this.localPaymentMethods.push(paymentMethod);
    //   this.creating = false;
    //   this.switchPaymentMethod(paymentMethod);
    // },
  },
  created() {
    // if (this.paymentMethods.length) {
      this.switchPaymentMethod(this.defaultPaymentMethod);
    // }
  },
};
</script>
