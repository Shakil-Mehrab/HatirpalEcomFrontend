<template>
  <div class="sub_category" v-if="category.children.length">
    <div class="row my-2">
      <div class="col-md-6" v-for="child in category.children" :key="child.id">
        <nuxt-link
          :to="{ name: 'product', query: { categories: child.slug } }"
          exact
          target="_blank"
          class="sub_category_a"
        >
          {{ child.name }}
        </nuxt-link>
        <div class="child_category my-2">
          <ul>
            <li v-for="grand in child.children" :key="grand.id">
              <nuxt-link
                :to="{ name: 'product', query: { categories: grand.slug } }"
                exact
                target="_blank"
                class="child_category_a"
              >
                {{ grand.name }}
              </nuxt-link>
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
};
</script>
