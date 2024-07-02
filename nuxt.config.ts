// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  ssr: false,
  app: {
    head: {
      link: [
        {
          href: "https://cdn.jsdelivr.net/npm/bulma@1.0.1/css/bulma.min.css",
          rel: "stylesheet",
        },
      ],
    },
  },
});
