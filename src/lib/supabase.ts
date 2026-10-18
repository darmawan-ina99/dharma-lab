import { createClient, type SupabaseClient } from '@supabase/supabase-js'

/**
 * Supabase client configuration for Dharma Lab.
 *
 * Environment variables required (set in Vercel dashboard or .env):
 * - NEXT_PUBLIC_SUPABASE_URL: Project URL (https://xxxxx.supabase.co)
 * - SUPABASE_SERVICE_ROLE_KEY: Server-side service role key (NEVER expose to client)
 * - NEXT_PUBLIC_SUPABASE_ANON_KEY: Client-side anon/publishable key
 *
 * Project: Base44 (kdjbjcfrdbtrxmmvuyys)
 * Region: ap-southeast-1 (Singapore)
 *
 * NOTE: All clients use lazy initialization so the module can be safely
 * imported at build time even when env vars are not yet set (e.g., during
 * Vercel build before env vars are configured). The actual client is only
 * created the first time it's accessed at runtime.
 */

const PLACEHOLDER_URL = 'https://placeholder.supabase.co'
const PLACEHOLDER_KEY = 'placeholder-key'

function getSupabaseUrl(): string {
  return process.env.NEXT_PUBLIC_SUPABASE_URL || PLACEHOLDER_URL
}

function getServiceRoleKey(): string {
  return process.env.SUPABASE_SERVICE_ROLE_KEY || PLACEHOLDER_KEY
}

function getAnonKey(): string {
  return process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || PLACEHOLDER_KEY
}

let _supabaseAdmin: SupabaseClient | null = null
let _supabaseServer: SupabaseClient | null = null

/**
 * Server-side Supabase client with service role key.
 * Use ONLY on server (API routes, server components, server actions).
 * Bypasses Row Level Security.
 *
 * Lazily initialized on first access to avoid build-time crashes
 * when env vars are not yet set.
 */
export function getSupabaseAdmin(): SupabaseClient {
  if (!_supabaseAdmin) {
    _supabaseAdmin = createClient(getSupabaseUrl(), getServiceRoleKey(), {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    })
  }
  return _supabaseAdmin
}

/**
 * Server-side Supabase client with anon key.
 * Use on server when you need RLS protection.
 *
 * Lazily initialized on first access.
 */
export function getSupabaseServer(): SupabaseClient {
  if (!_supabaseServer) {
    _supabaseServer = createClient(getSupabaseUrl(), getAnonKey(), {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    })
  }
  return _supabaseServer
}

/**
 * Backward-compatible exports (lazy via getters).
 * These allow `import { supabaseAdmin } from '@/lib/supabase'` to work
 * without crashing at build time.
 */
export const supabaseAdmin = new Proxy({} as SupabaseClient, {
  get(_target, prop) {
    return Reflect.get(getSupabaseAdmin() as any, prop)
  },
})

export const supabaseServer = new Proxy({} as SupabaseClient, {
  get(_target, prop) {
    return Reflect.get(getSupabaseServer() as any, prop)
  },
})

/**
 * Get the project info for display purposes.
 * Safe to call at build time — uses fallback if env var not set.
 */
export const supabaseProject = {
  get url() {
    return getSupabaseUrl()
  },
  ref: 'kdjbjcfrdbtrxmmvuyys',
  name: 'Base44',
  region: 'ap-southeast-1',
}

/**
 * Check if Supabase env vars are properly configured.
 * Useful for health checks and debugging.
 */
export function isSupabaseConfigured(): boolean {
  return (
    !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
    !!process.env.SUPABASE_SERVICE_ROLE_KEY &&
    !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
    process.env.NEXT_PUBLIC_SUPABASE_URL !== PLACEHOLDER_URL
  )
}
