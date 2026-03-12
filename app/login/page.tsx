"use client"

import { useState } from "react"
import { supabase } from "../../lib/supabase"

export default function Login(){

const [email,setEmail] = useState("")

const login = async () => {

const { error } = await supabase.auth.signInWithOtp({
email: email
})

if(error){
alert("Login error")
}else{
alert("Check your email for login link")
}

}

return(

<div style={{padding:"40px"}}>

<h1>RankPilot Login</h1>

<input
placeholder="Enter your email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
style={{padding:"10px",width:"250px"}}
/>

<button
onClick={login}
style={{marginLeft:"10px",padding:"10px 20px"}}
>
Login
</button>

</div>

)

}
