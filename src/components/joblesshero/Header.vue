<script setup>
const headerList = [
  { id: 1, name: "Home" },
  { id: 2, name: "Discover" },
  { id: 3, name: "Post a Job" },
  { id: 4, name: "Contact Us" },
];
</script>

<template>
  <header class="mx-auto w-[1000px] pt-10 grid grid-cols-5 gap-8 items-center">
    <div class="">
      <span class="font-semibold text-[22px] font-['Poppins']">Jobless</span>
    </div>
    <div class="col-span-3">
      <ul class="items-center flex justify-center gap-8">
        <li
          v-for="list in headerList"
          :key="list.id"
          :class="
            list.id === 1
              ? 'text-black font-medium'
              : 'text-black/70 font-normal hover:text-black'
          "
          class="text-base"
        >
          <a href="#">{{ list.name }}</a>
        </li>
      </ul>
    </div>
    <div class="grid place-content-end">
      <button
        type="button"
        class="border border-gray-300 rounded-sm font-semibold text-base px-4 py-1"
      >
        Sign Up
      </button>
    </div>
  </header>
</template>
