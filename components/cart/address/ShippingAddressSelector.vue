<template>
  <div>
    <h6><strong>Select Shipping Address</strong></h6>
    <div class="my-2 all_address" v-for="n in 10" :key="n">
      <div class="mb-2">
        Nayakandi<br />
        Nayakandi ,Jalirpur Nayakandi ,Jalirpur<br />
        Gopalgonj<br />
        7791<br />
        Banglasesh
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
export default {};
</script>
