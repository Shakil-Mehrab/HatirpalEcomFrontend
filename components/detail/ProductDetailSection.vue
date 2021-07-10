<template>
  <div>
    <form action="#" @submit.prevent="add">
      <div></div>
      <h3>{{ data.name }}</h3>
      <div style="color: red">{{ requiredErrors }}</div>
      <!-- {{ data }} -->
      <div style="color: orange">
        <!-- <star-rating
          :increment="0.5"
          :star-size="20"
          :read-only="true"
          :rating="4.3"
        /> -->
        <!-- <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i> -->
      </div>
      <hr />
      <div class="mt-2" v-if="data.old_price">
        <strong class="pr-2 my-2"
          >Old Price
          :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </strong>
        <span style="text-decoration: line-through"
          >{{ data.old_price }} BDT</span
        >
      </div>
      <div class="mt-2">
        <strong class="pr-2 my-2"
          >Sale Price
          :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </strong>
        {{ data.sale_price }} BDT
      </div>
      <div class="mt-2">
        <strong class="pr-2 my-2"
          >Unit
          :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </strong>
        {{ data.unit }}
      </div>
      <div class="mt-2">
        <strong class="pr-2 my-2">Minimum Order :&nbsp; </strong>
        {{ data.minimum_order }} {{ data.unit }}
      </div>
      <div class="mt-2" v-if="data.waranty">
        <strong class="pr-2 my-2"
          >Waranty :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </strong>
        {{ data.waranty }}
      </div>
      <div class="mt-2">
        <strong class="pr-2 my-2"
          >Stock :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </strong>
        {{ data.stock_count }}
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
        <div class="color" v-else>
          <strong class="pr-2 my-2">
            Color :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong
          >
          <ul>
            <li class="mx-2 mb-2">
              <input
                type="radio"
                class="btn-check"
                :id="data.id"
                :value="data.thumbnail"
                v-model="form.image"
              />
              <label class="btn btn-outline-success" :for="data.id">
                <img
                  v-if="data.thumbnail"
                  v-lazy="data.thumbnail"
                  :alt="data.slug"
                  width="100%"
                />
              </label>
            </li>
          </ul>
        </div>
        <div>
          <span class="help-block" v-if="requiredErrors">
            <strong style="color: red">{{
              requiredErrors["products.0.image"]
            }}</strong>
          </span>
        </div>
      </div>
      <div>
        <h6>
          <a href="" style="color: red"
            ><strong>{{ loggedInfo }}</strong></a
          >
        </h6>
      </div>
      <div class="my-2 quantity" style="display: flex">
        <template v-if="data.stock_count<data.minimum_order">
          <h5 class="btn btn-danger btn-sm">This product is out of Stock</h5>
        </template>
        <template v-else>
          <input
            type="number"
            class="form-control"
            :min="data.minimum_order"
            :step="data.minimum_order"
            placeholder="Quantity"
            v-model="form.quantity"
            style="width: 200px"
          />
          &nbsp;
          <input
            type="submit"
            class="btn btn-sm btn-success"
            value="Add to cart"
          />
        </template>
      </div>

      <hr />
      <div class="my-2">
        <h3 class="text-center">About this item</h3>
        <div v-html="data.description"></div>
      </div>
      <hr />
      <br />
      <ProductBodyCertificketComment :data="data" />
    </form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import ProductBodyCertificketComment from "@/components/detail/ProductBodyCertificketComment";
// import StarRating from "vue-star-rating";
export default {
  data() {
    return {
      requiredErrors: "",
      loggedInfo: "",
      product: null,
      i: 1,
      form: {
        product_id: this.data.id,
        size_id: "",
        image: "",
        quantity: this.data.minimum_order
      }
    };
  },
  props: {
    data: {
      required: true,
      type: Object
    }
  },

  components: {
    ProductBodyCertificketComment
    // StarRating,
  },
  methods: {
    ...mapActions({
      store: "cart/store"
    }),
    add() {
      console.log(this.form);
      if (this.$auth.loggedIn) {
        this.store([
          {
            product_id: this.form.product_id,
            size_id: this.form.size_id,
            image: this.form.image,
            quantity: this.form.quantity
          }
        ])
          .then(response => console.log(response), (this.requiredErrors = ""))
          .catch(error => (this.requiredErrors = error.response.data.errors));
      } else {
        this.loggedInfo = "Please Signin";
      }
    }
  }
};
</script>
