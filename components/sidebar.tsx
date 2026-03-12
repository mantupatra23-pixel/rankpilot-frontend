"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-black text-white p-5">
      <h1 className="text-2xl font-bold mb-10">RankPilot</h1>

      <nav className="space-y-4">
        <Link href="/dashboard">Dashboard</Link><br/>
        <Link href="/audit">SEO Audit</Link><br/>
        <Link href="/keywords">Keywords</Link><br/>
        <Link href="/backlinks">Backlinks</Link><br/>
        <Link href="/content">AI Content</Link>
      </nav>
    </div>
  );
}
