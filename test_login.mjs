import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const env = fs.readFileSync('.env', 'utf-8');
const supabaseUrl = env.match(/VITE_SUPABASE_URL=(.*)/)[1].trim();
const supabaseKey = env.match(/VITE_SUPABASE_ANON_KEY=(.*)/)[1].trim();
const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  console.log('Logging in...');
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'mdhiyaulatha@gmail.com',
    password: 'Bangkah20',
  });
  console.log('Login result:', data?.user?.id, error?.message);
  if (data?.user?.id) {
    console.log('Setting to admin...');
    const { error: profileError } = await supabase.from('profiles').upsert([{ id: data.user.id, role: 'admin', username: 'admin' }]);
    console.log('Profile upsert:', profileError?.message || 'Success');
  }
}
main();
