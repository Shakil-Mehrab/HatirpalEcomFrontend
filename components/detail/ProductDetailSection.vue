<template>
  <div>
    <h3>{{data.name}}</h3>
    <div style="color:orange">
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
      {{data.price}} BDT
    </div>
    <div class="mt-2 size" v-if="data.sizes.length">
      <strong class="pr-2 my-2"
        >Size
        :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong
      >
      <ul >
        <li class="m-2 px-2" v-for="size in data.sizes" :key="size.id">
          <a href="">{{size.size}}</a>
        </li>
      </ul>
    </div>
    <div class="mt-2 color" v-if="data.productImages.length">
      <strong class="pr-2 my-2"
        >Color :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong
      >
      <ul>
        <li class="mx-2 mb-2" v-for="color in data.productImages" :key="color.id">
          <a href=""
            >
             <img
                  v-if="color.thumbnail"
                  v-lazy="color.thumbnail"
                  :alt="color.slug"
                  width="100%"
                />
          </a>
        </li>
      </ul>
    </div>
    <div class="my-2 quantity">
      <input type="number" placeholder="Quantity" class="px-1" />
      <a href="" class="text-white p-2"> Add to Cart </a>
    </div>
    <hr />
    <div class="my-2">
      <h3 class="text-center">About this item</h3>
      <ul>
        <li v-for="n in 5" :key="n">
          <a href="#">
            &#9679; Dimensions with Stand (W x H x D): 28.8" x 18.9" x 7.1" |
            Without Stand (W x H x D): 28.8" x 17.2" x 2.9" | Weight with Stand:
            8.2 lbs | Weight without Stand: 8.0 lbs
          </a>
        </li>
      </ul>
    </div>
    <hr />
    <br />
    <ProductBodyCertificketComment />
  </div>
</template>
<script>
import ProductBodyCertificketComment from "@/components/detail/ProductBodyCertificketComment";

export default {
  props: {
    data: {
      required: true,
      type: Object
    }
  },
  components: {
    ProductBodyCertificketComment,
  },
};
</script>
