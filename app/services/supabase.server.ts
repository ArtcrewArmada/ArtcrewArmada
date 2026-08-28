import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

if (!supabaseUrl || !supabaseAnonKey) {
  // We log a warning instead of crashing on initialization, so building doesn't fail due to missing env variables
  console.warn("Warning: SUPABASE_URL or SUPABASE_ANON_KEY env variables are not defined.");
}

// Client for general user actions (RLS Active)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Client for server-side admin/system actions (RLS Bypassed)
export const supabaseAdmin = supabaseServiceKey 
  ? createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      }
    })
  : null;
