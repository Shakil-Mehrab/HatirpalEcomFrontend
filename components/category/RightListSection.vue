<template>
  <fragment>
    <template v-for="(product, index) in products">
    <div class="row my-2" :key="index">
      <div class="col-md-4" >
      
        <router-link :to="link(product)">
          <img
            v-if="product.thumbnail"
            v-lazy="product.thumbnail"
            :alt="product.name"
            width="100%"
          />
        </router-link>
      </div>
      <div class="col-md-8">
        <h5>
          <router-link :to="link(product)" exact>{{
            product.full_name
          }}</router-link>
        </h5>
        <div>
          <a href="" class="text-xs">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </a>
        </div>
        <div>
          <span><strong>Price : </strong>{{ product.sale_price }} BDT</span>
          <span class="old_price">{{ product.old_price }} BDT</span>
        </div>
        <div><strong>Brand : </strong>{{ product.brand }}</div>
        <div><strong>Unit : </strong>{{ product.unit }}</div>
        <div v-if="product.waranty">
          <strong>Waranty : </strong>{{ product.waranty }}
        </div>
      </div>
    </div>
    </template>
  </fragment>
</template>
<script>
export default {
  props: {
    products: {
      required: true,
      type: Array,
    },
  },
  methods: {
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
