// lib/supabaseClient.ts

import { createClient } from '@supabase/supabase-js'

export function getSupabase() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    console.error("Missing Supabase environment variables!");
    throw new Error('Supabase URL or Key is missing.');
  }

  return createClient(supabaseUrl, supabaseKey)
}
