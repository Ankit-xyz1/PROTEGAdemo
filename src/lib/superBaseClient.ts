import { configDotenv } from "dotenv";
import { createClient } from '@supabase/supabase-js'


configDotenv()
const supabase = createClient(
  process.env.SUPABASE_URL || "",
  process.env.SUPABASE_SERVICE_KEY||""
);

export default supabase;