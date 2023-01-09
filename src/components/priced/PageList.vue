<script setup>
defineProps({
  pageList: Array,
});
</script>

<template>
  <ul class="flex items-center gap-10">
    <li v-for="(list, index) in pageList" :key="index">
      <a
        :class="
          list.id === 3 ? 'text-white font-bold' : 'text-white/80 font-medium'
        "
        href="#"
        class="text-base"
        >{{ list.name }}</a
      >
    </li>
  </ul>
</template>
