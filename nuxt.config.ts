// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ["@/assets/css/styles.css"],
    build: {
        transpile: ['@headlessui/vue'],
        postcss: {
          postcssOptions: {
            plugins: {
              tailwindcss: {},
              autoprefixer: {},
            },
          },
        },
    }
})
