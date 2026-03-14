"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { getSupabase } from "../../lib/supabaseClient"

export default function Dashboard(){

const supabase = getSupabase()

const router = useRouter()

const [domain,setDomain] = useState("")
const [result,setResult] = useState<any>(null)
const [freeLimit,setFreeLimit] = useState(3)
const [userEmail,setUserEmail] = useState("")
const [plan,setPlan] = useState("free")

useEffect(()=>{

const checkUser = async () => {

const { data } = await supabase.auth.getUser()

if(!data.user){
router.push("/login")
}else{
setUserEmail(data.user.email || "")
}

}

checkUser()

},[])

const logout = async () => {

await supabase.auth.signOut()

router.push("/login")

}

const runAudit = async () => {

const { data } = await supabase.auth.getUser()

const email = data.user?.email

if(!email){
alert("Please login first")
return
}

const { data:user } = await supabase
.from("users")
.select("*")
.eq("email",email)
.single()

let currentUser = user

if(!user){

const { data:newUser } = await supabase
.from("users")
.insert([{ email: email }])
.select()
.single()

currentUser = newUser

}

setPlan(currentUser.plan || "free")

if(currentUser.plan === "free" && currentUser.audits <= 0){
alert("Free limit finished. Upgrade to Pro Plan.")
return
}

setFreeLimit(currentUser.audits)

const res = await fetch("https://rankpilot-ai.onrender.com/start-growth",{
method:"POST",
headers:{ "Content-Type":"application/json" },
body:JSON.stringify({domain})
})

const dataResult = await res.json()

setResult(dataResult)

if(currentUser.plan === "free"){

await supabase
.from("users")
.update({ audits: currentUser.audits - 1 })
.eq("email",email)

setFreeLimit(currentUser.audits - 1)

}

}

return(

<div style={{padding:"40px",background:"#020617",minHeight:"100vh",color:"white"}}>

<h1>RankPilot Dashboard</h1>

<p>Logged in as: {userEmail}</p>

<button
onClick={logout}
style={{
padding:"6px 12px",
background:"#ef4444",
border:"none",
marginTop:"10px",
cursor:"pointer"
}}
>
Logout
</button>

<br/><br/>

<p>Plan: {plan}</p>

<p>Free SEO Audits Left: {freeLimit}</p>

{plan === "free" && freeLimit <= 0 && (

<button
onClick={()=>alert("Upgrade coming soon")}
style={{
padding:"10px 20px",
background:"#f59e0b",
border:"none",
cursor:"pointer",
marginTop:"10px"
}}
>
Upgrade to Pro
</button>

)}

<br/><br/>

<input
placeholder="Enter website domain"
value={domain}
onChange={(e)=>setDomain(e.target.value)}
style={{padding:"10px",width:"300px"}}
/>

<button
onClick={runAudit}
style={{
marginLeft:"10px",
padding:"10px 20px",
background:"#22c55e",
border:"none",
cursor:"pointer"
}}
>
Run SEO Audit
</button>

<br/><br/>

{result && (

<div style={{background:"#1e293b",padding:"20px"}}>

<h2>AI Growth Plan</h2>

{result.steps.map((s:any,i:number)=>(
<p key={i}>• {s}</p>
))}

</div>

)}

</div>

)

}
