import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const env = fs.readFileSync('.env', 'utf-8');
const supabaseUrl = env.match(/VITE_SUPABASE_URL=(.*)/)[1].trim();
const supabaseKey = env.match(/VITE_SUPABASE_ANON_KEY=(.*)/)[1].trim();

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'mdhiyaulatha@gmail.com',
    password: 'Bangkah20',
  });
  if (error) console.error('Login error:', error.message);
  else {
    console.log('Login success! User ID:', data.user.id);
    const { error: profileError } = await supabase.from('profiles').insert([{
      id: data.user.id,
      username: 'Administator',
      role: 'admin'
    }]);
    if (profileError) console.error('Profile insert error:', profileError.message);
    else console.log('Profile created!');
  }
}
main();
