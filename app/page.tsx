"use client"

import { useState } from "react"
import { signIn, signOut, useSession } from "next-auth/react"

export default function Home(){

const { data:session } = useSession()

const [domain,setDomain] = useState("")
const [result,setResult] = useState<any>(null)

const runAudit = async ()=>{

const res = await fetch("https://rankpilot-ai.onrender.com/start-growth",{
method:"POST",
headers:{ "Content-Type":"application/json" },
body:JSON.stringify({domain})
})

const data = await res.json()
setResult(data)

}

return(

<div style={{display:"flex",minHeight:"100vh",fontFamily:"Arial"}}>

{/* Sidebar */}

<div style={{
width:"240px",
background:"#020617",
color:"white",
padding:"30px"
}}>

<h2>RankPilot</h2>

<br/>

<p>Dashboard</p>
<p>SEO Audit</p>
<p>AI Content</p>
<p>Backlinks</p>
<p>Traffic Growth</p>

<br/>

{session ? (

<button onClick={()=>signOut()}>
Logout
</button>

):(

<button onClick={()=>signIn()}>
Login with GitHub
</button>

)}

</div>

{/* Main */}

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

{result.steps.map((s:any,i:number)=>(
<p key={i}>• {s}</p>
))}

</div>

)}

<br/>

{/* Tool cards */}

<div style={{
display:"grid",
gridTemplateColumns:"1fr 1fr",
gap:"20px"
}}>

<div style={{background:"#1e293b",padding:"20px",borderRadius:"10px"}}>
<h3>SEO Audit</h3>
<p>Find technical SEO problems instantly</p>
</div>

<div style={{background:"#1e293b",padding:"20px",borderRadius:"10px"}}>
<h3>AI Blog Generator</h3>
<p>Create SEO optimized blog posts</p>
</div>

<div style={{background:"#1e293b",padding:"20px",borderRadius:"10px"}}>
<h3>Backlink Generator</h3>
<p>Generate high authority backlinks</p>
</div>

<div style={{background:"#1e293b",padding:"20px",borderRadius:"10px"}}>
<h3>Traffic Agent</h3>
<p>AI agent to grow website traffic</p>
</div>

</div>

</div>

</div>

)

}
