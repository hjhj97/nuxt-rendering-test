// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: true,
  routeRules: {
    "/isr-5": { isr: 5 },
    "/isr-no-ttl": { isr: true },
    "/swr-5": { swr: 5 },
    "/swr-no-ttl": { swr: true },
    "/csr": { ssr: false },
    "/prerender": { prerender: true },
  },
});
