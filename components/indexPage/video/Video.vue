<template>
  <div
    class="row"
    v-observe-visibility="{
      callback: shoSLideNow,
      once: true
    }"
  >
    <div class="col-md-4" v-for="data in datas" :key="data">
      <video width="100%" height="100%" controls>
        <source :src="data.video" type="video/mp4" />
      </video>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoading: true,
      datas: []
    };
  },
  methods: {
    async shoSLideNow(visible) {
      if (visible) {
        await this.getSlides("api/video");
      }
    },
    async getSlides(endpoint) {
      try {
        this.isLoading = true;
        let response = await this.$axios.$get(endpoint);
        this.datas = response.data;
      } catch (e) {}
      this.isLoading = false;
    }
  }
};
</script>
