<template>
  <form action="#" @submit.prevent="store">
    <div class="row">
      <div class="form-group col-md-4 mb-2">
        <label for="name" class="control-label">Country</label>
        <select
          class="form-control"
          v-model="form.country"
          id="country"
          @change.prevent="getDivision()"
        >
          <template v-if="countries.length">
            <option value="">Select One</option>
            <option
              :value="country.slug"
              v-for="country in countries"
              :key="country.id"
            >
              {{ country.name }}
            </option>
          </template>
            <template v-else>
            <option value="">No Country</option>
          </template>
        </select>
        <div>
          <span class="help-block" v-if="createAddressError.country">
            <strong style="color: red">{{ createAddressError.country }}</strong>
          </span>
        </div>
      </div>
      <div class="form-group col-md-4 mb-2">
        <label for="name" class="control-label">Division</label>
        <select
          class="form-control"
          v-model="form.division"
          id="division"
          @change.prevent="getDistrict()"
        >
          <template v-if="divisions.length">
            <option value="">Select One</option>
            <option
              :value="division.slug"
              v-for="division in divisions"
              :key="division.id"
            >
              {{ division.name }}
            </option>
          </template>
          <template v-else>
            <option value="">Select a Country</option>
          </template>
        </select>
        <div>
          <span class="help-block" v-if="createAddressError.division">
            <strong style="color: red">{{
              createAddressError.division
            }}</strong>
          </span>
        </div>
      </div>
      <div class="form-group col-md-4 mb-2">
        <label for="name" class="control-label">District</label>
        <select
          class="form-control"
          v-model="form.district"
          id="district"
          @change.prevent="getDelivary_place()"
        >
        <template v-if="districts.length">
          <option value="">Select One</option>
          <option
            :value="district.slug"
            v-for="district in districts"
            :key="district.id"
          >
            {{ district.name }}
          </option>
        </template>
         <template v-else>
            <option value="">Select a Division</option>
          </template>
        </select>
        <div>
          <span class="help-block" v-if="createAddressError.district">
            <strong style="color: red">{{
              createAddressError.district
            }}</strong>
          </span>
        </div>
      </div>
      <div class="form-group col-md-4 mb-2">
        <label for="name" class="control-label">Delivery Place</label>
        <select
          class="form-control"
          v-model="form.delivery_place"
          id="delivery_place"
        >
          <template v-if="delivary_places.length">
          <option value="">Select One</option>
          <option
            :value="delivary_place.slug"
            v-for="delivary_place in delivary_places"
            :key="delivary_place.id"
          >
            {{ delivary_place.name }}
          </option>
          </template>
          <template v-else>
            <option value="">Select a District</option>
          </template>
        </select>

        <div>
          <span class="help-block" v-if="createAddressError.delivery_place">
            <strong style="color: red">{{
              createAddressError.delivery_place
            }}</strong>
          </span>
        </div>
      </div>
      <div class="form-group col-md-4 mb-2">
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
       <div class="form-group col-md-4 mb-2">
        <label for="name" class="control-label">Expense</label>
        <input
          type="text"
          class="form-control"
          placeholder="Expense"
          v-model="form.expense"
          disabled
        />
        <div>
          <span class="help-block" v-if="createAddressError.expense">
            <strong style="color: red">{{
              createAddressError.expense
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
            <strong style="color: red">{{ createAddressError.address }}</strong>
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
      countries: [],
      divisions: [],
      districts: [],
      delivary_places: [],
      createAddressError: "",
      form: {
        country: "",
        division: "",
        district: "",
        delivery_place: "",
        postal_code: "",
        address: "",
        expense: null,
        default: "true",
      },
    };
  },
  components: {
    // CountryDropdown
  },
  watch:{
    'form.country'(addressId){
      this.form.division=""
    },
    'form.division'(addressId){
      this.form.district=""
    },
     'form.district'(addressId){
      this.form.delivery_place=""
      this.form.expense=null

    },
  },
  methods: {
    async getCountries() {
      let response = await this.$axios.$get("api/country?countries=Bangladesh");
      this.countries = response.data;
    },
    async getDivision() {
      if (this.form.country) {
        let response = await this.$axios.$get(
          `api/region/${this.form.country}`
        );
        this.divisions = response.data;
      } else {
        this.divisions = [];
      }
    },
    async getDistrict() {
      if (this.form.division) {
        let response = await this.$axios.$get(
          `api/region/${this.form.division}`
        );
        this.districts = response.data;

      } else {
        this.districts = [];
      }
    },
    async getDelivary_place() {
      if (this.form.district) {
        let response = await this.$axios.$get(
          `api/region/${this.form.district}`
        );
        this.delivary_places = response.data;
        this.form.expense = response.meta.expense;

      } else {
        this.delivary_places = [];
      }
    },
    async store() {
      try {
        let response = await this.$axios.$post("/api/address", this.form);
        this.$emit("created", response.data);
      } catch (e) {
        this.createAddressError = e.response.data.errors;
      }
    },
  },
  created() {
    this.getCountries();
  },
};
</script>
