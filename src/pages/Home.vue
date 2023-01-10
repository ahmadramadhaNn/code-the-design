<script setup>
import ProjectCard from "@/components/home/ProjectCard.vue";

import projectData from "@/data/projectData";
</script>

<template>
  <main class="bg-[#1F4290] min-h-screen font-['Fredoka_One']">
    <div class="mx-auto max-w-6xl grid gap-8 pt-12">
      <ProjectCard :project-data="projectData" />
    </div>
  </main>
</template>
