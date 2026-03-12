"use client"

export default function Pricing(){

const upgrade = async ()=>{

const res = await fetch("/api/checkout",{method:"POST"})
const data = await res.json()

window.location.href = data.url

}

return(

<div style={{
background:"#0f172a",
minHeight:"100vh",
color:"white",
padding:"60px"
}}>

<h1>Pricing Plans</h1>

<br/>

<div style={{display:"flex",gap:"30px"}}>

<div style={{background:"#1e293b",padding:"30px"}}>
<h2>Free</h2>
<p>$0/month</p>
<p>3 SEO audits</p>
</div>

<div style={{background:"#1e293b",padding:"30px"}}>
<h2>Pro</h2>
<p>$29/month</p>
<p>Unlimited SEO tools</p>

<button
onClick={upgrade}
style={{
marginTop:"10px",
padding:"10px 20px",
background:"#22c55e",
border:"none",
borderRadius:"6px"
}}
>
Upgrade to Pro
</button>

</div>

<div style={{background:"#1e293b",padding:"30px"}}>
<h2>Agency</h2>
<p>$99/month</p>
<p>Unlimited websites</p>
</div>

</div>

</div>

)

}
