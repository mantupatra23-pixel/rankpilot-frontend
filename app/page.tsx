export default function Home() {
  return (
    <main style={{
      background:"#0f172a",
      minHeight:"100vh",
      color:"white",
      padding:"40px",
      fontFamily:"Arial"
    }}>

      <h1 style={{fontSize:"40px",marginBottom:"20px"}}>
        RankPilot AI
      </h1>

      <p style={{marginBottom:"40px"}}>
        AI SEO Agent + AI Traffic Growth System
      </p>

      <div style={{
        display:"grid",
        gridTemplateColumns:"1fr 1fr",
        gap:"20px"
      }}>

        <div style={{background:"#1e293b",padding:"20px",borderRadius:"10px"}}>
          <h2>SEO Audit</h2>
          <p>Scan your website SEO issues instantly</p>
        </div>

        <div style={{background:"#1e293b",padding:"20px",borderRadius:"10px"}}>
          <h2>AI Content Generator</h2>
          <p>Create SEO optimized blogs using AI</p>
        </div>

        <div style={{background:"#1e293b",padding:"20px",borderRadius:"10px"}}>
          <h2>Backlink Generator</h2>
          <p>Generate high authority backlinks automatically</p>
        </div>

        <div style={{background:"#1e293b",padding:"20px",borderRadius:"10px"}}>
          <h2>Traffic Growth Agent</h2>
          <p>AI agent that grows your website traffic</p>
        </div>

      </div>

    </main>
  )
}
