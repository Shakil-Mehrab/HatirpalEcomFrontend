<template>
  <div class="container-fluid">
    <div class="login_center_div">
      <div class="login">
        <h5 class="text-center">Login Form</h5>
        <form action="" @submit.prevent="signin">
          <div class="form-group col-12 login_field">
            <label for=""><h6>Email Address</h6></label>
            <input
              type="email"
              v-model="form.email"
              class="form-control"
              placeholder="Your Email"
            />
          </div>
          <div class="form-group col-12 login_field">
            <label for=""><h6>Password</h6></label>

            <input
              type="pasword"
              v-model="form.password"
              class="form-control"
              placeholder="Password"
            />
          </div>
          <div class="col-12 my-4">
            <input
              type="submit"
              class="form-control btn btn-success"
              value="Login"
            />
          </div>
          <div class="col-md-12 already_have_account">
            <nuxt-link :to="{ path: '/auth/register' }" exact
              >Don't have an account? Register</nuxt-link
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  middleware: [
    'redirectIfAuthenticated'
  ],
  methods: {
    async signin() {
      await this.$auth.loginWith("laravelSanctum", {
        data: this.form
      });
      if (this.$route.query.redirect) {
        this.$router.replace(this.$route.query.redirect);
        return;
      }
      this.$router.replace({
        name: "index"
      });
    }
  }
};
</script>
