<template>
  <fragment>
    <div class="search_select_pre_div">
      <client-only>
        <select name="user_type" id="user_type" v-model="form.user_type">
          <option value="" class="whitespace-wrap">
            <span>Products</span>
            <svg
              class="search_icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </option>
          <option value="2">
            <span>Products</span>
            <svg
              class="w-4 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </option>
        </select>
      </client-only>
    </div>
    <input type="search" class="form-control" v-model="form.query" />
    <div class="search_icon_pre_div">
      <svg
        class="search_icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  </fragment>
</template>
<script>
export default {
  data() {
    return {
      form: {
        user_type: "",
        query: ""
      }
    };
  }
};
</script>
