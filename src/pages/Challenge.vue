<script setup>
import projectData from "@/data/projectData";
import EmbedFigma from "@/components/challenge/EmbedFigma.vue";
import FullDesc from "@/components/challenge/FullDesc.vue";
import HowToStart from "@/components/challenge/HowToStart.vue";
import Visit from "@/components/challenge/Visit.vue";

import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";

const { slug } = useRoute().params;

const singleProject = computed(() => {
  return projectData.filter((item) => item.projectName.toLowerCase() == slug);
});
</script>

<template>
  <div id="challenge_container" class="min-h-screen bg-[#1F4290]">
    <div class="max-w-[1150px] mx-auto pt-20">
      <router-link
        to="/"
        class="text-5xl text-[#ffd466] italic font-['Fredoka_One'] uppercase"
      >
        code the design
      </router-link>
      <p
        class="max-w-[300px] leading-10 mb-3 font-['Patrick_Hand'] font-normal text-2xl text-[#ffd466]"
      >
        Level up your coding skills with hands-on design challenges.
      </p>
      <a
        href="#"
        target="_blank"
        class="underline text-xl font-normal font-['Patrick_Hand'] text-[#ffd466]"
        >Source on Github</a
      >
      <EmbedFigma :embed-url="singleProject[0].embedFigmaUrl" />
      <div class="grid grid-cols-3 gap-14 mt-24">
        <div
          class="border-4 border-black shadow-solid shadow-black min-h-[400px] bg-[#dbd6ff] col-span-2 p-20"
        >
          <FullDesc
            :project-name="singleProject[0].projectName"
            :full-desc="singleProject[0].fullDesc"
          />
          <HowToStart />
        </div>
        <div class="grid">
          <div
            class="border-black border-4 w-full shadow-solid shadow-black bg-[#ffd466] max-h-[300px] p-10"
          >
            <a
              :href="singleProject[0].figmaUrl"
              target="_blank"
              type="button"
              class="text-2xl text-black font-['Patrick_Hand'] font-normal text-center w-full bg-[#2ae876] py-3 flex justify-center items-center gap-3 border-2 border-black"
            >
              <img src="@/assets/download.svg" alt="" />
              <a href="#" class="text-center">Download Design</a>
            </a>
            <Visit :url="singleProject[0].url" />
            <div class="grid place-content-center mt-4">
              <a
                href="#"
                class="text-lg text-black font-['Patrick_Hand'] font-normal"
                >Read The License</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
