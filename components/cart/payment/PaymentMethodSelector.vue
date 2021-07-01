<template>
  <div>
    <h6><strong>Select Payment Method</strong></h6>
    <div class="my-2 all_address" v-for="n in 10" :key="n">
      <div>
        <img src="@/assets/images/bkash.png" width="25px" alt="" /> Bkash
      </div>
      <div>
        <a
          href=""
          class="brand_button"
          @click.prevent="$emit('click', paymentMethod)"
          >Pay with this</a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
    paymentMethod:"bkash"
    }
  },
  props: {
    // paymentMethods: {
    //   required: true,
    //   type: Array,
    // },
    // selectedPaymentMethod: {
    //   required: true,
    //   type: Object,
    // },
  },
};
</script>
