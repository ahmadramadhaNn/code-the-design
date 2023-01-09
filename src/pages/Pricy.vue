<script setup>
import Header from "@/components/pricy/Header.vue";
import Hero from "@/components/pricy/Hero.vue";
import PricingCard from "@/components/pricy/PricingCard.vue";

import pricingData from "@/data/pricingData";
</script>

<template>
  <div class="font-['DM_Sans'] pb-32">
    <div id="pricy_container" class="h-[600px]">
      <Header />
      <Hero />
      <div
        id="content"
        class="mx-auto w-[1050px] grid grid-cols-3 gap-10 mt-14"
      >
        <PricingCard :pricing-data="pricingData" />
      </div>
    </div>
  </div>
</template>

<style scoped>
#pricy_container {
  background-color: rgba(218, 242, 255, 1);
}
</style>
