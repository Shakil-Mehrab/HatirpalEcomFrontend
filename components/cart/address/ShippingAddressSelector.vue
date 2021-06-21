<template>
  <div>
    <!-- <h6><strong>Select Shipping Address</strong></h6> -->
    <!-- :class="{'selected_address' : address.id===selectedAddress.id}" -->
    <div class="my-2 all_address" v-for="address in addresses" :key="address.id">
      <div class="mb-2">
        <ul :class="{'selected_address' : address.id===selectedAddress.id}">
          <li>{{address.country}}</li>
          <li>{{address.division}}</li>
          <li>{{address.district}}</li>
          <li>{{address.place}}</li>
          <li>{{address.address}}</li>
        </ul>
      </div>
      <div class="selector">
        <a
          href=""
          class="brand_button"
          @click.prevent="$emit('click', address)"
        >
          Ship Here
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    addresses:{
      required:true,
      type:Array
    },
    selectedAddress:{
      required:true,
      type:Object,
    }
  }
}
</script>

