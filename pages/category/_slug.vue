<template>
  <div class="container mx-auto">
    <div class="row bg-white py-2">
      <p class="my-2">
      Electronics > Television & Video> Television
    </p>
      <div class="col-sm-3 col-4">
        <LeftFilterSection />
      </div>
      <div class="col-sm-9 col-8 category_right">
        <RightListSection />
      </div>
    </div>
    <br>
  </div>
</template>
<script>
import LeftFilterSection from "@/components/category/LeftFilterSection";
import RightListSection from "@/components/category/RightListSection";

export default {
  components: {
    LeftFilterSection,
    RightListSection
  },
};
</script>