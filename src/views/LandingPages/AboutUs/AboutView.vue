<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import DefaultFooter from "../../../examples/footers/FooterDefault.vue";

//image
import bg0 from "@/assets/img/back4.jpeg";

//dep
import Typed from "typed.js";

//sections
import Information from "./Sections/AboutInformation.vue";
import Video from "./Sections/Video.vue";
import Prices from "./Sections/Prices.vue";
import SimpleNavbar from "../../../examples/navbars/SimpleNavbar.vue";

const body = document.getElementsByTagName("body")[0];
//hooks
onMounted(() => {
  body.classList.add("about-us");
  body.classList.add("bg-gray-200");

  if (document.getElementById("typed")) {
    // eslint-disable-next-line no-unused-vars
    var typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 90,
      backSpeed: 90,
      backDelay: 200,
      startDelay: 500,
      loop: true,
    });
  }
});

onUnmounted(() => {
  body.classList.remove("about-us");
  body.classList.remove("bg-gray-200");
});

//Subscribe to the power of bitcoin/crypto/DCA (!)
//SBitcoin as simple as Netflix/Spotify/Twitch
function nav() {
    document.getElementById('imageclick').click()
}
</script>
<template>
  <!--<DefaultNavbar :action="{
      route: 'javascript:;',
      label: 'Buy !',
      color: 'btn-white',
    }" transparent /> -->
  <SimpleNavbar />
  <header class="bg-gradient-dark">
    <div class="page-header min-vh-75" :style="{ backgroundImage: `url(${bg0})` }">
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white">
              Subscribe to the power of <span class="text-white" id="typed"></span>
            </h1>
            <div id="typed-strings">
              <h1>Bitcoin</h1>
              <h1>DCA</h1>
              <h1>Crypto</h1>
            </div>
            <p class="lead mb-4 text-white opacity-8">
              We believe that doing Dollar Cost Average should be as easy as paying for Netflix.<br>
              So we made it possible.
            </p>
            <button type="submit" @click="nav" class="btn btn-success">
              Start Now
            </button>
            <h6 class="text-white mb-2 mt-5">Find us on</h6>
            <div class="d-flex justify-content-center">
              <a href="https://www.producthunt.com/posts/subscrypto" target="_blank"><i class="fab fa-product-hunt text-lg text-white me-4"></i></a>
              <a href="https://news.ycombinator.com/item?id=35413093" target="_blank"><i class="fab fa-hacker-news text-lg text-white me-4"></i></a>
              <a href="https://www.indiehackers.com/product/subscrypto" target="_blank"><i class="fas text-lg text-white">IH</i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <Information />
    <Video id="video"/>
    <Prices />
  </div>
  <DefaultFooter />
</template>

<style scoped></style>