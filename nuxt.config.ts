// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxt/content"],

  nitro: {
    preset: "netlify-static",

    prerender: {
      routes: ["home"],
    },
  },

  experimental: {
    renderJsonPayloads: true,
    payloadExtraction: true,
  },
});
