<template>
  <form action="#" @submit.prevent="store">
    <div class="row">
      <div class="form-group col-md-6">
        <label for="name" class="control-label">Name</label>
        <input
          type="text"
          class="form-control"
          placeholder="Name"
          v-model="form.name"
        />
      </div>
      <div class="form-group col-md-6">
        <label for="name" class="control-label">Name</label>
        <input
          type="file"
          class="form-control"
        />
      </div>

      <div class="mt-2">
        <input
          type="submit"
          value="Add a Payment Method"
          class="btn btn-success btn-sm"
        />

        <a href="#" class="brand_button" @click.prevent="$emit('cancel')"
          >Cancel</a
        >
      </div>
    </div>
  </form>
</template>
<script>
// import CountryDropdown from "@/components/form/CountryDropdown";
export default {
  data() {
    return {
      form: {
        name: "",
        address_1: "",
        city: "",
        postal_code: "",
        country_id: "",
        default: "true",
      },
    };
  },
  components: {
    // CountryDropdown
  },
  methods: {
    async store() {
      let response = await this.$axios.$post("addresses", this.form);
      this.$emit("created", response.data);
    },
  },
};
</script>
