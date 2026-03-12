"use client"

import { useState } from "react"

export default function Backlinks(){

const [domain,setDomain] = useState("")
const [result,setResult] = useState<any>(null)

async function generate(){

const res = await fetch(
`https://rankpilot-ai.onrender.com/backlinks?domain=${domain}`
)

const data = await res.json()

setResult(data)

}

return(

<div style={{padding:40}}>

<h1>Backlink Generator</h1>

<input
placeholder="Enter website"
value={domain}
onChange={(e)=>setDomain(e.target.value)}
style={{padding:10,marginRight:10}}
/>

<button
onClick={generate}
style={{padding:"10px 20px"}}
>
Generate Backlinks
</button>

{result && (
<div style={{marginTop:30}}>

<h3>Backlink Opportunities</h3>

<pre>{JSON.stringify(result,null,2)}</pre>

</div>
)}

</div>

)
}
