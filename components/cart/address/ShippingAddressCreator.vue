<template>
  <form action="#" @submit.prevent="store">
    <div class="row">
      <div class="form-group col-md-4">
        <label for="name" class="control-label">Name</label>
        <input
          type="text"
          class="form-control"
          placeholder="Name"
          v-model="form.name"
        />
      </div>

      <div class="form-group col-md-4">
        <label for="name" class="control-label">Country</label>
        <select class="form-control" name="country_id" id="">
          <option value="">Select One</option>
          <option value="1">Bangladesh</option>
        </select>
      </div>
      <div class="form-group col-md-4">
        <label for="name" class="control-label">Division</label>
        <select class="form-control" name="division_id" id="">
          <option value="">Select One</option>
          <option value="1">Dhaka</option>
        </select>
      </div>
        <div class="form-group col-md-4">
        <label for="name" class="control-label">District</label>
        <select class="form-control" name="district_id" id="">
          <option value="">Select One</option>
          <option value="1">GopalGonj</option>
        </select>
      </div>
       <div class="form-group col-md-4">
        <label for="name" class="control-label">Delivery Place</label>
        <select class="form-control" name="place_id" id="">
          <option value="">Select One</option>
          <option value="1">Jalirpur</option>
        </select>
      </div>
      <div class="form-group col-md-4">
        <label for="name" class="control-label">Postal Code</label>
        <input
          type="text"
          class="form-control"
          placeholder="Postal Code"
          v-model="form.postal_code"
        />
      </div>
      <div class="form-group col-md-12">
        <label for="name" class="control-label">Address Line 1</label>
        <input
          type="text"
          class="form-control"
          placeholder="Address Line 1"
          v-model="form.address_1"
        />
      </div>

      <div class="mt-2">
        <input
          type="submit"
          value="Add Address"
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
