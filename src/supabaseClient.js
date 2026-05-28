import { createClient } from '@supabase/supabase-js';

// Dynamically pulls variables from Vercel's secure settings panel at runtime
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("CRITICAL ERROR: Supabase Environment Keys are missing in Vercel!");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
