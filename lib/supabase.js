import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://oigoyriwexarziqpefiu.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pZ295cml3ZXhhcnppcXBlZml1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE4MTY5ODUsImV4cCI6MjAxNzM5Mjk4NX0.hLcWQy8WDhUwWx0TBbO8mYvTfxiPsb8s2Rq4LuHwMzM"
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
    
  },
})