import { createClient } from '@supabase/supabase-js'


const SUPABASE_URL = ""
const SUPABASE_ANON_KEY = ""


export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: localStorage, // hier noch AsyncStorage ergänzen
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})