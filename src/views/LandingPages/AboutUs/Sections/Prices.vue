<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
import CenteredBlogCard from '../../../../examples/cards/blogCards/CenteredBlogCard.vue';
import noob from '../../../../assets/img/plans/noob.png'
import bro from '../../../../assets/img/plans/brother.png'
import moon from '../../../../assets/img/plans/moon.png'
import diamond from '../../../../assets/img/plans/diamond.png'
import satoshi from '../../../../assets/img/plans/satoshi.png'

const slides = [
  { id: '1', title: 'DCA Noob', content: '$10/month', image: noob, url: 'https://buy.stripe.com/28o4jq9i4gyhaty5kk' },
  { id: '2', title: 'Crypto Bro', content: '$100/month', image: bro, url: 'https://buy.stripe.com/bIYbLS0Lyfud7hmaEF' },
  { id: '3', title: 'Moon Boy', content: '$500/month' , image: moon, url: 'https://buy.stripe.com/bIY5nu8e04PzcBGcMO' },
  { id: '4', title: 'Diamond Hands', content: '$1000/month' , image: diamond, url: 'https://buy.stripe.com/dR6aHO2TGci159e5kn' },
  { id: '5', title: 'Satoshi Nakamoto', content: '$5000/month' , image: satoshi, url: 'https://buy.stripe.com/aEUg281PC1Dn9puaEI' },
]
</script>

<!--
<template>
  <section class="py-7">
    <div class="container">
      <Carousel :itemsToShow="3.95" :wrapAround="true" :transition="500">
          <Slide v-for="slide in 5" :key="slide">
            <CenteredBlogCard
              image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              title="Get insights on Search"
              description="Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards." />
          </Slide>
        </Carousel>
    </div>
  </section>
</template>
-->


<template>
  <section class="py-3">
    <div class="container" id="prices">
      <h3 class="mb-0" style="text-align: center; padding-top: 20px;">Choose the plan that better suits you</h3>
      <Carousel>
        <Slide v-for="slide in slides" :key="slide.id">
          <div class="carousel__item">
            <div class="col-lg-4 ms-auto me-auto mt-lg-0 mt-6">
              <CenteredBlogCard
                :image=slide.image
                :title=slide.title 
                :action="{route: slide.url, label:'Subscribe', color: 'bg-gradient-success'}"
                :description=slide.content />
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<style>
.carousel__item {
  margin-top: 5%;
  min-height: 200px;
  width: 100%;
  font-size: 20px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 1px solid lightgrey;
  background-color: #85FFBD;
  background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
  border-radius: 20px;
}

.carousel__pagination {
  transform: translateX(-15px);
}
</style>
