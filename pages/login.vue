<script lang="ts" setup>
const { login } = useSanctumAuth()
const { baseUrl } = useSanctumConfig()

const form = ref({email: '', password: ''})
type ErrorBag = {
  email?: string[],
  password?: string[]
}
const errorBag = ref<ErrorBag>({});

async function logIn()
{
  const credentials = {
    email: form.value.email, // "dev@kartazamerov.ru",
    password: form.value.password, // "password",
  }

  try {
    await login(credentials);
  } catch (error) {
      // here you can extract errors from a response
      // and put it in your form for example
      // console.log(error.response?._data.errors)
    errorBag.value = error.response?._data.errors
  }
}
</script>

<template>
  <NuxtLayout name="auth">
      <h2 class="text-text-dark font-bold text-h2-mobile lg:text-h2">
        Вход в <span class="text-osnova1">KARTAZAMEROV</span>
      </h2>

      <p class="hidden lg:block text-lg leading-none pt-3">Заполните данные для входа в аккаунт</p>

      <form @submit.prevent="logIn" class="mt-3.5 lg:mt-10 lg:w-login-form space-y-4" role="form">
        <input type="hidden" name="_token" value="xZt4SjPl3PUfSiR064dgH4KOW3tz2o1AOnBaakV1">
        <div class="relative lg:pt-6">
          <input type="email" v-model="form.email" id="email"
                 class="form-control form-control--auth" autocomplete="username" required autofocus>

          <label class="absolute hidden left-[12px] text-base text-text-light leading-[52px] top-0 transition-all
                lg:inline-block lg:left-0 lg:font-semibold lg:leading-none lg:text-gray-33
            ">
            Ваш E-Mail
          </label>

          <div v-if="errorBag.email" class="text-red-500">{{ errorBag.email[0] }}</div>
        </div>

        <div class="relative lg:pt-6">
          <input id="password" type="password" class="form-control form-control--auth" v-model="form.password" autocomplete="current-password" required>

          <label class="absolute hidden left-[12px] text-base text-text-light leading-[52px] top-0 transition-all
                lg:inline-block lg:left-0 lg:font-semibold lg:leading-none lg:text-gray-33
            ">
            Пароль
          </label>

          <div v-if="errorBag.password" class="text-red-500">{{ errorBag.password[0] }}</div>
        </div>

        <button type="submit" class="flex justify-center items-center py-1.5 px-3 h-[52px] no-underline text-white bg-osnova1 rounded-lg cursor-pointer whitespace-nowrap hover:opacity-90 ring-osnova1/50 ring-0 focus:ring-2 outline-none text-base lg:text-sm font-semibold lg:font-normal w-full mt-4">
          Войти
        </button>
      </form>

      <a :href="`${baseUrl}/password/reset`" class="hidden lg:block mt-6 text-sm underline text-osnova1 hover:text-osnova2">
        Забыли пароль?
      </a>

      <div class="hidden lg:block mt-6 text-text-light text-sm">
        У вас нет аккаунта? Вам необходимо пройти

        <a :href="`${baseUrl}/register`" class="inline-block underline text-osnova1 hover:text-osnova2">
          Регистрацию
        </a>
      </div>
  </NuxtLayout>
</template>