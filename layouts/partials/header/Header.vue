<template>
  <fixed-header :threshold="100">
    <header class="bg-white shadow-sm navbar">
        <div class="container-fluid header_full">
          <TopHeader />
        </div>
        <div class="header_full remove_lowheader_from_fixed" >
            <hr>
        </div>
        <div class="low_head_back_img remove_lowheader_from_fixed">
          <div class="container-fluid">
          <LowerHeader />
        </div>
        </div>
    </header>
  </fixed-header>
</template>
<script>
import FixedHeader from "vue-fixed-header";
import TopHeader from "@/layouts/partials/header/top/TopHeader";
import LowerHeader from "@/layouts/partials/header/lower/LowerHeader";
export default {
  components: {
    TopHeader,
    LowerHeader,
    FixedHeader,
  },
};
</script>
<style>
.navbar{
  padding-bottom: 0;
}
@media only screen and (min-width: 768px) {
  /* .navbar.vue-fixed-header--isFixed {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    z-index: 9999;
  }  */
  /* by shakil */
  /* .navbar.vue-fixed-header--isFixed .remove_lowheader_from_fixed {
    display: none;
  } */
}
</style>
