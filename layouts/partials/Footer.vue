<template>
  <footer class="bg-white">
    <div class="go_to_top">
      <a href="#"> Go to Top</a>
    </div>
    <div class="container">
      <div class="row py-2">
        <div class="col-6 company_name my-2">
         Hatirpal.com
        </div>
        <div class="col-6 social_icon my-2">
        <a href=""><i class="fab fa-facebook-square"></i></a>
         <a href=""><i class="fab fa-twitter-square"></i></a>
         <a href=""><i class="fab fa-instagram-square"></i></a>
         <a href=""><i class="fab fa-youtube-square"></i></a>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-sm-6 col-6">
            <h5>Customer Service</h5>
            <ul class="">
               <li>
                <nuxt-link :to="{name:'contact'}">Help Center</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="{name:'contact'}">Contact Us</nuxt-link>
              </li>
                <li>
                <nuxt-link class="brand_color" :to="{name:'condition'}">Terms and Condition</nuxt-link>
              </li>
               <li>
                <nuxt-link :to="{name:'howto'}">How to Order</nuxt-link>
              </li>
               <li>
                <nuxt-link :to="{name:'moneyback'}">Moneyback Guarantee</nuxt-link>
              </li>
              
             
              
            </ul>
        </div>
        <div class="col-md-3 col-sm-6 col-6">
            <h5>About Us</h5>
            <ul class="">
              <li>
                <nuxt-link :to="{name:'about'}">About Hatirpal</nuxt-link>
              </li>
               <li>
                <nuxt-link :to="{name:'auth-signin'}">Sign In</nuxt-link>
              </li>
              <li>
                <nuxt-link :to="{name:'auth-register'}">Sign Up</nuxt-link>
              </li>
            </ul>
        </div>
        <div class="col-md-3 col-sm-6 col-6">
            <h5>Sale on Hatirpal</h5>
            <ul class="">
             <li>
                <nuxt-link :to="{name:'auth-signin'}">Supplier Membership</nuxt-link>
              </li>
            </ul>
        </div>
        <div class="col-md-3 col-sm-6 col-6">
            <h5>Address</h5>
            <ul class="">
              <li>
                <a href="#" class="text-xs">124 Cahudhuripara, Malibag,Dhaka</a>
              </li>
               <li>
                <a href="#" class="text-xs brand_color">01615336636</a>, 
                <a href="#" class="text-xs brand_color">01615336636</a>

                
              </li>
            </ul>
        </div>
      </div>
      <br />
      <div class="text-center text-xs">
        &copy; All Right Reserved By Hatirpal.com. Developed By:Md Shakil Sarder
      </div>
      <br />
    </div>
  </footer>
</template>
