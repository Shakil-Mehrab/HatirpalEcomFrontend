<template>
  <div>
    <div class="progress_bar my-2"
      v-if="nameOfPage == 'cart'"
    >
      <div class="col-4 progress1"></div>
    </div>
    <div
      class="progress_bar checkout my-2"
      v-else
    >
      <div class="col-4 progress1"></div>
      <div class="col-4 progress2"></div>
    </div>
    <!-- <div class="border-4 border-gray-400 my-2 rounded-md flex">
      <div class="border w-1/4 border-red-300"></div>
      <div class="border w-1/4 border-customcolor-300"></div>
      <div class="border" :class="widthBorderColor"></div>
    </div>
    <div class="border-4 border-gray-400 my-2 rounded-md flex">
      <div class="border w-1/4 border-red-300"></div>
      <div class="border w-1/4 border-customcolor-300"></div>
      <div class="border w-1/4 border-blue-400"></div>
      <div class="border" :class="widthBorderColor"></div>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    nameOfPage: {
      required: false,
      type: String,
      default: "cart"
    }
  },
  methods: {}
};
</script>
