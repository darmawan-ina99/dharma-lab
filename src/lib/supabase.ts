import { createClient } from '@supabase/supabase-js'

/**
 * Supabase client configuration for Dharma Lab.
 *
 * Environment variables required:
 * - NEXT_PUBLIC_SUPABASE_URL: Project URL (https://xxxxx.supabase.co)
 * - SUPABASE_SERVICE_ROLE_KEY: Server-side service role key (NEVER expose to client)
 * - NEXT_PUBLIC_SUPABASE_ANON_KEY: Client-side anon/publishable key
 *
 * Project: Base44 (kdjbjcfrdbtrxmmvuyys)
 * Region: ap-southeast-1 (Singapore)
 */

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

/**
 * Server-side Supabase client with service role key.
 * Use ONLY on server (API routes, server components, server actions).
 * Bypasses Row Level Security.
 */
export const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})

/**
 * Server-side Supabase client with anon key.
 * Use on server when you need RLS protection.
 */
export const supabaseServer = createClient(supabaseUrl, anonKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})

/**
 * Get the project info for display purposes.
 */
export const supabaseProject = {
  url: supabaseUrl,
  ref: 'kdjbjcfrdbtrxmmvuyys',
  name: 'Base44',
  region: 'ap-southeast-1',
}
