<script setup>
defineProps({
  embedUrl: String,
});
</script>

<template>
  <div
    class="mt-20 border-4 border-black shadow-solid shadow-black min-h-[550px] bg-black"
  >
    <iframe width="100%" :src="embedUrl" class="aspect-[16/8]"></iframe>
  </div>
</template>
