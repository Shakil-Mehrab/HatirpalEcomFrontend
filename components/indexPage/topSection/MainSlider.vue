<template>
  <div
    v-observe-visibility="{
      callback: showProductsNow,
      once: true,
    }"
  >

    <client-only>
      <carousel
        class="home-slider"
        :per-page="1"
        :autoplay="true"
        :autoplayTimeout="5000"
        :loop="true"
        :navigationEnabled="true"
      >
        <slide v-for="data in datas" :key="data.id">
          <div class="mx-1">
            <img
              :src="data.thumbnail"
              width="100%"
              alt=""
            />
          </div>
        </slide>
      </carousel>
    </client-only>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoading: true,
      datas: [],
    };
  },
  methods: {
    async showProductsNow(visible) {
      if (visible) {
        await this.getProducts(this.endpoints);
      }
    },
    async getProducts(endpoint) {
      try {
        this.isLoading = true;
        let response = await this.$axios.$get('/api/slider');
        this.datas = response.data;
      } catch (e) {}
      this.isLoading = false;
    },
    link(arg) {
      return {
        name: "product-slug",
        params: {
          slug: arg.slug,
        },
      };
    },
  },
};
</script>
<style>
.VueCarousel-navigation {
  position: absolute;
  width: 100%;
  justify-content: space-between;
  top: 45%;
  opacity: 0;
  transition: opacity 0.25s ease-in-out;
}
.VueCarousel:hover .VueCarousel-navigation {
  opacity: 100;
}
.home-slider .VueCarousel-navigation-button {
  color: white;
}
.home-slider .VueCarousel-navigation-prev {
  left: 35px;
  background: black;
  opacity: 50%;
}
.home-slider .VueCarousel-navigation-next {
  right: 35px;
  background: black;
  opacity: 50%;
}
.VueCarousel-navigation-button[data-v-453ad8cd]:focus {
  outline: none;
}
.slide_heading {
  z-index: 9999;
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  margin: auto;
}
.VueCarousel-dot-container {
  margin-top: 0px !important;
}
.VueCarousel-dot {
  margin-top: 0px !important;
}
</style>
