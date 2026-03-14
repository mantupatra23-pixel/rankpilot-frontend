"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { getSupabase } from "../../lib/supabaseClient"

export default function Login(){

const supabase = getSupabase()
const router = useRouter()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleLogin = async () => {

const { error } = await supabase.auth.signInWithPassword({
email,
password
})

if(!error){
router.push("/dashboard")
}

}

return (
<div>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={handleLogin}>
Login
</button>

</div>
)

}
