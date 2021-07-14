<template>
  <div class="row top_header">
    <div class="col-md-2 col-sm-12 logo">
      <nuxt-link :to="{ name: 'index' }">
        <img src="~/assets/images/logo.PNG" width="100%" alt="Logo" />
      </nuxt-link>
    </div>
    <div class="search col-md-6 col-sm-12">
      <SearchBar />
    </div>
    <div class="col-md-4 col-sm-12">
      <ul class="top_header_right">
        <li class="mx-2">
          <a
            href="http://localhost:8000/admin/userprofile"
            v-if="$auth.loggedIn"
          >
            <svg
              class="header_icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span class="top_right_option">
              {{ $auth.user.data.name }}
            </span>
          </a>
          <nuxt-link :to="{ name: 'auth-signin' }" class="flex" v-else>
            <svg
              class="header_icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span class="top_right_option">Sign In </span>
          </nuxt-link>
        </li>
        <li class="mx-2">
          <a href="">
            <svg
              class="header_icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span class="top_right_option">Messages</span>
          </a>
        </li>
        <li class="mx-2">
          <nuxt-link :to="{ name: 'order' }">
            <svg
              class="header_icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span class="top_right_option">Orders</span>
          </nuxt-link>
        </li>
        <li class="mx-2 cart_li">
          <nuxt-link :to="{ name: 'cart' }">
            <svg
              class="header_icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
              />
            </svg>
            <span class="top_right_option">Cart</span>
            <span class="top_right_option">({{ cartCount }})</span>
          </nuxt-link>
          <div class="header_cart_detail shadow-sm">
            <div class="com-md-12">
              <h6 class="text-center cart_heading">Your Cart</h6>
              <div v-for="n in 5" :key="n">
                <div class="text-center">
                  <img src="images/default/nature.jpeg" alt="" width="50%"/>
                </div>
                <h6 class="mt-2 text-center">This is test product</h6>
                <ul class="my-2">
                  <li>
                    <input 
                    class="form-control"
                      type="number"
                      min="33"
                      step="33"
                      v-model="quantity"
                    />
                  </li>
                  <li class="mx-2">
                    <select v-model="size_id" @change.prevent="size()" class="form-control">
                      <option value="">Select One</option>
                      <option
                        :value="1"
                        v-for="size in 5"
                        :key="size.id"
                      >
                        S
                      </option>
                    </select>
                  </li>
                  <li class="mx-2">
                   Price: 1200 TK
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import SearchBar from "@/layouts/partials/header/top/SearchBar";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
        quantity: "33",
        size_id: "1",
    };
  },
  components: {
    SearchBar,
  },
  computed: {
    ...mapGetters({
      cartCount: "cart/count",
    }),
  },
};
</script>
