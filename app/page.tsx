"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [content, setContent] = useState("");
  const [ttl, setTtl] = useState("");
  const [views, setViews] = useState("");
  const [result, setResult] = useState("");

  async function createPaste() {
    const res = await fetch("/api/pastes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content,
        ttl_seconds: ttl ? Number(ttl) : undefined,
        max_views: views ? Number(views) : undefined,
      }),
    });

    const data = await res.json();
    if (res.ok) setResult(data.url);
    else alert(data.error);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-lg border border-gray-200">
        
          <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-900 flex items-center justify-center gap-2">
              <Image src="/rocket.png" alt="Rocket" width={40} height={40}/> Pastebin Lite
              </h1>

        <textarea
          className="w-full p-4 border border-gray-300 rounded-xl mb-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows={6}
          placeholder="Write your paste here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div className="flex gap-4 mb-6">
          <input
            type="number"
            placeholder="TTL (seconds)"
            className="flex-1 p-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={ttl}
            onChange={(e) => setTtl(e.target.value)}
          />
          <input
            type="number"
            placeholder="Max Views"
            className="flex-1 p-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={views}
            onChange={(e) => setViews(e.target.value)}
          />
        </div>

        <button
          onClick={createPaste}
          className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition duration-200 shadow-md"
        >
          Create Paste
        </button>

        {result && (
          <div className="mt-6 text-center bg-gray-100 p-4 rounded-xl border border-gray-200">
            <p className="text-gray-700 mb-2 font-medium">Share this link:</p>
            <a
              href={result}
              className="text-indigo-700 font-semibold break-all hover:underline"
            >
              {result}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
