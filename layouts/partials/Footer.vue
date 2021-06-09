<template>
  <footer class="bg-white">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-6 col-6" v-for="n in 4" :key="n">
            <h5>About PressRoom</h5>
            <ul class="">
              <li v-for="n in 5" :key="n">
                <a href="#" class="text-xs">33 Farlane Street</a>
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
