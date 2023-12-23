import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://rqmgeqvwtshfzhejqruu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxbWdlcXZ3dHNoZnpoZWpxcnV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk0NTAxMTcsImV4cCI6MjAwNTAyNjExN30.HbuHIdEeMF4jIapzzp9PXfsUXJURgechh2JDJQrORCE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
