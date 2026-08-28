import { createClient } from "@supabase/supabase-js";

/**
 * Gets a Supabase client configured for RLS-based user operations.
 * If EDGE_PROXY_URL is set, it routes calls through the Edge Proxy.
 */
export function getSupabase(env?: any) {
  const edgeProxyUrl = env?.EDGE_PROXY_URL || process?.env?.EDGE_PROXY_URL || "";
  const supabaseUrl = edgeProxyUrl 
    ? `${edgeProxyUrl}/supabase` 
    : (env?.SUPABASE_URL || process?.env?.SUPABASE_URL || "");
  const supabaseAnonKey = env?.SUPABASE_ANON_KEY || process?.env?.SUPABASE_ANON_KEY || "";

  if (!supabaseUrl) {
    console.warn("Warning: SUPABASE_URL is not defined.");
  }
  return createClient(supabaseUrl, supabaseAnonKey);
}

/**
 * Gets a Supabase client configured for admin/system actions (RLS Bypassed).
 * - If EDGE_PROXY_URL is set, it routes requests through the Edge Proxy which automatically appends the Service Role Key.
 * - Otherwise, it falls back to direct client creation using the Service Role Key.
 */
export function getSupabaseAdmin(env?: any) {
  const edgeProxyUrl = env?.EDGE_PROXY_URL || process?.env?.EDGE_PROXY_URL || "";
  const supabaseUrl = edgeProxyUrl 
    ? `${edgeProxyUrl}/supabase` 
    : (env?.SUPABASE_URL || process?.env?.SUPABASE_URL || "");
  const supabaseServiceKey = env?.SUPABASE_SERVICE_ROLE_KEY || process?.env?.SUPABASE_SERVICE_ROLE_KEY || "";

  if (edgeProxyUrl) {
    return createClient(supabaseUrl, supabaseServiceKey || "dummy-edge-service-key", {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      }
    });
  }

  if (!supabaseUrl || !supabaseServiceKey) {
    console.warn("Warning: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is not defined. Admin client unavailable.");
    return null;
  }

  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    }
  });
}

// Singletons using process.env (fallback/legacy/development)
export const supabase = getSupabase();
export const supabaseAdmin = getSupabaseAdmin();

