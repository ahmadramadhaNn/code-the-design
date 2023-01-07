<script setup>
defineProps({
  profileName: String,
});
</script>

<template>
  <div class="flex items-center gap-4">
    <img
      src="@/assets/mark.jpg"
      alt="profilepic"
      class="rounded-full h-10 w-10"
    />
    <span id="profile_name" class="font-semibold text-base">{{
      profileName
    }}</span>
  </div>
</template>
