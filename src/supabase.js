import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

const isValidSupabaseUrl = typeof supabaseUrl === 'string' && /^https:\/\/[^\s]+\.supabase\.co(?:\/.*)?$/.test(supabaseUrl.trim());
const isBrowserSafeKey = typeof supabaseKey === 'string' && !supabaseKey.startsWith('sb_secret_');

export const isSupabaseConfigured = Boolean(isValidSupabaseUrl && isBrowserSafeKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    })
  : null;

export const requireSupabase = () => {
  if (!supabase) {
    throw new Error(
      'Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file and restart the app.'
    );
  }

  return supabase;
};