<template>
  <div>
    <div class="relative">
      <client-only>
        <zoom-on-hover
          v-if="idOfImage.thumbnail"
          :img-normal="idOfImage.thumbnail"
          :img-zoom="idOfImage.thumbnail"
          :scale="2.5"
          :disabled="false"
          @loaded="onload"
          @resized="onresize"
        >
        </zoom-on-hover>
      </client-only>
      <div class="" align="center" v-if="data.productImages.length">
        <span class="">{{ serial }}/{{ data.productImages.length }}</span>
      </div>
    </div>
    <br />
    <div v-if="data.productImages.length">
      <client-only>
        <carousel
          class="product-detail-slider"
          :perPageCustom="[[200, 5]]"
          :loop="true"
          :navigationEnabled="true"
        >
          <slide
            v-for="(productImage, index) in data.productImages"
            :key="index"
          >
            <div class="mx-1">
              <a href="#" @mouseover="selectImage(productImage, index + 1)">
                <img :src="productImage.thumbnail" width="100%" alt="" />
              </a>
            </div>
          </slide>
        </carousel>
      </client-only>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      idOfImage: this.data,
      serial: 1
    };
  },
  props: {
    data: {
      required: true,
      type: Object
    }
  },
  methods: {
    selectImage(img, serial) {
      this.idOfImage = img;
      this.serial = serial;
    },
    onload() {},
    onresize() {}
  }
};
</script>
<style>
.product-detail-slider .VueCarousel-navigation {
  position: absolute;
  width: 100%;
  justify-content: space-between;
  top: 45%;
  opacity: 1;
  transition: opacity 0.25s ease-in-out;
}
.product-detail-slider .VueCarousel-navigation-button {
  color: #775ba7;
}
.product-detail-slider .VueCarousel-navigation-prev {
  border: none !important;
  left: 24px !important;
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
}
.product-detail-slider .VueCarousel-navigation-next {
  border: none !important;
  right: 24px;
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
}
.product-detail-slider .VueCarousel-navigation-button[data-v-453ad8cd]:focus {
  outline: none;
}
.product-detail-slider .VueCarousel-dot-container {
  display: none !important;
}
</style>
