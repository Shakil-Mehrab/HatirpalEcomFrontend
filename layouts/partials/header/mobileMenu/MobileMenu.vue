<template>
  <div class="left_navigation"
  v-show="menuList"
  >
    <div class="media_body">
      <div class="user_image">
        <div class="user_img mr-1">
          <img src="@/assets/images/profile.jpeg" alt="user" width="60px" />
        </div>
        <h6><a href="#">Rakibul Islam</a></h6>
      </div>
      <ul class="tree_ul">
        <li class="tree_li mb-2">
          <a
            class="change_color_to_dark_white"
            href="#"
            style="position: relative"
          >
            Product
            <i class="fas fa-chevron-right"></i>
          </a>
          <ul class="tree_li_ul">
            <li class="tree_li_ul_li">
              <a class="change_color_to_dark_white" href="">Add Product</a>
            </li>
            <li class="tree_li_ul_li">
              <a class="change_color_to_dark_white" href="">View Product</a>
            </li>
          </ul>
        </li>
        <li class="tree_li mb-2">
          <a
            class="change_color_to_dark_white"
            href="#"
            style="position: relative"
          >
            Category
            <i class="fas fa-chevron-right"></i>
          </a>
          <ul class="tree_li_ul">
            <li class="tree_li_ul_li">
              <a class="change_color_to_dark_white" href="">Add Category</a>
            </li>
            <li class="tree_li_ul_li">
              <a class="change_color_to_dark_white" href="">View Category</a>
            </li>
          </ul>
        </li>
        <li class="tree_li mb-2">
          <a
            class="change_color_to_dark_white"
            href="#"
            style="position: relative"
          >
            Category
            <i class="fas fa-chevron-right"></i>
          </a>
          <ul class="tree_li_ul">
            <li class="tree_li_ul_li">
              <a class="change_color_to_dark_white" href="">Add Category</a>
            </li>
            <li class="tree_li_ul_li">
              <a class="change_color_to_dark_white" href="">View Category</a>
            </li>
          </ul>
        </li>
        <li class="tree_li mb-2">
          <a
            class="change_color_to_dark_white"
            href="#"
            style="position: relative"
          >
            Category
            <i class="fas fa-chevron-right"></i>
          </a>
          <ul class="tree_li_ul">
            <li class="tree_li_ul_li">
              <a class="change_color_to_dark_white" href="">Add Category</a>
            </li>
            <li class="tree_li_ul_li">
              <a class="change_color_to_dark_white" href="">View Category</a>
            </li>
          </ul>
        </li>
        <li class="tree_li mb-2">
          <a
            class="change_color_to_dark_white"
            href="#"
            style="position: relative"
          >
            Category
            <i class="fas fa-chevron-right"></i>
          </a>
          <ul class="tree_li_ul">
            <li class="tree_li_ul_li">
              <a class="change_color_to_dark_white" href="">Add Category</a>
            </li>
            <li class="tree_li_ul_li">
              <a class="change_color_to_dark_white" href="">View Category</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      myMarket: "",
    };
  },
  props: {
    menuList: {
      required: true,
      type: Boolean,
    },
  },
  methods: {
    myMarketLiUl(arg) {
      if (this.myMarket == "") {
        this.myMarket = arg;
      } else {
        this.myMarket = "";
      }
    },
  },
};
</script>
