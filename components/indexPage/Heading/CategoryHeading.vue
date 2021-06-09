<template>
    <div class="col-md-12 px-3 category_heading">
      <h6  class="brand_button mt-2" v-if="title">
        {{ title }}
        
      </h6>
      <div class="see_all">
        <a href="" class="brand_button"> See All Products <svg
          xmlns="http://www.w3.org/2000/svg"
          style="width:14px"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg></a>
      </div>
    </div>
</template>
<script>
export default {
  props: {
    title: {
      required: false,
      type: String,
      default: "All Categories",
    },
  },
};
</script>
