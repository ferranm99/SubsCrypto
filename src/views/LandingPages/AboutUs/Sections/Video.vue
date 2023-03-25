<script setup>
</script>

<template>
  <section class="pb-5 position-relative bg-gradient-dark mx-n3">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-md-8 text-start mb-5 mt-5">
          <h3 class="text-white text-center z-index-1 position-relative">
            The power of Dollar Cost Average
          </h3>
          <p class="text-white text-center opacity-8 mb-0">
            Dollar cost averaging takes the emotion out of investing by having you purchase the same small amount of an
            asset regularly.
            It works because over the long term, asset prices tend to rise. Specially that of Bitcoin.
          </p>
        </div>
      </div>
    <div class="row">
      <div class="vidContainer">
        <!--<iframe 
                class="responsive-iframe"
                src="https://www.youtube.com/embed/5a_KBd-9EMY" 
                title="DCA explained" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe> -->
          <video class="responsive-iframe" poster="@/assets/img/thumbnail.jpg" width="100%" height="100%" controls>
            <source src="@/assets/img/dca_trim.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.vidContainer {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
  /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
}

/* Then style the iframe to fit in the container div with full height and width */
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  padding-left: 5%;
  padding-right: 5%;
}
</style>
