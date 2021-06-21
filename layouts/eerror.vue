<template>
  <div class="container error-container mx-auto">
    <div class="row">
      <div class="col-lg-12">
        <div class="error-content">
          <h1 class="status-message">দুঃখিত!</h1>
          <h2 v-if="error.statusCode" class="status-code">
            {{ error.statusCode }}
          </h2>
          <p>
            আপনি যে পাতার অনুসন্ধান করছেন সেটি খুঁজে পাওয়া যায় নি। পাতাটি হয়তো
            সরানো হয়েছে, পুনরায় নামকরণ করা হয়েছে অথবা ভুলভাবে অনুসন্ধান করেছেন।
          </p>
          <nuxt-link
            to="/"
            class="btn mt-2 mb-5 text-customcolor-200 hover:text-customcolor-300"
            tag="button"
            exact
          >
            মুলপাতায় ফিরে যান
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  head() {
    return {
      title: this.metaTitle
    };
  },

  computed: {
    metaTitle() {
      if (this.error || this.error.length || this.error.statusCode) {
        return this.error.statusCode + " - " + this.error.message;
      }
      return "Error";
    }
  }
};
</script>

<style>
.error-container {
  padding-top: 110px;
}
.error-content {
  text-align: center !important;
}
.error-content .status-code {
  font-size: 50px !important;
  color: #de1f26;
  margin: 0;
}
.error-content .status-message {
  font-size: 45px !important;
  margin: 0;
}
.error-content p {
  font-size: 20px !important;
}
</style>
