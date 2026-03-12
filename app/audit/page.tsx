"use client"

import {useState} from "react"
import {runAudit} from "../../lib/api"

export default function Audit(){

const [domain,setDomain] = useState("")
const [result,setResult] = useState<any>(null)

async function start(){
const data = await runAudit(domain)
setResult(data)
}

return(
<div style={{padding:40}}>

<h1>SEO Audit</h1>

<input
placeholder="Enter domain"
value={domain}
onChange={(e)=>setDomain(e.target.value)}
/>

<button onClick={start}>Run Audit</button>

{result && (
<pre>{JSON.stringify(result,null,2)}</pre>
)}

</div>
)
}
