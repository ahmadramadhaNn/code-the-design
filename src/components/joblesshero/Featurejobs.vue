<script setup>
import FeatureCard from "@/components/joblesshero/FeatureCard.vue";

const jobs = [
  {
    id: 1,
    jobTitle: "Front-End Developer",
    company: "Figma",
    jobDesc:
      "We are looking for an experienced front-end developer to join our team.",
    stack: "Rust",
    salary: "70,000 - 90,000",
  },
  {
    id: 2,
    jobTitle: "Data Scientist",
    company: "Facebook",
    jobDesc: "We are seeking a data scientist to join our team.",
    stack: "Python",
    salary: "100,000 - 130,000",
  },
  {
    id: 3,
    jobTitle: "Technical Writer",
    company: "Vercel",
    jobDesc: "We are seeking a technical writer to join our team.",
    stack: "Documentation",
    salary: "60,000 - 80,000",
  },
];
</script>

<template>
  <div class="mx-auto w-[1000px] mt-20">
    <span class="font-semibold text-base">Featured Jobs</span>
    <div class="grid grid-cols-3 gap-7 mt-7">
      <FeatureCard :jobs="jobs" />
    </div>
  </div>
</template>
