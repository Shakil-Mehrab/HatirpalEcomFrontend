<template>
  <div class="container-fluid">
    <div class="login_center_div">
      <div class="login">
        <h5 class="text-center">Login Form</h5>
        <form action="#" @submit.prevent="signin">
          <div class="row">
          <div class="form-group col-12 login_field">
            <label for="email" class="control-label"><h6>Email Address</h6></label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              class="form-control"
              placeholder="Your Email"
            />
          </div>
          <span class="help-block" v-if="loginerror">
              <strong style="color: red;margin-left:23%">{{ loginerror.email }}</strong>
          </span>
          </div>
          <div class="row">
          <div class="form-group col-12 login_field">
            <label for="password" class="control-label"><h6>Password</h6></label>

            <input
              type="password"
              id="password"
              v-model="form.password"
              class="form-control"
              placeholder="Password"
            />
          </div>
          <span class="help-block" v-if="loginerror">
              <strong style="color: red;margin-left:23%">{{ loginerror.password }}</strong>
          </span>
          </div>
           <div class="col-md-12 text-center my-2" v-if="loginerror">
            <strong style="color: red">{{ loginerror.loginfailed }}</strong>
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
      loginerror: "",
      form: {
        email: "",
        password: "",
      },
    };
  },
  middleware: ["redirectIfAuthenticated"],
  methods: {
    async signin() {
      try {
        await this.$auth.loginWith("laravelSanctum", {
          data: this.form,
        });
        
        if (this.$route.query.redirect) {
          this.$router.replace(this.$route.query.redirect);
          return;
        }
         this.$router.replace({
          path: "/",
        });
        // this.$router.replace({
        //   name: "index",
        // });
      } catch (e) {
        this.loginerror = e.response.data.errors;
      }
    },
  },
};
</script>
