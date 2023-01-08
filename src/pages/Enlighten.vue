<template>
  <div
    class="mx-auto w-[1000px] 2xl:min-h-screen 2xl:grid 2xl:place-content-center mt-10"
  >
    <div class="flex justify-between gap-20">
      <div>
        <h1 class="font-semibold italic text-xl">Enlighten.</h1>
        <div class="mt-32">
          <button
            id="coming_soon"
            class="text-sm font-bold text-[#113FE2] uppercase px-3 py-1 rounded-lg"
          >
            coming soon
          </button>
          <h1 class="font-bold text-[44px] text-[#0A1B59] mt-4">
            Get your dancing shoes ready
          </h1>
          <p id="desc" class="font-normal text-base w-11/12 mt-5">
            We're putting the finishing touches on our website and getting ready
            to launch. Sign up for updates and be the first to know when we go
            live.
          </p>
          <div id="email" class="grid grid-cols-3 gap-6 mt-10">
            <input
              type="text"
              placeholder="Email address"
              id="email"
              name="email"
              class="col-span-2 border border-gray-300 rounded-md pl-5 py-2 focus:outline-none focus:ring focur:ring-blue-500"
            />
            <button
              type="button"
              class="text-base font-normal text-center text-white bg-[#113FE2] w-11/12 rounded-lg"
            >
              Invite Me
            </button>
          </div>
          <p id="notes" class="text-[12px] font-normal mt-5">
            Sign up for updates to be the first to know when we launch. No spam,
            just important information and exclusive offers.
          </p>
        </div>
      </div>
      <img src="@/assets/womenwithlaptop.avif" alt="" />
    </div>
  </div>
</template>

<style scoped>
#coming_soon {
  background: rgba(17, 63, 226, 0.1);
}

#desc {
  color: rgba(10, 27, 89, 0.6);
}

#notes {
  color: rgba(10, 27, 89, 0.6);
}
</style>
