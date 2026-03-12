"use client"
import { useState } from "react"

export default function Home() {

  const [domain,setDomain] = useState("")
  const [result,setResult] = useState(null)

  const runAudit = async () => {

    const res = await fetch("https://rankpilot-ai.onrender.com/start-growth",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        domain:domain
      })
    })

    const data = await res.json()
    setResult(data)
  }

  return (
    <main style={{
      background:"#0f172a",
      minHeight:"100vh",
      color:"white",
      padding:"40px"
    }}>

      <h1 style={{fontSize:"40px"}}>RankPilot AI</h1>
      <p>AI SEO Agent + Traffic Growth System</p>

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
          <h2>Growth Plan</h2>

          {result.steps.map((s:any,i:number)=>(
            <p key={i}>• {s}</p>
          ))}

        </div>
      )}

    </main>
  )
}
