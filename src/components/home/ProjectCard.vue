<script setup>
const boxData = [
  { id: 1, position: "-left-2 -top-2" },
  { id: 2, position: "-right-2 -top-2" },
  { id: 3, position: "-left-2 -bottom-2" },
  { id: 4, position: "-right-2 -bottom-2" },
];

defineProps({
  projectData: Array,
});
</script>

<template>
  <article
    v-for="(project, index) in projectData"
    :key="index"
    :class="project.backgroundColor"
    class="border-4 border-black shadow-solid shadow-black xl:h-[510px] p-20"
  >
    <div class="flex gap-20">
      <div class="max-w-md">
        <p id="project_name" class="text-4xl font-normal text-black">
          {{ project.projectName }}
        </p>
        <p
          id="project_desc"
          class="text-xl text-black/60 font-normal font-['Patrick_Hand']"
        >
          {{ project.projectDesc }}
        </p>
        <router-link
          :to="{
            name: 'Challenge',
            params: {
              slug: project.projectName.toLowerCase(),
            },
          }"
          type="button"
          :class="project.buttonBgColor"
          class="text-center text-base flex items-center gap-3 text-black font-normal mt-8 max-w-[220px] pl-5 py-4 border-2 border-black"
        >
          View Challenge
          <img src="@/assets/right-arrow.svg" alt="" />
        </router-link>
      </div>
      <div class="border-4 border-black relative">
        <div
          v-for="(data, index) in boxData"
          :key="index"
          :class="data.position"
          class="absolute bg-white border-2 border-black w-3 h-3"
        ></div>
        <img :src="project.image" alt="project_image" />
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
