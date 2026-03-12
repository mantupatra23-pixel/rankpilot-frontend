"use client"
import { useState } from "react"

export default function AIBlog(){

const [keyword,setKeyword] = useState("")
const [blog,setBlog] = useState("")

const generateBlog = async ()=>{

const res = await fetch("https://rankpilot-ai.onrender.com/generate-blog",{
method:"POST",
headers:{ "Content-Type":"application/json" },
body:JSON.stringify({keyword})
})

const data = await res.json()
setBlog(data.blog)

}

return(

<div style={{padding:"40px",background:"#0f172a",minHeight:"100vh",color:"white"}}>

<h1>AI Blog Generator</h1>

<br/>

<input
placeholder="Enter keyword"
value={keyword}
onChange={(e)=>setKeyword(e.target.value)}
style={{padding:"10px",width:"300px"}}
/>

<button
onClick={generateBlog}
style={{
marginLeft:"10px",
padding:"10px 20px",
background:"#22c55e",
border:"none"
}}
>
Generate
</button>

<br/><br/>

{blog && (

<div style={{background:"#1e293b",padding:"20px"}}>
<p>{blog}</p>
</div>

)}

</div>

)

}
