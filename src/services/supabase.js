// import { createClient } from "@supabase/supabase-js";

// export const supabaseUrl = "https://dclaevazetcjjkrzczpc.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjbGFldmF6ZXRjamprcnpjenBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyOTIzNDQsImV4cCI6MTk5ODg2ODM0NH0.LGg0M-taoHgKtxCzr9owrb09epnPaO_Yfz6xVE54sIY";
// const supabase = createClient(supabaseUrl, supabaseKey);

// export default supabase;

import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://rqmgeqvwtshfzhejqruu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxbWdlcXZ3dHNoZnpoZWpxcnV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk0NTAxMTcsImV4cCI6MjAwNTAyNjExN30.HbuHIdEeMF4jIapzzp9PXfsUXJURgechh2JDJQrORCE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
