"use client"

import { useState } from "react"

export default function AIBlog() {

  const [keyword, setKeyword] = useState("")
  const [blog, setBlog] = useState("")

  const generateBlog = async () => {

    if (!keyword) {
      alert("Enter keyword")
      return
    }

    try {

      const res = await fetch(
        "https://rankpilot-ai.onrender.com/blog",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ keyword })
        }
      )

      const data = await res.json()

      setBlog(data.blog)

    } catch (err) {
      console.log(err)
      alert("Error generating blog")
    }

  }

  return (

    <div
      style={{
        padding: "40px",
        background: "#0f172a",
        minHeight: "100vh",
        color: "white"
      }}
    >

      <h1>AI Blog Generator</h1>

      <br />

      <input
        placeholder="Enter keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          borderRadius: "6px",
          border: "none"
        }}
      />

      <button
        onClick={generateBlog}
        style={{
          marginLeft: "10px",
          padding: "10px 20px",
          background: "#22c55e",
          border: "none",
          borderRadius: "6px",
          color: "white",
          cursor: "pointer"
        }}
      >
        Generate
      </button>

      <br />
      <br />

      {blog && (

        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "10px"
          }}
        >

          <h2>Generated Blog</h2>

          <p>{blog}</p>

        </div>

      )}

    </div>

  )

}
