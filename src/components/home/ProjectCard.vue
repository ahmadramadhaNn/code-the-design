<script setup>
const boxData = [
  { id: 1, position: "-left-2 -top-2" },
  { id: 2, position: "-right-2 -top-2" },
  { id: 3, position: "-left-2 -bottom-2" },
  { id: 4, position: "-right-2 -bottom-2" },
];
</script>

<template>
  <article
    class="border-4 border-black shadow-solid shadow-black h-[510px] bg-[#DBD6FF] p-20"
  >
    <div class="flex gap-20">
      <div class="max-w-md">
        <p id="project_name" class="text-4xl font-normal text-black">Priced</p>
        <p
          id="project_desc"
          class="text-xl text-black/60 font-normal font-['Patrick_Hand']"
        >
          The Priced page is a key element of a cloud storage website, as it is
          where users can learn about th
        </p>
        <button
          type="button"
          class="text-center text-base flex items-center gap-3 text-black font-normal mt-8 bg-[#7C77fe] px-8 py-4 border-2 border-black"
        >
          View Challenge
          <img src="@/assets/right-arrow.svg" alt="" />
        </button>
      </div>
      <div
        class="rotate-1 border-4 border-black relative"
        style="box-shadow: 10px 10px 0px #7c77fe; transform: rotate(1deg)"
      >
        <div
          v-for="(data, index) in boxData"
          :key="index"
          :class="data.position"
          class="absolute bg-white border-2 border-black w-3 h-3"
        ></div>
        <img
          src="https://codedesign.dev/_next/image?url=%2Fpriced.png&w=640&q=75"
          alt="project_image"
          class="h-96"
        />
      </div>
    </div>
  </article>
</template>

<style>
.shadow-solid {
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-shadow-colored: 15px 15px 0var (--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), 15px 15px 0 #000;
}
</style>
