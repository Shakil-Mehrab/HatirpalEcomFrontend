<template>
  <div>
    
    <div class="form-group">
      <label class="form-label">Real Time Search</label>
      <input
        type="text"
        placeholder="Searh Your product"
        class="form-control"
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
      <input type="checkbox" /><a href=""> TCL</a
      ><br />
      <input type="checkbox" /><a href=""> LG</a
      ><br />
      <input type="checkbox" /><a href=""> SAMSANG</a>
    </div>
    <div class="mt-4">
      <h6><strong>Price : {{ form.price }}</strong></h6>
      <input
      style="width: 100%;"
        type="range"
        min="500"
        max="10000"
        name=""
        id=""
        v-model="form.price"
        @change="prouctPrice()"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        price: ""
      }
    };
  },
  methods: {
    prouctPrice() {
      console.log(this.form.price);
    }
  }
};
</script>
