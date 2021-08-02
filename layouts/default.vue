<template>
  <div>
    <div style="height:50px;overflow:hidden;position:relative">
      <img
        src="@/assets/images/background.jpeg"
        alt=""
        width="100%"
        style="z-index:-1"
      />
      <a
        href="http://localhost:8000/admin/supplier/create"
        style="position:absolute;top:17px;z-index:99999;color:var(--brand-color);right:42px;background:white;padding:2px 10px;border-radius: 15px;
        "
        >Register Now</a
      >
    </div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from "@/layouts/partials/header/Header";
import Footer from "@/layouts/partials/Footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>
