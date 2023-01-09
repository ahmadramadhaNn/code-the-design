<script setup>
import Available from "@/components/pricy/Available.vue";
import NotAvailable from "@/components/pricy/NotAvailable.vue";

defineProps({
  pricingData: Array,
});
</script>

<template>
  <div
    v-for="(data, index) in pricingData"
    :key="index"
    :class="data.type === 'Professional' ? 'bg-[#041823]' : 'bg-white'"
    class="border border-gray-300 shadow-sm rounded-md min-h-[400px] p-6"
  >
    <div class="mt-3">
      <span
        :class="data.type === 'Professional' ? 'text-white' : 'text-black'"
        class="font-bold text-lg"
        >{{ data.type }}</span
      >
      <div
        :class="data.type === 'Professional' ? 'text-white' : 'text-black'"
        id="pricing"
        class="font-bold text-[32px]"
      >
        ${{ data.price }}/mth
      </div>
      <p
        :class="
          data.type === 'Professional' ? 'text-white/60' : 'text-black/60'
        "
        id="desc"
        class="font-medium text-sm mt-2"
      >
        {{ data.desc }}
      </p>
      <div
        class="mt-5 flex items-center gap-3"
        v-for="(info, index) in data.detail"
        :key="index"
      >
        <NotAvailable v-if="info.available != true" />
        <Available v-else />
        <p
          :class="
            data.type === 'Professional' ? 'text-white/60' : 'text-black/60'
          "
          class="font-medium text-base"
        >
          {{ info.info }}
        </p>
      </div>
      <div class="border border-black/10 mt-4"></div>
      <div class="mt-4">
        <p
          :class="
            data.type === 'Professional' ? 'text-white/60' : 'text-black/60'
          "
          class="font-medium text-[12px]"
        >
          Additional Feature:
        </p>
        <p
          :class="data.type === 'Professional' ? 'text-white' : 'text-black'"
          class="font-medium text-[12px]"
        >
          *${{ data.additionalFeatureStoragePricing }}/GB for additional storage
        </p>
        <button
          class="mt-5 text-sm font-medium text-white text-center bg-[#00A3FF] rounded-md w-full py-2.5"
        >
          Choose
        </button>
      </div>
    </div>
  </div>
</template>
