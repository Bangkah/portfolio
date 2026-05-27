import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const env = fs.readFileSync('.env', 'utf-8');
const supabaseUrl = env.match(/VITE_SUPABASE_URL=(.*)/)[1].trim();
const supabaseKey = env.match(/VITE_SUPABASE_ANON_KEY=(.*)/)[1].trim();
const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  console.log('Signing up mdhiyaulatha@gmail.com...');
  const { data, error } = await supabase.auth.signUp({
    email: 'mdhiyaulatha@gmail.com',
    password: 'Bangkah20',
  });
  console.log('Result:', JSON.stringify(data), error?.message);
}
main();
