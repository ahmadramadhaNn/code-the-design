<script setup>
defineProps({
  jobs: Array,
});
</script>

<template>
  <div
    v-for="(job, index) in jobs"
    :key="index"
    :class="job.id === 1 ? 'bg-[#001AFF]' : 'bg-white'"
    class="h-60 rounded-md p-5 relative border"
  >
    <div class="flex mt-2 gap-4">
      <img src="@/assets/facebook.png" alt="" />
      <div>
        <p
          id="job_type"
          :class="job.id === 1 ? 'text-white' : 'text-black'"
          class="text-lg font-semibold"
        >
          {{ job.jobTitle }}
        </p>
        <p
          id="company"
          :class="job.id === 1 ? 'text-white/80' : 'text-black/80'"
          class="text-sm"
        >
          {{ job.company }}
        </p>
      </div>
    </div>
    <p
      :class="job.id === 1 ? 'text-white/60' : 'text-black/60'"
      class="font-normal text-base mt-8"
    >
      {{ job.jobDesc }}
    </p>
    <div class="absolute bottom-4 grid grid-cols-2 gap-6 items-center">
      <div>
        <button
          type="button"
          :class="
            job.id === 1
              ? 'text-white bg-white/20'
              : 'text-black bg-gray-200 border border-gray-300'
          "
          class="rounded-md text-[12px] font-semibold px-3 py-1"
        >
          {{ job.stack }}
        </button>
      </div>
      <p
        id="sallary"
        :class="job.id === 1 ? 'text-white' : 'text-black'"
        class="text-sm font-semibold"
      >
        ${{ job.salary }}
      </p>
    </div>
  </div>
</template>
