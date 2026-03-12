import Sidebar from "../../components/Sidebar"

export default function Dashboard(){
  return(
    <div style={{display:"flex"}}>

      <Sidebar/>

      <div style={{padding:"40px",width:"100%"}}>
        <h1>RankPilot Dashboard</h1>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(3,1fr)",
          gap:"20px",
          marginTop:"30px"
        }}>

          <div style={{background:"#f1f5f9",padding:"20px",borderRadius:"10px"}}>
            <h3>SEO Score</h3>
            <h1>78</h1>
          </div>

          <div style={{background:"#f1f5f9",padding:"20px",borderRadius:"10px"}}>
            <h3>Keywords</h3>
            <h1>120</h1>
          </div>

          <div style={{background:"#f1f5f9",padding:"20px",borderRadius:"10px"}}>
            <h3>Backlinks</h3>
            <h1>56</h1>
          </div>

        </div>
      </div>

    </div>
  )
}
