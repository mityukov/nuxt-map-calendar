// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: false,
  spaLoadingTemplate: true,
  logLevel: "verbose",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ['nuxt-auth-sanctum'],
  sanctum: {
    baseUrl: 'https://mappanel.test', // backend
    logLevel: 5,
    origin: 'https://mappanel.test:3000',
    redirect: {
      keepRequestedRoute: true,
      onAuthOnly: '/login',
      onGuestOnly: '/',
    },
    globalMiddleware: {
      enabled: true,
    },
  },
  devServer: {
    host: 'mappanel.test',
    https: {
      key: './mappanel.test.key',
      cert: './mappanel.test.crt'
    }
  },
})
