<script lang="ts" setup>
const { logout, isAuthenticated, user } = useSanctumAuth()

// пример обращения к API через useSanctumClient()
async function getSchema() {
  const client = useSanctumClient()
  const {data} = await client('/api/v1/schema/kartazamerov')
  return data
}

let schema = ref([])
if (isAuthenticated) {
  schema.value = await getSchema()
}
</script>

<template>
  <NuxtLayout name="main">
    <div class="p-4 bg-amber-100 rounded-b-xl">
      <div class="flex justify-between">
        <h1 class="text-3xl font-bold">Hello world!</h1>
      </div>
      <div v-if="isAuthenticated">
        Welcome, {{ user.name }}!
      </div>

      <div v-if="isAuthenticated">
        <button @click="logout">Logout</button>

        <div>Activity types: {{ schema.map(one => one.type).join(', ') }}</div>
      </div>
      <div v-else>
        <button v-if="!isAuthenticated" @click="logIn()">Login</button>
      </div>
    </div>
  </NuxtLayout>
</template>