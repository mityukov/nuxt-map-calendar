<script setup>
const { logout, user } = useSanctumAuth()
const { client } = useSanctumClient()

async function logOut()
{
  await logout()
  await navigateTo('/login')
}
</script>

<template>
  <div class="bg-gray-100 min-h-screen">
    <div class="px-4 py-1 bg-osnova1 text-white flex justify-between">
      <div class="">Hi, {{user.name}}!</div>
      <button @click="logOut">Logout</button>
    </div>

    <div class="max-w-4xl mx-auto px-4">

      <slot :api-client="client" />

    </div>

    <div class="h-20"></div>

    <footer class="h-20 fixed bottom-0 inset-x-0 flex shadow-main-menu">
      <div class="text-text-light text-sm font-medium rounded-t-lg bg-white
        grid grid-cols-4 place-items-center w-full max-w-4xl mx-auto
        *:text-center *:hover:text-osnova1"
      >
        <NuxtLink to="/">
          <Icon name="ci:window" size="24px"/>
          <div class="leading-none">Дашборд</div>
        </NuxtLink>
        <NuxtLink to="/calendar">
          <Icon name="ci:calendar" size="24px"/>
          <div class="leading-none">Календарь</div>
        </NuxtLink>
        <NuxtLink to="/map" >
          <Icon name="ci:map" size="24px"/>
          <div class="leading-none">Карта</div>
        </NuxtLink>
        <NuxtLink to="/tabel">
          <Icon name="ci:bar-chart" size="24px"/>
          <div class="leading-none">Табель</div>
        </NuxtLink>
      </div>
    </footer>
  </div>
</template>