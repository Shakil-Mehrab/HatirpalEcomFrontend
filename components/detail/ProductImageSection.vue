<template>
  <div>
    <div class="relative">
      <!-- <zoom-on-hover
        v-if="idOfImage"
        :img-normal="idOfImage"
        :img-zoom="idOfImage"
        :scale="2.5"
        :disabled="false"
        @loaded="onload"
        @resized="onresize"
      >
      </zoom-on-hover> -->
      <div class="absolute bottom-0 left-0 right-0" align="center">
        <!-- <span class="text-sm text-customcolor-300">{{ serial }}/7</span> -->
      </div>
    </div>
    <br />
    <div>
      <client-only>
        <carousel
          class="product-detail-slider"
          :perPageCustom="[[200, 5]]"
          :loop="true"
          :navigationEnabled="true"
        >
          <slide v-for="n in 10" :key="n">
            <div class="mx-1">
              <a href="#" @mouseover="selectImage(n,1)">
                <img :src="idOfImage" width="100%" alt="" />
              </a>
            </div>
          </slide>
        </carousel>
      </client-only>
    </div>
    <!-- <div v-else class="text-center">
      No variation
    </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      idOfImage: 'https://img.alicdn.com/tfs/TB1J5jev7voK1RjSZPfXXXPKFXa-300-320.png',
      serial: 1
    };
  },
  props: {
    // product: {
    //   required: false,
    //   type: Object
    // }
  },
  methods: {
    selectImage(img, serial) {
      this.idOfImage = img;
      this.serial = serial;
    }
  }
}
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
  left: 24px!important;
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
