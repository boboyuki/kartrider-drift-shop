import { createClient, SupabaseClient } from '@supabase/supabase-js'
const env = useRuntimeConfig()
console.log(env.url, env.key)
const config = {
  url: `${env.url}`,
  anon: `${env.key}`
}

export const supabase: SupabaseClient = createClient(config.url, config.anon)
