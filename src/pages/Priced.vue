<script setup>
import Header from "@/components/priced/Header.vue";
import Hero from "@/components/priced/Hero.vue";
import PricedCard from "@/components/priced/PricedCard.vue";

import featureData from "@/data/featureData";
</script>

<template>
  <div id="priced_container" class="min-h-[500px] font-['DM_Sans'] pb-14">
    <div class="max-w-[1150px] mx-auto pt-10">
      <Header />
      <Hero />
      <div class="grid grid-cols-3 place-items-start gap-10 mt-24">
        <PricedCard :feature-list="featureData" />
      </div>
    </div>
  </div>
</template>

<style scoped>
#priced_container {
  background: conic-gradient(
    from 180deg at 50% 50%,
    #5b41fb 0deg,
    #4456f8 176.25deg,
    #53acff 260.62deg,
    #573dfb 360deg
  );
}
</style>
