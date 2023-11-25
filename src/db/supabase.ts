import { createClient } from "@supabase/supabase-js"

const supabaseUrl = Bun.env.SUPABASE_URL || '';
const supabaseAnonKey = Bun.env.SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);