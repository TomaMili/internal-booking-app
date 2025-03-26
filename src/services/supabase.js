import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ulhzgjehimepduybfjcw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVsaHpnamVoaW1lcGR1eWJmamN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4NTMzNzAsImV4cCI6MjA1ODQyOTM3MH0.y5Vj5c0D-qiMhvJDMaCYmNPfjOAyceww-9z5mqmne7E";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
