<template>
  <div class="shipping_address">
    <div v-if="selecting">
      <template v-if="addresses.length">
        <ShippingAddressSelector
          :addresses="addresses"
          :selectedAddress="selectedAddress"
          @click="addressSelected"
          @cancel="selecting = false"
        />
      </template>
    </div>
    <div v-else-if="creating">
      <ShippingAddressCreator @cancel="creating = false" @created="created" />
    </div>
    <div v-else>
      <ul v-if="selectedAddress">
        <li>{{ selectedAddress.country }}</li>
        <li>{{ selectedAddress.division }}</li>
        <li>{{ selectedAddress.district }}</li>
        <li>{{ selectedAddress.place }}</li>
        <li>{{ selectedAddress.address }}</li>
        <li>{{ selectedAddress.expense }}</li>
      </ul>
      <div class="my-2" >
        <a href="" class="brand_button" @click.prevent="selecting = true" v-if="addresses.length">
          Change Shipping Address</a
        >
        <a href="" class="brand_button" @click.prevent="creating = true"
          >Add an Address</a
        >
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
  props: {
    addresses: {
      required: true,
      type: Array,
    },
  },
  computed: {
    defaultAddress() {
      // return this.localAddresses.find((address)=>{
      //   return address.default ===true;
      // })
      if (this.localAddresses.find((a) => a.default === 1)) {
        return this.localAddresses.find((a) => a.default === 1);
      }
      return this.addresses[0]; //by shakil
    },
  },
  methods: {
    addressSelected(address) {
      this.switchAddress(address);
      this.selecting = false;
    },
    switchAddress(address) {
      this.selectedAddress = address;
    },
    created(address) {
      this.localAddresses.push(address);
      this.creating = false;
      this.switchAddress(address);
    },
  },
  created() {
    if (this.addresses.length) {
      this.switchAddress(this.defaultAddress);
    }
  },
};
</script>
