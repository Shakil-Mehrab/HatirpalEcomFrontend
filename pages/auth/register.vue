<template>
  <div class="container">
    <div class="login_center_div">
      <div class="login">
        <h5 class="text-center">Register Form</h5>

        <form >
          <div class="form-group col-12 login_field">
            <label for=""><h6>Name</h6></label>
            <input
              type="text"
              name="name"
              class="form-control"
              placeholder="Your Name"
            />
          </div>
          <div class="form-group col-12 login_field">
            <label for=""><h6>Email Address</h6></label>
            <input
              type="email"
              name="email"
              class="form-control"
              placeholder="Your Email"
            />
          </div>
          <div class="form-group col-12 login_field">
            <label for=""><h6>Password</h6></label>

            <input
              type="pasword"
              name="password"
              class="form-control"
              placeholder="Password"
            />
          </div>
          <div class="form-group col-12 login_field">
            <label for=""><h6>Confirm Password</h6></label>
            <input
              type="confirm_password"
              name="confirm_password"
              class="form-control"
              placeholder="Confirm Password"
            />
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