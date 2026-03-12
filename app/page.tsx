import Link from "next/link"

export default function Home() {
  return (
    <div style={{padding:40,fontFamily:"sans-serif"}}>
      <h1>🚀 RankPilot AI</h1>
      <p>AI Powered SEO Growth Platform</p>

      <br/>

      <Link href="/dashboard">
        <button style={{
          padding:"12px 25px",
          background:"black",
          color:"white",
          borderRadius:"8px",
          border:"none"
        }}>
          Open Dashboard
        </button>
      </Link>
    </div>
  )
}
