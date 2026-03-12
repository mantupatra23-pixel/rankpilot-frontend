"use client"

import { useState } from "react"

let freeLimit = 3

export default function Dashboard(){

const [domain,setDomain] = useState("")
const [result,setResult] = useState<any>(null)

const runAudit = async ()=>{

if(freeLimit <= 0){
alert("Free limit finished. Upgrade to Pro Plan.")
return
}

freeLimit = freeLimit - 1

const res = await fetch("https://rankpilot-ai.onrender.com/start-growth",{
method:"POST",
headers:{ "Content-Type":"application/json" },
body:JSON.stringify({domain})
})

const data = await res.json()
setResult(data)

}

return(

<div style={{padding:"40px",background:"#020617",minHeight:"100vh",color:"white"}}>

<h1>RankPilot Dashboard</h1>

<p>Free SEO Audits Left: {freeLimit}</p>

<br/>

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
border:"none"
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
