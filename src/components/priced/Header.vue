<script setup>
import PageList from "@/components/priced/PageList.vue";

const pageList = [
  { id: 1, name: "Home" },
  { id: 2, name: "Product" },
  { id: 3, name: "Pricing" },
  { id: 4, name: "Contact Us" },
];
</script>

<template>
  <header class="grid grid-cols-4 items-center gap-10">
    <div class="">
      <p class="italic font-bold text-lg text-white">Strawrage</p>
    </div>
    <div class="grid place-content-center col-span-2">
      <PageList :page-list="pageList" />
    </div>
    <div class="grid place-content-end">
      <button
        type="button"
        class="bg-[#160E4B] text-white font-bold text-base rounded-md text-center px-3.5 py-1"
      >
        Sign Up
      </button>
    </div>
  </header>
</template>
