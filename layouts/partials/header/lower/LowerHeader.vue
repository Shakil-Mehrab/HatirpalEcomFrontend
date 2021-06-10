<template>
  <div class="row lower_header" v-click-outside="hide" >
    <div
      class="col-md-2 col-sm-6 col-6 category_menu"

    >
      <a href="#" class="category_menu_text_icon">
        <svg
          class="category_menu_icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 10h16M4 14h16M4 18h16"
          />
        </svg>
        <span class="category_menu_text"> Categories </span>
        <svg
          class="category_menu_icon"
          xmlns="http://www.w3.org/2000/svg"
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
      </a>
      <div
        class="root_category"
          >
        <RootCategory :categories="treeCategories"/>
      </div>
    </div>
    <div class="col-md-10 col-sm-6 col-6 mobile_menu_pre_div">
      <a
        class="mobile_menu_option"
        href="#"
        @click.prevent="menuList = !menuList"
      >
        <svg
          class="category_menu_icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 10h16M4 14h16M4 18h16"
          />
        </svg>
        <span class="category_menu_text">Menu</span>
      </a>
      <HatirpalInfo />
    </div>
    <MobileMenu :menuList="menuList" />
  </div>
</template>
<script>
import MobileMenu from "@/layouts/partials/header/mobileMenu/MobileMenu";
import RootCategory from "@/layouts/partials/header/lower/RootCategory";
import HatirpalInfo from "@/layouts/partials/header/lower/HatirpalInfo";
import ClickOutside from "vue-click-outside";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      menuList: false,
    };
  },
  components: {
    MobileMenu,
    RootCategory,
    HatirpalInfo,
  },
  computed: {
    ...mapGetters({
        treeCategories: "treeCategories"
    }),
  },
  directives: {
    ClickOutside,
  },
  methods: {
    hide() {
      this.menuList = false;
    },
  },
};
</script>
