<template>
  <ul class="root_category_ul">
    <li
      class="root_category_li my-2"
      v-for="category in categories"
      :key="category.id"
    >
      <nuxt-link
        :to="{ name: 'product', query: { categories: category.slug } }"
        exacttarget="_blank"
      >
        <h6>{{ category.name }}</h6>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </nuxt-link>

      <SubCategory :category="category" />
    </li>
  </ul>
</template>
<script>
import SubCategory from "@/layouts/partials/header/lower/SubCategory";

export default {
  props: {
    categories: {
      required: true,
      type: Array,
    },
  },
  components: {
    SubCategory,
  },
  // methods: {
  //   link(arg) {
  //     return {
  //       name: "product",
  //      query: { category: children.slug } }
  //
  //   },
  // },
};
</script>
01741606526