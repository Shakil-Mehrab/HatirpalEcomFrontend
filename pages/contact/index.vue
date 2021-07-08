<template>
  <div class="container bg-white mb-4">
    <div class="row py-2">
      <div class="col-md-12">
        <ul class="breadcrumb">
          <li>
            <nuxt-link :to="{ name: 'index' }">
              <i class="fa fa-home"></i> Home /
            </nuxt-link>
          </li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="page-title">
          <h3>Contact Us</h3>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.8442639328655!2d-71.10008329902021!3d42.34584359264178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e379f63dc43ccb%3A0xa15d5aa87d0f0c12!2s4+Yawkey+Way%2C+Boston%2C+MA+02215!5e0!3m2!1sen!2s!4v1475081210943"
          width="100%"
          height="350"
          frameborder="0"
          style="border: 0"
          allowfullscreen
        ></iframe>
        <div class="contact_div">
          <h6>Contact Us On</h6>
          <div class="contact_option">
            <ul>
              <li><i class="fa fa-home"></i> 124 Cahudhuripara, Malibag,Dhaka</li>
              <li><i class="fa fa-phone"></i> Phone : +8801400560808 , 01615336636</li>
              <li><i class="fa fa-envelope"></i> hatirpal.ecom@gmail.com</li>
            </ul>
            <ul>
              <li><i class="fab fa-facebook-square"></i></li>
              <li><i class="fab fa-twitter-square"></i></li>
              <li><i class="fab fa-instagram-square"></i></li>
              <li><i class="fab fa-youtube-square"></i></li>
            </ul>
          </div>
          <div class="phone form-group">
            
            <div class="text">
              <div style="margin-top: 8px">
                <div
                  class="fb-messengermessageus"
                  messenger_app_id="451585265723432"
                  page_id="403905747136771"
                  color="blue"
                  size="large"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>