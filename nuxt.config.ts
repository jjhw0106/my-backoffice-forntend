// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      // apiBase: 'https://f601e36bedc8.ngrok-free.app'
        apiBase: 'http://localhost:8081'
    }
  }
})
