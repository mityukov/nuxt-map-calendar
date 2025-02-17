<script lang="ts" setup>
const { login } = useSanctumAuth()

const form = ref({username: '', password: ''})

async function logIn()
{
  const credentials = {
    email: form.value.username, //"dev@kartazamerov.ru",
    password: form.value.password, // "password",
    // remember: true,
  }

  await login(credentials)
}
</script>

<template>
  <NuxtLayout name="auth">
    <h1>Please Log in!</h1>
    <input v-model="form.username" class="border w-full" placeholder="E-Mail">
    <input v-model="form.password" class="border w-full" placeholder="Пароль">
    <button @click="logIn">Войти</button>
  </NuxtLayout>
</template>