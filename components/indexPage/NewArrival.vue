<template>
  <div class="col-md-4">
    <div class="new_arrival">
      <h6>
        <svg
          style="width: 12px"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
        New Arrivals
      </h6>
      <ul>
        <li v-for="m in 3" :key="m" class="hover_shadow">
          <a href="">
            <!-- <img src="//i.alicdn.com/img/imgextra/i1/O1CN01ypfQ2q1zTydNAQ99D_!!6000000006716-0-tps-1000-1000.jpg_100x100.jpg" class="w-full transform hover:scale-110 transition ease-out duration-1000" alt=""> -->
            <!-- <img :src="art.image" alt="Awesome Image" /> -->
            <!-- backgroundImage: 'url(' + art.image + ')', -->
            <div
              class="exh-cover-img hover_increase"
              style="min-height: 100px"
              :style="{
                backgroundImage:
                  'url(' +
                  '//i.alicdn.com/img/imgextra/i1/O1CN01ypfQ2q1zTydNAQ99D_!!6000000006716-0-tps-1000-1000.jpg_100x100.jpg' +
                  ')',
                backgroundColor: '#f7f7f7',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain'
              }"
            ></div>
            <div class="text-center px-1">
              <p class="mb-1">120 BDT</p>
              <h6>Trending Now</h6>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
