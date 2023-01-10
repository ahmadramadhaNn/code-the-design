<script setup>
defineProps({
  projectName: String,
  fullDesc: String,
});
</script>

<template>
  <div id="full_desc">
    <p class="text-4xl text-black font-normal font-['Fredoka_One']">
      {{ projectName }}
    </p>
    <p class="font-['Patrick_Hand'] text-lg text-black/60 mt-5">
      {{ fullDesc }}
    </p>
  </div>
</template>
