<script setup>
import Available from "@/components/priced/Available.vue";
import NotAvailable from "@/components/priced/NotAvailable.vue";

defineProps({
  features: Array,
});
</script>

<template>
  <div
    v-for="(feature, index) in features"
    :key="index"
    class="flex items-center gap-2 mt-4"
  >
    <NotAvailable v-if="feature.available !== true" />
    <Available v-else />
    <p class="font-medium text-base text-black/60">{{ feature.name }}</p>
  </div>
</template>
