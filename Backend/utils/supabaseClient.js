const dotenv = require('dotenv');
dotenv.config();

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase URL or Key is missing in environment variables.');
}
console.log('Supabase initialized:', supabaseUrl);

const supabase = createClient(supabaseUrl, supabaseKey);
module.exports = supabase;
