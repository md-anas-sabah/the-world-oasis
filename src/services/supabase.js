import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://rouhveakbouskkxqmwzm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvdWh2ZWFrYm91c2treHFtd3ptIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk1MDE5MTcsImV4cCI6MjAwNTA3NzkxN30.P4uNt2ZRQdw-rx_lFTWxFwMnbF-CkGGZ9F11Y3aMINI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
