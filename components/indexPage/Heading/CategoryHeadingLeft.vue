<template>
  <div
    class="col-md-3 left_heading"
  >
    <img
      src="https://img.alicdn.com/tfs/TB1J5jev7voK1RjSZPfXXXPKFXa-300-320.png"
      alt=""
      width="100%"
      height="100%"
    />

    <div class="left_category_heading">
      <h5>{{title}}</h5>
      <a href="" class="brand_round_button brand_shadow">
        See All Products
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          style="width: 14px"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          /></svg
      ></a>
    </div>
  </div>
</template>
<script>

export default {
  props:{
    title:{
      required:false,
      type:String,
      default:"Electronics"
    }
  }
}

</script>
