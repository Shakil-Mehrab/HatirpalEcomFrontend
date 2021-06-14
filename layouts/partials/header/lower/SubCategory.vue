<template>
  <div class="sub_category" v-if="category.children.length">
    <div class="row">
      <div class="col-md-6" v-for="child in category.children" :key="child.id">
        <nuxt-link to="" exact target="_blank" class="sub_category_a">
          <h6 class="text-center">
            {{ child.name }}
          </h6>
          <!-- <h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="subcategory_svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </h5> -->
        </nuxt-link>
        <div class="child_category">
          <ul>
            <li class="" v-for="grand in child.children" :key="grand.id">
              <a href="category/category" exact target="_blank" class="">
                {{ grand.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    category: {
      required: true,
      type: Object,
    },
  },
  methods: {
    link(arg) {
      return {
        name: "",
        query: { slug: arg.slug },
      };
    },
  },
};
</script>
