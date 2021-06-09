<template>
  <div
    class="trending"
    v-observe-visibility="{
      callback: showProductsNow,
      once: true
    }"
  >
      <h6 class="trending_heading">My Market</h6>
    <div>
      <ul class="mymarket_ul">
        <li v-for="n in 2"
        :key="n.id"
        >
          <a href="" class="">
              <h6>Ladies health monitoring smartwatch</h6>
              <div style="display:flex">
                <span class="brand_round_button brand_shadow">Source Now</span
              >
              <img
                src="//i.alicdn.com/img/imgextra/i1/O1CN01ypfQ2q1zTydNAQ99D_!!6000000006716-0-tps-1000-1000.jpg_100x100.jpg"
                alt="jfk"
              />
              </div>
             
          </a>
          <br />
        </li>
      </ul>
    </div>
    <!-- <div class="flex items-center justify-center xl:mt-20" >
      <img src="/img/app/loading.gif" alt="loading" />
    </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoading: true,
      products: []
    };
  },
  props: {
    // endpoints: {
    //   required: true,
    //   type: String,
    //   default: "products?per-page=9"
    // }
  },
  async asyncData({ app }) {
    let productsResponse = await app.$axios.$get("products");
    return {
      products: productsResponse.data
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
        let response = await this.$axios.$get(endpoint);

        this.products = response.data;
      } catch (e) {}
      this.isLoading = false;
    },
    link(arg) {
      return {
        name: "products-slug",
        params: {
          slug: arg.slug
        }
      };
    }
  }
};
</script>
