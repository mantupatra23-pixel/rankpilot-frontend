"use client"

import Link from "next/link"

export default function Sidebar(){
  return(
    <div style={{
      width:"220px",
      height:"100vh",
      background:"#0f172a",
      color:"white",
      padding:"20px"
    }}>
      <h2 style={{marginBottom:"30px"}}>RankPilot</h2>

      <div style={{display:"flex",flexDirection:"column",gap:"15px"}}>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/audit">SEO Audit</Link>
        <Link href="/keywords">Keywords</Link>
        <Link href="/backlinks">Backlinks</Link>
        <Link href="/content">AI Content</Link>
      </div>
    </div>
  )
}
