// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'shadcn-nuxt',
    '@nuxtjs/supabase',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  typescript: {
    typeCheck: true
  },
  devtools: { enabled: true },
  imports: {
    dirs: ['stores']
  },
  supabase: {
    url: process.env.SUPABASE_API_DOMAIN,
    key: process.env.SUPABASE_API_KEY,
    redirect: false
  }
})
