const API = "https://rankpilot-ai.onrender.com"

export async function runAudit(domain:string){
  const res = await fetch(`${API}/start-growth?domain=${domain}`)
  return res.json()
}

export async function getKeywords(domain:string){
  const res = await fetch(`${API}/keywords?domain=${domain}`)
  return res.json()
}

export async function getBacklinks(domain:string){
  const res = await fetch(`${API}/backlinks?domain=${domain}`)
  return res.json()
}

export async function generateContent(topic:string){
  const res = await fetch(`${API}/content?topic=${topic}`)
  return res.json()
}
