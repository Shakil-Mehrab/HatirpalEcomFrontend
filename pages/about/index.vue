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
          <li><a href="#">About Us</a></li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h2 class="about-title">About Us</h2>
        <p>
          Online wholesale marketplace BD: hatirpal.com is the largest online
          wholesale marketplace in Bangladesh.This marketplace has been launched
          on 08 January, 2020 in Bangladesh. Hatirpal.com has been experimenting
          with and out to win the trust of buyers.Now it is the most famous and
          popular wholesale marketplace portal in Bangladesh for both online
          manufacturers and buyers.
        </p>
        <p></p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <template>
          <client-only>
            <carousel
              class="product-slider"
              :perPageCustom="[
                [350, 2],
                [768, 2],
                [992, 2],
                [1200, 2],
              ]"
              :loop="true"
              :navigationEnabled="true"
            >
              <slide>
                <div class="slide_content hover_shadow">
                  <div class="owner_img">
                    <a href="#">
                      <img
                        src="images/default/sagor.jpg"
                        alt="Image Client"
                        width="100%"
                      />
                    </a>
                  </div>
                  <div class="product_attribute">
                    <div class="member-info">
                      <h3>Shikto Sagor</h3>
                      <p>Owner/COO</p>
                      <p>Founder Of Hatirpal Online Wholesale Market Place</p>
                      <ul class="social_member">
                        <!-- <li class="social-icon google">
                          <a
                            target="_blank"
                            href="https://www.linkedin.com/in/shikto-sagor-133bb3186/"
                            title="RSS"
                          >
                        RSS
                          </a>
                        </li> -->
                        <li class="social-icon facebook">
                          <a
                            target="_blank"
                            href="https://www.facebook.com/shiktosagor.08/"
                            title="Facebook"
                          >
                            <i class="fab fa-facebook-square"></i> Facebook
                          </a>
                        </li>
                        <li class="social-icon twitter">
                          <a href="#" title="Twitter">
                            <i class="fab fa-twitter-square"></i> Twitter
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://www.instagram.com/shikto_sagor/"
                            title="Instagram"
                          >
                            <i class="fab fa-instagram-square"></i> Instagram
                          </a>
                        </li>

                        <li class="social-icon rss">
                          <a href="#" title="Google">
                            <i class="fab fa-google-plus"></i> Google
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </slide>
              <slide>
                <div class="slide_content hover_shadow">
                  <div class="owner_img">
                    <a href="#">
                      <img
                        src="images/default/shakil.jpg"
                        alt="Image Client"
                        width="100%"
                      />
                    </a>
                  </div>
                  <div class="product_attribute">
                    <div>
                      <h3>Shehzad Ahmed Shakil</h3>
                      <p>Owner/Developer</p>
                      <p>
                        Founder And Delveloper of Hatirpal Online Wholesale
                        Market Place
                      </p>
                      <ul class="social_member">
                        <!-- <li class="social-icon google">
                          <a
                            target="_blank"
                            href="https://www.linkedin.com/in/shakil-mehrab-8a972b165/"
                            title="RSS"
                          >
                        RSS
                          </a>
                        </li> -->
                        <li class="social-icon facebook">
                          <a
                            target="_blank"
                            href="https://www.facebook.com/profile.php?id=100014002519180"
                            title="Facebook"
                          >
                            <i class="fab fa-facebook-square"></i> Facebook
                          </a>
                        </li>
                        <li class="social-icon twitter">
                          <a
                            target="_blank"
                            href="https://twitter.com/Md_Shakil_Sard"
                            title="Twitter"
                          >
                            <i class="fab fa-twitter-square"></i> Twitter
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://www.instagram.com/Shakilmehrab/"
                            title="Instagram"
                          >
                            <i class="fab fa-instagram-square"></i> Instagram
                          </a>
                        </li>
                        <li class="social-icon rss">
                          <a href="#" title="Google">
                            <i class="fab fa-google-plus"></i> Google
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </slide>
            </carousel>
          </client-only>
        </template>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h6>Our Happy Client</h6>
        <template>
          <client-only>
            <carousel
              class="product-slider"
              :perPageCustom="[
                [350, 2],
                [768, 4],
                [992, 6],
                [1200, 8],
              ]"
              :loop="true"
              :navigationEnabled="true"
            >
              <slide v-for="n in 10" :key="n">
                <div class="slide_content hover_shadow">
                  <div class="owner_img">
                    <a href="#">
                      <img
                        src="images/default/sagor.jpg"
                        alt="Image Client"
                        width="100%"
                      />
                    </a>
                  </div>
                  <div class="product_attribute">
                    <h6>Sagor Mitra</h6>
                  </div>
                </div>
              </slide>
            </carousel>
          </client-only>
        </template>
      </div>
    </div>
  </div>
</template>
<style>
.product-slider .VueCarousel-navigation {
  position: absolute;
  width: 100%;
  justify-content: space-between;
  top: 45%;
  opacity: 1;
  transition: opacity 0.25s ease-in-out;
}
.product-slider .VueCarousel-navigation-button {
  color: #333;
}
.product-slider .VueCarousel-navigation-prev {
  left: 20px;
  background: #e7e9ec;
  border-radius: 3px;
  border-color: #adb1b8 #a2a6ac #8d9096;
  border-style: solid;
  border-width: 1px;
}
.product-slider .VueCarousel-navigation-next {
  right: 20px;
  background: #e7e9ec;
  border-radius: 3px;
  border-color: #adb1b8 #a2a6ac #8d9096;
  border-style: solid;
  border-width: 1px;
}
.product-slider .VueCarousel-navigation-button[data-v-453ad8cd]:focus {
  outline: black;
}
.product-slider .VueCarousel-dot-container {
  display: none !important;
}
</style>
