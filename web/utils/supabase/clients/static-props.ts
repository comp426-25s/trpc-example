/**
 * Supabase client to be used with `getStaticProps`.
 */
import { createClient as createClientPrimitive } from '@supabase/supabase-js';

export function createStaticPropsClient() {
  const supabase = createClientPrimitive(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  return supabase;
}