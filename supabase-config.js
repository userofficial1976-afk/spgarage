const SUPABASE_URL = "https://qoetisgoqcpdekxusbnu.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_T7q_EJZdnC1wHb6I9w_W1g_r4b-ErWM";

window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

console.log("SUPABASE CONNECTED");
