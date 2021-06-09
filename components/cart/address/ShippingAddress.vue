<template>
  <div class="shipping_address">
    <div v-if="selecting">
      <ShippingAddressSelector @click="addressSelected" />
    </div>
    <div v-else-if="creating">
      <ShippingAddressCreator @cancel="creating = false" @created="created" />
    </div>
    <div v-else>
      <p>
        Nayakandi<br />
        Nayakandi ,Jalirpur<br />
        Gopalgonj<br />
        7791<br />
        Banglasesh
      </p>
      <div>
        <a href="" class="brand_button" @click.prevent="selecting = true">
          Change Shipping Address</a
        >
        <a href="" class="brand_button" @click.prevent="creating = true">Add an Address</a>
      </div>
    </div>
  </div>
</template>
<script>
import ShippingAddressSelector from "@/components/cart/address/ShippingAddressSelector";
import ShippingAddressCreator from "@/components/cart/address/ShippingAddressCreator";
export default {
  data() {
    return {
      selecting: false,
      creating: false,
      localAddresses: this.addresses,
      selectedAddress: null,
    };
  },
  watch: {
    selectedAddress(address) {
      this.$emit("input", address.id);
    },
  },
  components: {
    ShippingAddressSelector,
    ShippingAddressCreator,
  },
};
</script>
