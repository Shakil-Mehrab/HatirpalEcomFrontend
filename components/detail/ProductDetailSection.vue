<template>
  <div>
    <form action="#" @submit.prevent="add">
      <div>
        {{ form }}
      </div>
      <h3>{{ data.name }}</h3>
      <div style="color: orange">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <hr />
      <div class="mt-2">
        <strong class="pr-2 my-2"
          >Price :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </strong>
        {{ data.price }} BDT
      </div>
      <div class="mt-2 size" v-if="data.sizes.length">
        <strong class="pr-2 my-2"
          >Size
          :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong
        >
        <ul>
          <li class="mx-2 mb-2" v-for="size in data.sizes" :key="size.id">
            <input
              type="radio"
              class="btn-check"
              :id="size.size"
              :value="size.id"
              v-model="form.size"
            />
            <label class="btn btn-outline-success" :for="size.size">
              {{ size.size }}
            </label>
          </li>
        </ul>
      </div>
      <div class="mt-2 color" v-if="data.productImages.length">
        <strong class="pr-2 my-2"
          > Color
          :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong
        >
        <ul>
          <li
            class="mx-2 mb-2"
            v-for="color in data.productImages"
            :key="color.id"
          >
            <input
              type="radio"
              class="btn-check"
              :id="color.id"
              :value="color.id"
              v-model="form.image"
            />
            <label class="btn btn-outline-success" :for="color.id">
              <img
                v-if="color.thumbnail"
                v-lazy="color.thumbnail"
                :alt="color.slug"
                width="100%"
              />
            </label>
          </li>
        </ul>
      </div>
      <div class="my-2 quantity" style="display: flex">
        <input
          type="number"
          class="form-control"
          min="1"
          placeholder="Quantity"
          v-model="form.quantity"
          style="width: 200px"
        />&nbsp;
        <input
          type="submit"
          class="btn btn-sm btn-success"
          value="Add to cart"
        />
      </div>
      <hr />
      <div class="my-2">
        <h3 class="text-center">About this item</h3>
        <ul>
          <li v-for="n in 5" :key="n">
            <a href="#">
              &#9679; Dimensions with Stand (W x H x D): 28.8" x 18.9" x 7.1" |
              Without Stand (W x H x D): 28.8" x 17.2" x 2.9" | Weight with
              Stand: 8.2 lbs | Weight without Stand: 8.0 lbs
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <br />
      <ProductBodyCertificketComment />
    </form>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
import ProductBodyCertificketComment from "@/components/detail/ProductBodyCertificketComment";

export default {
  data() {
    return {
      product: null,
      form: {
        product: this.data.id,
        variation:this.data.variations[0],
        size: "",
        image: "",
        quantity: 1,
      },
    };
  },
  props: {
    data: {
      required: true,
      type: Object,
    },
  },
  components: {
    ProductBodyCertificketComment,
  },
  methods: {
    ...mapActions({
      store:'cart/cartStore'
    }),
    add() {
      // console.log(this.form.variation.id);
      this.store([{
        product:this.form.product,
        variation_id:this.form.variation.id,
        size:this.form.size,
        image:this.form.image,
        quantity:this.form.quantity,
      }])
      this.form={
        variation:'',
        quantity:1
      }
    //   this.$router.replace({
    //     name:'cart'
    //   });
    },
  },
};
</script>
