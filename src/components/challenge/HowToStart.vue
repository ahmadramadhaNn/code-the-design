<script setup>
const howToStartData = [
  {
    id: 1,
    desc: "To begin the challenge, you will first need to download the design file from the provided link. This will give you access to all of the necessary design elements and assets that you will need to complete the challenge.",
  },
  {
    id: 2,
    desc: "Next, take some time to study the design and understand how it works. Look at the layout, color scheme, typography, and overall aesthetic to get a sense of the look and feel of the design.",
  },
  {
    id: 3,
    desc: "After you have a good understanding of the design, you can start exporting all of the necessary assets. This may include images, fonts, and other elements that you will need to use in your code.",
  },
  {
    id: 4,
    desc: "Finally, it's time to start implementing the design into code! Use your exported assets and the design file as a reference as you work to create a functional and visually appealing implementation of the design.",
  },
];
</script>

<template>
  <div id="how_to_start" class="mt-12">
    <p class="font-['Fredoka_One'] font-normal text-2xl text-black">
      How to Start
    </p>
    <div class="grid gap-9 mt-3">
      <p
        v-for="(item, index) in howToStartData"
        :key="index"
        class="text-xl text-black font-['Patrick_Hand'] font-normal"
      >
        {{ item.desc }}
      </p>
    </div>
  </div>
</template>
