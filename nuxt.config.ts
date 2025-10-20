// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: [],
  app: {
    head: {
      title: "Random Profiles Catalog",
      titleTemplate: "%s · Random Profiles",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Nuxt 4 demo app that serves and consumes a local REST API with random person profiles.",
        },
        { property: "og:title", content: "Random Profiles Catalog" },
        {
          property: "og:description",
          content:
            "Random people profiles generated via local API, Faker, and TestingBot avatars.",
        },
        { property: "og:type", content: "website" },
      ],
    },
  },
  typescript: { strict: true },
  nitro: { preset: "node" },
});
