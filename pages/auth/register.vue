<template>
  <div class="container">
    <div class="login_center_div">
      <div class="login">
        <h5 class="text-center">Register Form</h5>
        <form action="" @submit.prevent="register">
          <div class="row">
            <div
              class="form-group col-12 login_field"
              :class="loginerror.name  ? 'has-error' : ''"
            >
              <label for="name" class="control-label"><h6>Name</h6></label>
              <input
                type="text"
                v-model="form.name"
                id="name"
                class="form-control"
                placeholder="Your Name"
              />
            </div>
            <span class="help-block" v-if="loginerror">
              <strong style="color: red;margin-left:23%">{{ loginerror.name }}</strong>
          </span>
          </div>
          <div class="row">
            <div class="form-group col-12 login_field" :class="loginerror.email  ? 'has-error' : ''">
              <label for="email" class="control-label"
                ><h6>Email Address</h6></label
              >
              <input
                type="email"
                v-model="form.email"
                id="email"
                class="form-control"
                placeholder="Your Email"
              />
            </div>
           <span class="help-block" v-if="loginerror">
              <strong style="color: red;margin-left:23%">{{ loginerror.email }}</strong>
          </span>
          </div>
          <div class="row">
            <div class="form-group col-12 login_field" :class="loginerror.password  ? 'has-error' : ''">
              <label for="password" class="control-label"
                ><h6>Password</h6></label
              >
              <input
                type="password"
                v-model="form.password"
                id="password"
                class="form-control"
                placeholder="Password"
              />
            </div>
            <span class="help-block" v-if="loginerror">
              <strong style="color: red;margin-left:23%">{{ loginerror.password }}</strong>
          </span>
          </div>
          <div class="row">
            <div class="form-group col-12 login_field" >
              <label for="password_confirmation" class="control-label"
                ><h6>Confirm Password</h6></label
              >
              <input
                type="password"
                v-model="form.password_confirmation"
                id="password-confirm"
                class="form-control"
                placeholder="Confirm Password"
              />
            </div>
            
          </div>
          <div class="col-12 my-4">
            <input
              type="submit"
              class="form-control btn btn-success"
              value="Register"
            />
          </div>
        </form>
        <div class="col-md-12 already_have_account">
          <nuxt-link :to="{ path: '/auth/login' }" exact
            >Already have an account? Login</nuxt-link
          >
        </div>
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
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
    };
  },
  middleware: [
    "redirectIfAuthenticated"
  ],
  methods: {
    async register() {
      try {
        await this.$auth.loginWith("laravelSanctumRegister", {
          data: this.form,
        });
        if (this.$route.query.redirect) {
          this.$router.replace(this.$route.query.redirect);
          return;
        }
         this.$router.replace({
          name: "index",
        });
      } catch (e) {
        this.loginerror = e.response.data.errors;
        
      }
    },
  },
};
</script>