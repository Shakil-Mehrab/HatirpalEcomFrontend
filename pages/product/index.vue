<template>
  <div class="container mx-auto">
    <div class="row bg-white py-2">
      <p class="my-2">Electronics > Television & Video> Television</p>
      <div class="col-sm-3 col-4">
        <LeftFilterSection />
      </div>

      <div class="col-sm-9 col-8 category_right">
        {{ meta }}
        {{ products }}

        <template v-if="products.length">
          <RightListSection :products="products" :meta="meta" />
          <div class="row">
            <div class="col-md-12 text-center">
              <Pagination :meta="meta" />
            </div>
          </div>
        </template>
        <template v-else
          ><h6 class="text-center">No product found</h6></template
        >
      </div>
    </div>
    <br />
  </div>
</template>
<script>
import LeftFilterSection from "@/components/category/LeftFilterSection";
import RightListSection from "@/components/category/RightListSection";
import Pagination from "@/components/category/Pagination";

export default {
  data() {
    return {
      products: [],
       meta: {},
    };
  },
  components: {
    LeftFilterSection,
    RightListSection,
    Pagination,
  },
  
  watch: {
    "$route.query"(query) {
      console.log('watch')
      this.getNews(query);
    },
  },
  //  mounted () {
  //   document.getElementById('app').appendChild(this.$el)
  // },
  methods: {
    async getNews(query = this.$route.query) {
      console.log('get News')
      await this.$axios.$get(`api/product?per-page=8`, {
          params: {
            page:query.page,
            ...query,
          },
        })
        .then((response) => {
          this.products = response.data;
          this.meta = response.meta;
        });
    },
  },
  async asyncData({ query, app }) {
    let newsResponse = await app.$axios.$get(`api/product?per-page=8`, {
      params: {
        page: query.page,
        ...query,
      },
    });

    return {
      products: newsResponse.data,
      meta: newsResponse.meta,
    };
  },
};
</script>