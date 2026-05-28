import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kgrozjfpdkuiwtmtsrko.supabase.co'
const supabaseAnonKey = 'sb_publishable_k5fkJYlv1L5_jXyYCYOhbA_XBXp3Uet'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
