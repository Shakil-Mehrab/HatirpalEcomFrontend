<template>
  <div
    v-observe-visibility="{
      callback: showProductsNow,
      once: true
    }"
    class="col-md-12"
  >
    <template v-if="!isLoading">
      <client-only>
        <carousel
          class="product-slider"
          :perPageCustom="[
            [350, 3],
            [768, 5],
            [992, 6],
            [1200, perpageInLarge]
          ]"
          :loop="true"
          :navigationEnabled="true"
        >
          <slide v-for="data in datas" :key="data.id">
            <div class="slide_content animate-expand">
              <nuxt-link :to="link(data)" exact>
                <img
                  v-if="data.thumbnail"
                  v-lazy="data.thumbnail"
                  :alt="data.name"
                  width="100%"
                />
              </nuxt-link>
              <div class="product_attribute my-2">
                <nuxt-link :to="link(data)" exact v-if="data.name"
                  ><h6 class="">{{ data.name }}</h6></nuxt-link
                >
                <p class="mt-2 mb-1">
                  <span v-if="data.sale_price">{{ data.sale_price }} BDT</span>
                  <span class="old_price" v-if="data.old_price"
                    >{{ data.old_price }} BDT</span
                  >
                </p>
                <!-- <p class="" v-if="data.short_description" v-html="data.short_description"></p> -->
              </div>
            </div>
          </slide>
        </carousel>
      </client-only>
    </template>
    <div class="row my-2" v-if="isLoading">
      <div class="col-md-3" v-for="skull in skeleton" :key="skull">
        <content-placeholders>
          <content-placeholders-img />
          <content-placeholders-heading />
        </content-placeholders>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoading: true,
      datas: []
    };
  },
  props: {
    endpoints: {
      required: true,
      type: String,
      default: "product?per-page=20"
    },
    short_des: {
      required: false,
      type: Boolean,
      default: false
    },
    perpageInLarge: {
      required: false,
      type: Number,
      default: 8
    },
    skeleton: {
      required: false,
      type: Number,
      default: 4
    }
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
        let response = await this.$axios.$get(endpoint);
        this.datas = response.data;
      } catch (e) {}
      this.isLoading = false;
    },
    link(arg) {
      return {
        name: "product-slug",
        params: {
          slug: arg.slug
        }
      };
    }
  }
};
</script>
<style>
.product-slider .VueCarousel-navigation {
  position: absolute;
  width: 100%;
  justify-content: space-between;
  top: 45%;
  opacity: 1;
  transition: opacity 0.25s ease-in-out;
}
.product-slider .VueCarousel-navigation-button {
  color: #333;
}
.product-slider .VueCarousel-navigation-prev {
  left: 20px;
  background: #e7e9ec;
  border-radius: 3px;
  border-color: #adb1b8 #a2a6ac #8d9096;
  border-style: solid;
  border-width: 1px;
}
.product-slider .VueCarousel-navigation-next {
  right: 20px;
  background: #e7e9ec;
  border-radius: 3px;
  border-color: #adb1b8 #a2a6ac #8d9096;
  border-style: solid;
  border-width: 1px;
}
.product-slider .VueCarousel-navigation-button[data-v-453ad8cd]:focus {
  outline: black;
}
.product-slider .VueCarousel-dot-container {
  display: none !important;
}
</style>
