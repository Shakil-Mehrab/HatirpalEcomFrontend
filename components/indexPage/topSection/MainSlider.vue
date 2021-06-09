<template>
  <div class="">
    <client-only>
      <carousel
        class="home-slider"
        :per-page="1"
        :autoplay="true"
        :autoplayTimeout="5000"
        :loop="true"
        :navigationEnabled="true"
      >
        <slide v-for="n in 5" :key="n.id">
          <div class="mx-1">
            <img
              src="https://img.alicdn.com/imgextra/i1/O1CN01r7pL1J1DYSxOOPt7s_!!6000000000228-2-tps-990-400.png"
              width="100%"
              alt=""
            />
          </div>
        </slide>
      </carousel>
    </client-only>
  </div>
</template>
<script>
export default {};
</script>
<style>
.VueCarousel-navigation {
  position: absolute;
  width: 100%;
  justify-content: space-between;
  top: 45%;
  opacity: 0;
  transition: opacity 0.25s ease-in-out;
}
.VueCarousel:hover .VueCarousel-navigation {
  opacity: 100;
}
.home-slider .VueCarousel-navigation-button {
  color: white;
}
.home-slider .VueCarousel-navigation-prev {
  left: 35px;
  background: black;
  opacity: 50%;
}
.home-slider .VueCarousel-navigation-next {
  right: 35px;
  background: black;
  opacity: 50%;
}
.VueCarousel-navigation-button[data-v-453ad8cd]:focus {
  outline: none;
}
.slide_heading {
  z-index: 9999;
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  margin: auto;
}
.VueCarousel-dot-container {
  margin-top: 0px !important;
}
.VueCarousel-dot {
  margin-top: 0px !important;
}
</style>
