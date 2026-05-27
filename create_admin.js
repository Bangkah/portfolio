import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const env = fs.readFileSync('.env', 'utf-8');
const supabaseUrl = env.match(/VITE_SUPABASE_URL=(.*)/)[1].trim();
const supabaseKey = env.match(/VITE_SUPABASE_ANON_KEY=(.*)/)[1].trim();

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  console.log('Signing up user...');
  const { data, error } = await supabase.auth.signUp({
    email: 'mdhyaulatha@gmail.com',
    password: 'Bangkah20',
  });

  if (error) {
    console.error('Failed to sign up:', error.message);
    return;
  }

  console.log('User created:', data.user?.id);
  
  if (data.user) {
    console.log('Trying to insert admin profile...');
    const { error: profileError } = await supabase.from('profiles').insert([{
      id: data.user.id,
      username: 'Administator',
      role: 'admin'
    }]);
    if (profileError) {
      console.error('Failed to insert admin profile (RLS issue likely):', profileError.message);
      console.log('\n--> USER ID:', data.user.id);
      console.log('Please copy this ID and use it in Supabase SQL editor.');
    } else {
      console.log('Admin profile created successfully!');
    }
  }
}
main();
