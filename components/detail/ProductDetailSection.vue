<template>
  <div>
    <form action="#" @submit.prevent="add">
      <div></div>
      <h3>{{ data.name }}</h3>
      <div style="color:red">{{requiredErrors}}</div>
      <!-- {{ data }} -->
      <div style="color: orange">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <hr />
      <div class="mt-2"
      v-if="data.old_price"
      >
        <strong class="pr-2 my-2"
          >Old Price :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </strong>
        <span style="text-decoration: line-through;">{{ data.old_price }} BDT</span>
      </div>
       <div class="mt-2">
        <strong class="pr-2 my-2"
          >Sale Price :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </strong>
        {{ data.sale_price }} BDT
      </div>
      <div class="mt-2">
        <strong class="pr-2 my-2"
          >Unit :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </strong>
        {{ data.unit }}
      </div>
      <div class="mt-2">
        <strong class="pr-2 my-2"
        v-if="data.waranty"
          >Waranty :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </strong>
        {{ data.waranty }}
      </div>
      <div class="mt-2">
        <div class="size" v-if="data.sizes.length">
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
                v-model="form.size_id"
              />
              <label class="btn btn-outline-success" :for="size.size">
                {{ size.size }}
              </label>
            </li>
          </ul>
        </div>
        <div>
          <span class="help-block" v-if="requiredErrors">
            <strong style="color: red">{{
              requiredErrors["products.0.size_id"]
            }}</strong>
          </span>
        </div>
      </div>
      <div class="mt-2">
        <div class="color" v-if="data.productImages.length">
          <strong class="pr-2 my-2">
            Color :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong
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
                v-model="form.image_id"
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
        <div>
          <span class="help-block" v-if="requiredErrors">
            <strong style="color: red">{{
              requiredErrors["products.0.image_id"]
            }}</strong>
          </span>
        </div>
      </div>

      <div class="my-2 quantity" style="display: flex">
        <input
          type="number"
          class="form-control"
          :min="data.minimum_order"
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
      <div>
        <h6>
          <a href="" style="color: red"
            ><strong>{{ loggedInfo }}</strong></a
          >
        </h6>
      </div>
      <hr />
      <div class="my-2">
        <h3 class="text-center">About this item</h3>
        <div v-html="data.description"></div>
      </div>
      <hr />
      <br />
      <ProductBodyCertificketComment :data="data"/>
    </form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import ProductBodyCertificketComment from "@/components/detail/ProductBodyCertificketComment";

export default {
  data() {
    return {
      requiredErrors: "",
      loggedInfo: "",
      product: null,
      form: {
        product_id: this.data.id,
        size_id: "",
        image_id: "",
        quantity: this.data.minimum_order,
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
      store:'cart/store'
    }),
    add() {
      console.log(this.form)
      if (this.$auth.loggedIn) {
        this.store([
          {
            product_id: this.form.product_id,
            size_id: this.form.size_id,
            image_id: this.form.image_id,
            quantity: this.form.quantity,
          },
        ])
          .then((response) => console.log(response), (this.requiredErrors = ""))
          .catch((error) => (this.requiredErrors = error.response.data.errors));

        // this.form={
        //   variation:'',
        //   quantity:1
        // }
        // this.$router.replace({
        //  name: "product-slug",
        //   params: {
        //     slug: this.data.slug,
        //   },
        // });
      } else {
        this.loggedInfo = "Please Signin";
      }
    },
  },
};
</script>
