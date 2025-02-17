<script setup>
const { baseUrl } = useSanctumConfig()
</script>

<template>
  <div class="layout-auth bg-gray-body flex min-h-screen items-stretch">
    <div class="hidden lg:flex flex-col items-stretch flex-1 relative left-col-gradient overflow-hidden">
      <img src="/img/coolicon.svg" class="absolute left-1/2 opacity-30 w-8/12 top-1/2 -translate-y-1/2 transform">

      <div class="pl-20 mb-10">
        <img src="/img/amo-logo-white2.svg" class="mt-3 -ml-2" height="154" />

        <h1 class="text-login-title text-white font-bold">
          KARTAZAMEROV — 100% контроль и учёт действий выездных сотрудников
        </h1>
      </div>

      <div class="flex-1 bg-pink-300"
           style="background: no-repeat bottom/contain url(/img/MacBook-Pro-16.png)"
      >
      </div>
    </div>

    <div class="bg-gray-body lg:bg-white w-full lg:w-login-right-col mt-32 lg:mt-0 lg:py-10 lg:flex lg:flex-col lg:justify-center">
      <div class="px-4 sm:px-20 md:px-40 lg:pl-28 lg:pr-10">
        <div>

          <slot/>

        </div>
      </div>
    </div>
  </div>
</template>