<script lang="ts" setup>
import type {Schema, User} from '@/types/types'
const { user } = useSanctumAuth<User>()

const schema : Schema[] = await useSchema()
</script>

<template>
  <NuxtLayout name="main">
    <div class="p-4 bg-amber-100 rounded-b-xl">
      <div>
        Welcome, {{ user?.name }}!
      </div>

      <div v-for="one in schema">
        <div class="text-xs truncate">{{ one.type }}: {{ one.workers }}</div>
      </div>
    </div>
  </NuxtLayout>
</template>