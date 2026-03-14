import { getSupabase } from "@/lib/supabaseClient"

export async function POST(req: Request) {

  const supabase = getSupabase()

  const { email, password } = await req.json()

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  return Response.json({ data, error })
}
