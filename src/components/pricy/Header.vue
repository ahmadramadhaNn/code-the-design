<script setup>
import Pagelist from "@/components/pricy/PageList.vue";

const pageList = [
  { id: 1, name: "Home" },
  { id: 2, name: "Product" },
  { id: 3, name: "Pricing" },
  { id: 4, name: "Contact Us" },
];
</script>

<template>
  <header class="mx-auto w-[1050px] pt-7 grid grid-cols-4 items-center gap-14">
    <div class="flex items-center gap-3">
      <div
        class="rounded-full bg-[#00A3FF] w-12 h-12 grid place-content-center"
      >
        <img src="@/assets/H.png" alt="" />
      </div>
      <p class="font-bold text-lg">Hoster</p>
    </div>
    <Pagelist :page-list="pageList" />
    <div class="grid place-content-end">
      <button
        type="button"
        class="bg-black hover:bg-black/80 text-center text-white font-bold text-base px-4 py-2 rounded-full"
      >
        My Account
      </button>
    </div>
  </header>
</template>
