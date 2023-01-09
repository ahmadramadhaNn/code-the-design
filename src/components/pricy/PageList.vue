<script setup>
defineProps({
  pageList: Array,
});
</script>

<template>
  <div class="col-span-2 grid place-content-center">
    <ul class="flex items-center gap-10">
      <li v-for="(data, index) in pageList" :key="index">
        <a
          href="#"
          :class="
            data.id == 3 ? 'font-bold text-black' : 'font-normal text-black/80'
          "
          class="text-base"
          >{{ data.name }}</a
        >
      </li>
    </ul>
  </div>
</template>
