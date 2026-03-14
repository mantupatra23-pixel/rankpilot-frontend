"use client"

import { useState, useEffect } from "react"

export default function Home(){

const [user,setUser] = useState<any>(null)
const [email,setEmail] = useState("")
const [domain,setDomain] = useState("")
const [result,setResult] = useState<any>(null)

useEffect(()=>{

const getUser = async()=>{
const { data } = await supabase.auth.getUser()
setUser(data.user)
}

getUser()

},[])


// GitHub login

const loginGithub = async()=>{

await supabase.auth.signInWithOAuth({
provider:"github"
})

}


// Email login

const loginEmail = async()=>{

if(!email){
alert("Enter email")
return
}

await supabase.auth.signInWithOtp({
email:email
})

alert("Magic login link sent to email")

}


// Logout

const logout = async()=>{

await supabase.auth.signOut()
location.reload()

}


// Run SEO audit

const runAudit = async()=>{

if(!domain){
alert("Enter domain")
return
}

const res = await fetch(
"https://rankpilot-ai.onrender.com/start-growth",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({domain})
}
)

const data = await res.json()

setResult(data)

if(user){

await supabase.from("audits").insert({
user_id:user.id,
domain:domain,
result:data
})

}

}



return(

<div style={{
display:"flex",
height:"100vh"
}}>


{/* SIDEBAR */}


<div style={{
width:"240px",
background:"#020617",
color:"white",
padding:"30px",
height:"100vh"
}}>

<h2>RankPilot</h2>

<br/>

<p>Dashboard</p>
<p>SEO Audit</p>
<p>AI Content</p>
<p>Backlinks</p>
<p>Traffic Growth</p>

<br/>

{user ? (

<button onClick={logout}>
Logout
</button>

):(

<div>

<button onClick={loginGithub}>
Login with GitHub
</button>

<br/><br/>

<input
placeholder="Enter email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
style={{
padding:"8px",
width:"100%"
}}
/>

<br/><br/>

<button onClick={loginEmail}>
Login with Email
</button>

</div>

)}

</div>



{/* MAIN */}



<div style={{
flex:1,
background:"#0f172a",
padding:"40px",
color:"white"
}}>

<h1>AI SEO Dashboard</h1>

<br/>

<input
placeholder="Enter website domain"
value={domain}
onChange={(e)=>setDomain(e.target.value)}
style={{
padding:"10px",
width:"300px",
borderRadius:"6px"
}}
/>

<button
onClick={runAudit}
style={{
marginLeft:"10px",
padding:"10px 20px",
background:"#22c55e",
border:"none",
borderRadius:"6px"
}}
>
Start Growth
</button>


<br/><br/>


{result && (

<div style={{
background:"#1e293b",
padding:"20px",
borderRadius:"10px"
}}>

<h2>AI Growth Plan</h2>

{result.steps?.map((s:any,i:number)=>(
<p key={i}>{s}</p>
))}

</div>

)}


</div>


</div>

)

}
