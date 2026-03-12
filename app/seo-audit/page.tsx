"use client"
import { useState } from "react"

export default function SeoAudit(){

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

<div style={{padding:"40px",background:"#0f172a",minHeight:"100vh",color:"white"}}>

<h1>SEO Audit Tool</h1>

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
Run Audit
</button>

<br/><br/>

{result && (

<div style={{background:"#1e293b",padding:"20px"}}>

<h2>SEO Plan</h2>

{result.steps.map((s:any,i:number)=>(
<p key={i}>• {s}</p>
))}

</div>

)}

</div>

)

}
