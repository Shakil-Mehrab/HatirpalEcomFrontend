<template>
  <div>
    <div class="mt-4 category_filter">
      <h6 class="mb-2"><strong>Choose Category</strong></h6>
      <div v-for="category in categories" :key="category.id">
        <input
          type="checkbox"
          v-model="selected_checkboxes"
          :value="category.slug"
          @change="categoryFiltering"
        /><a href="#"> {{ category.name }}</a>
        <div v-for="cat in category.children" :key="cat.id">
          <input
            type="checkbox"
            v-model="selected_checkboxes"
            :value="cat.slug"
            @change="categoryFiltering"
          /><a href="#"> {{ cat.name }}</a>
        </div>
      </div>
    </div>
    <div class="mt-4 price_filter">
      <h6>
        <strong>Price : {{ lower_price + " to " + upper_price }}</strong>
      </h6>
      <div class="price_range_div">
        <div>
          <label for="">Minimum</label>
          <input
            type="range"
            min="0"
            :max="upper_price"
            v-model="lower_price"
            @change="prouctPrice()"
          />
        </div>
        <div>
          <label for="">Maximum</label>
          <input
            type="range"
            min="0"
            max="100000"
            v-model="upper_price"
            @change="prouctPrice()"
          />
        </div>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Real Time Search</label>
      <input
        type="text"
        placeholder="Searh Your product"
        class="form-control"
        @keyup="search"
      />
    </div>
    <div class="mt-4">
      <h6><strong>Television</strong></h6>
      <a href="" class="text-sm">LED & LCD</a><br />
      <a href="" class="text-sm">LED & LCD</a><br />
      <a href="" class="text-sm">LED & LCD</a>
    </div>
    <div class="mt-4">
      <h6><strong>Average Custom Review</strong></h6>
      <a href="" class="text-xs">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i> </a
      ><br />
      <a href="" class="text-xs">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i> </a
      ><br />
      <a href="" class="text-xs">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i> </a
      ><br />
      <a href="" class="text-xs">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </a>
    </div>
    <div class="mt-4">
      <h6><strong>Featured Brand</strong></h6>
      <input type="checkbox" /><a href=""> TCL</a><br />
      <input type="checkbox" /><a href=""> LG</a><br />
      <input type="checkbox" /><a href=""> SAMSANG</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected_checkboxes: [],
      upper_price: 0,
      lower_price: 0,
      selectedCategory: null
    };
  },
  props: {
    categories: {
      required: true,
      type: Array
    }
  },
  computed: {
    arrayOfprice() {
      let price_array = [this.lower_price, this.upper_price];
      return price_array;
    }
  },
  methods: {
    async search(e) {
      await this.$router
        .replace({
          query: Object.assign({}, this.$route.query, {
            search: e.target.value
          })
        })
        .catch(() => {});
    },
    async prouctPrice() {
      await this.$router
        .replace({
          query: Object.assign({}, this.$route.query, {
            price: [this.arrayOfprice]
          })
        })
        .catch(() => {});
    },
    selected_category() {
      this.selected_checkboxes.join(",");

      this.selectedCategory;
    },
    async categoryFiltering() {
      let selected = this.selected_checkboxes.join(",");
      await this.$router
        .replace({
          query: {
            category: selected
          }
        })
        .catch(() => {});
    }
  }
};
</script>
