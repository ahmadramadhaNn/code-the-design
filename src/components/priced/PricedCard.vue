<script setup>
import FeatureList from "@/components/priced/FeatureList.vue";

defineProps({
  featureList: Array,
});
</script>

<template>
  <article
    v-for="(feature, index) in featureList"
    :key="index"
    class="border border-gray-300 max-h-full rounded-b-md bg-white shadow-sm p-5 relative"
  >
    <div
      v-if="feature.recommended"
      class="absolute left-0 -top-8 rounded-tr-lg grid place-content-center rounded-tl-lg w-full h-8 bg-[#160E4B]"
    >
      <p class="text-center font-bold text-[10px] uppercase text-white">
        recommended
      </p>
    </div>
    <p class="text-[#160E4B] text-base font-bold">{{ feature.featureType }}</p>
    <p id="price" class="font-bold text-[40px]">
      ${{ feature.price }} <span class="text-sm text-black/60">/month</span>
    </p>
    <p id="desc" class="text-sm font-normal text-black/60 mt-3">
      {{ feature.desc }}
    </p>
    <button
      type="button"
      class="bg-[#7C67FE] text-white text-center font-medium text-sm mt-8 w-full py-2.5 rounded-md"
    >
      Get Started
    </button>
    <div class="mt-8">
      <p class="font-medium text-sm text-black/60">Features</p>
      <FeatureList :features="feature.features" />
    </div>
  </article>
</template>
