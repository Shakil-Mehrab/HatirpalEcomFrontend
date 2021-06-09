<template>
  <fragment>
    <div class="row" v-for="n in 5" :key="n">
      <div class="col-md-4">
        <img
          src="https://m.media-amazon.com/images/I/81eRAX3sB6L._AC_UY218_.jpg"
          alt=""
          width="100%"
        />
        <!-- <router-link :to="link(product)" exact>
          <img
            v-if="product.thumbnail"
            v-lazy="product.thumbnail"
            :alt="product.name"
            class="w-full"
          />
        </router-link> -->
      </div>
      <div class="col-md-8">
        <h5>
          <router-link to="" exact
            >this is our latest brand product</router-link
          >
        </h5>
        <span>
          <a href="" class="text-xs">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i> </a
          ><br />
        </span>
        <p class="text-xs sm:text-sm">Fashion</p>
        <p class="text-xs sm:text-sm">My One</p>
      </div>
    </div>
  </fragment>
</template>
<script>
export default {
  props: {
    // products: {
    //   required: false,
    //   type: Array
    // }
  },
  methods: {
    link(arg) {
      return {
        name: "products-slug",
        params: {
          slug: arg.slug,
        },
      };
    },
  },
};
</script>
