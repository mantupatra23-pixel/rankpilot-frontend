import { NextResponse } from "next/server"
import { getSupabase } from "@/lib/supabaseClient"

export async function POST(request: Request) {
  const supabase = getSupabase()

  const body = await request.json()
  const email = body.email
  const password = body.password

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  return NextResponse.json({ user: data.user })
}
