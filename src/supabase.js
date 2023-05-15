import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wrbsgyxacerubuxehzpz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndyYnNneXhhY2VydWJ1eGVoenB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQwMzYwNTAsImV4cCI6MTk5OTYxMjA1MH0.U3Six15Z_bmU0SyPqEYTgyAcBHuE9haV-hJbeTmJDzg";
export const supabase = createClient(supabaseUrl, supabaseKey);
