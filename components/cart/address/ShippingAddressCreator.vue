<template>
  <form action="#" @submit.prevent="store">
    <div class="row">
      <div class="">
        <input
          type="text"
          class="form-control"
          placeholder="Expense"
          v-model="form.expense"
          style="display:none"
        />
      </div>

      <div class="form-group col-md-4">
        <label for="name" class="control-label">Country</label>
        <select class="form-control" v-model="form.country" id="country">
          <option value="">Select One</option>
          <option value="bangladesh">Bangladesh</option>
        </select>
        <div>
          <span class="help-block" v-if="createAddressError.country">
            <strong style="color: red">{{
              createAddressError.country
            }}</strong>
          </span>
        </div>
      </div>
      <div class="form-group col-md-4">
        <label for="name" class="control-label">Division</label>
        <select class="form-control" v-model="form.division" id="division">
          <option value="">Select One</option>
          <option value="dhaka">Dhaka</option>
        </select>
        <div>
          <span class="help-block" v-if="createAddressError.division">
            <strong style="color: red">{{
              createAddressError.division
            }}</strong>
          </span>
        </div>
      </div>
      <div class="form-group col-md-4">
        <label for="name" class="control-label">District</label>
        <select class="form-control" v-model="form.district" id="district">
          <option value="">Select One</option>
          <option value="gopalgonj">GopalGonj</option>
        </select>
        <div>
          <span class="help-block" v-if="createAddressError.district">
            <strong style="color: red">{{
              createAddressError.district
            }}</strong>
          </span>
        </div>
      </div>
      <div class="form-group col-md-4">
        <label for="name" class="control-label">Delivery Place</label>
        <select
          class="form-control"
          v-model="form.delivery_place"
          id="delivery_place"
        >
          <option value="">Select One</option>
          <option value="jalirpur">Jalirpur</option>
        </select>
        <div>
          <span class="help-block" v-if="createAddressError.delivery_place">
            <strong style="color: red">{{
              createAddressError.delivery_place
            }}</strong>
          </span>
        </div>
      </div>
      <div class="form-group col-md-4">
        <label for="name" class="control-label">Postal Code</label>
        <input
          type="text"
          class="form-control"
          placeholder="Postal Code"
          v-model="form.postal_code"
        />
        <div>
          <span class="help-block" v-if="createAddressError.postal_code">
            <strong style="color: red">{{
              createAddressError.postal_code
            }}</strong>
          </span>
        </div>
      </div>
      <div class="form-group col-md-12">
        <label for="name" class="control-label">Address</label>
        <input
          type="text"
          class="form-control"
          placeholder="Address Line 1"
          v-model="form.address"
        />
        <div>
          <span class="help-block" v-if="createAddressError.address">
            <strong style="color: red">{{
              createAddressError.address
            }}</strong>
          </span>
        </div>
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
      createAddressError:'',
      form: {
        country: "",
        division: "",
        district: "",
        delivery_place: "",
        postal_code: "",
        address: "",
        expense: 200,
        default: "true",
      },
    };
  },
  components: {
    // CountryDropdown
  },
  methods: {
    async store() {
      try{
        let response = await this.$axios.$post("/api/address", this.form);
        console.log(this.form)
        this.$emit("created", response.data);
      }
      catch(e){
        this.createAddressError=e.response.data.errors
      }
      
    },
  },
};
</script>
