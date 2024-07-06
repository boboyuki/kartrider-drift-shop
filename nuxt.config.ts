// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'shadcn-nuxt',
    '@nuxtjs/supabase',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  typescript: {
    typeCheck: true
  },
  imports: {
    dirs: ['stores']
  },
  supabase: {
    url: process.env.SUPABASE_API_DOMAIN,
    key: process.env.SUPABASE_API_KEY,
    redirect: false
  },
  runtimeConfig: {
    url: process.env.SUPABASE_API_DOMAIN,
    key: process.env.SUPABASE_API_KEY
  }
})
