/**
 * Supabase client to be used within components.
 */
import { createBrowserClient } from '@supabase/ssr';

export function createComponentClient() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  return supabase;
}