<script setup>
// example components
import DefaultInfoCard from "../../../../examples/cards/infoCards/DefaultInfoCard.vue";
import CenteredBlogCard from "../../../../examples/cards/blogCards/CenteredBlogCard.vue";
</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row align-items-center">
        <h2 class="mb-0" style="transform: translateY(-20px)">How does it work?</h2>
        <div class="col-lg-6">
          <div class="row justify-content-start">
            <DefaultInfoCard
              color="info"
              icon="money"
              title="Select monthly $ amount"
              description="You can choose between 10, 100, 1K, 5K, 10K dollars/mo"
            />
            <DefaultInfoCard
              color="info"
              icon="wallet"
              title="Enter your Bitcoin address"
              description="Fill a simple form indicating your BTC wallet addressS"
            />
          </div>
          <div class="row justify-content-start mt-4">
            <DefaultInfoCard
              color="info"
              icon="payments"
              title="Pay with your card"
              description="It is as easy as buying a Netflix or Spotify subscription"
            />
            <DefaultInfoCard
              color="info"
              icon="paid"
              title="Receive your coins!"
              description="The 28th of each month, you will get your corresponding amount of BTC"
            />
          </div>
        </div>
        <div class="col-lg-4 ms-auto mt-lg-0 mt-6">
          <CenteredBlogCard
            image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            title="Get insights on Search"
            description="Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards."
          />
        </div>
      </div>
    </div>
  </section>
</template>
