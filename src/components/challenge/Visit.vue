<script setup>
defineProps({
  url: String,
});
</script>

<template>
  <a
    target="_blank"
    :href="url"
    class="bg-[#dbd6ff] w-full py-2 border-2 mt-3 border-black flex gap-3 justify-center items-center"
  >
    <svg viewBox="0 0 256 256" class="w-6 h-6" astro-icon="ph:globe">
      <path
        fill="currentColor"
        d="m225.9 163.2.3-1a103.7 103.7 0 0 0 0-68.4l-.3-1A104.4 104.4 0 0 0 128 24a104.2 104.2 0 0 0-97.9 68.8l-.3 1a103.7 103.7 0 0 0 0 68.4l.3 1A104.2 104.2 0 0 0 128 232a104.2 104.2 0 0 0 97.9-68.8zM102.5 168h51a108.6 108.6 0 0 1-25.5 42.4 108.6 108.6 0 0 1-25.5-42.4zm-4.2-16a126.4 126.4 0 0 1 0-48h59.4a127.6 127.6 0 0 1 2.3 24 126.8 126.8 0 0 1-2.3 24zM40 128a90.3 90.3 0 0 1 3.3-24H82a145 145 0 0 0 0 48H43.3a90.3 90.3 0 0 1-3.3-24zm113.5-40h-51A108.6 108.6 0 0 1 128 45.6 108.6 108.6 0 0 1 153.5 88zm20.5 16h38.7a88.9 88.9 0 0 1 0 48H174a145 145 0 0 0 0-48zm32.4-16h-36a128.7 128.7 0 0 0-24.1-46.1A88.6 88.6 0 0 1 206.4 88zm-96.7-46.1A128.7 128.7 0 0 0 85.6 88h-36a88.6 88.6 0 0 1 60.1-46.1zM49.6 168h36a128.7 128.7 0 0 0 24.1 46.1A88.3 88.3 0 0 1 49.6 168zm96.7 46.1a128.7 128.7 0 0 0 24.1-46.1h36a88.3 88.3 0 0 1-60.1 46.1z"
      ></path>
    </svg>
    <p class="text-2xl">Visit</p>
  </a>
</template>
