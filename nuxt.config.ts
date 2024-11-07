// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devServer: {
    watchOptions: {
      usePolling: true,
      interval: 1000, // Intervalo de verificación en milisegundos
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
