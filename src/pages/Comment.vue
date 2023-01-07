<script setup>
import ProfileCard from "@/components/comment/ProfileCard.vue";
</script>

<template>
  <div
    class="min-h-screen bg-[#F1F8FF] grid place-content-center place-items-center font-['Source_Sans_Pro']"
  >
    <div
      class="bg-white border border-gray-200 rounded-md w-[680px] min-h-[630px] shadow-sm p-5"
    >
      <h1 class="font-semibold text-[28px] mt-4">Comments</h1>
      <div
        class="w-full border border-[#0089FF] shadow-md mt-6 min-h-[220px] rounded-md p-5 relative pb-20"
      >
        <ProfileCard :profile-name="'Mark Zuckerberg'" />
        <p class="font-normal text-base mt-4">
          I just tried this recipe and it was amazing! The instructions were
          clear and easy to follow, and the end result was delicious. I will
          definitely be making this again. Thanks for sharing!
        </p>
        <!-- 
          why using absolute? because it make the bold and etc always in the bottom
          no matter the comment length, with min height 220px
        -->
        <div class="absolute bottom-16 w-11/12 border border-black/10"></div>
        <div
          class="absolute bottom-3 flex w-11/12 justify-between items-center"
        >
          <div class="flex items-center gap-4">
            <img src="@/assets/bold.png" alt="" />
            <img src="@/assets/italic.png" alt="" />
            <img src="@/assets/attch.png" alt="" />
          </div>
          <button
            type="button"
            class="bg-[#0089FF] text-white text-center px-5 py-2 rounded-md font-semibold"
          >
            Comment
          </button>
        </div>
      </div>
      <div class="mt-10">
        <ProfileCard :profile-name="'Elon Musk'" />
        <p class="mt-4 text-black/60 font-normal text-base">
          I really appreciate the insights and perspective shared in this
          article. It's definitely given me something to think about and has
          helped me see things from a different angle. Thank you for writing and
          sharing!
        </p>
        <div class="mt-4 flex items-center gap-2">
          <div class="px-2 border border-gray-300 bg-[#F1F2F3] rounded-md">
            <p class="text-2xl text-[#777777]">&#8593;</p>
          </div>
          <div class="px-2 border border-gray-300 bg-[#F1F2F3] rounded-md">
            <p class="text-2xl text-[#777777]">&darr;</p>
          </div>
          <span class="text-black/40 font-semibold text-sm">5 min ago</span>
        </div>
      </div>
      <button
        class="text-center font-semibold text-sm bg-[#F1F2F3] mt-10 w-full py-2 rounded-md border"
      >
        Load More
      </button>
    </div>
  </div>
</template>
