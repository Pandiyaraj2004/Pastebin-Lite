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
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 flex items-center justify-center p-4 sm:p-6 relative">

      {/* Main card */}
      <div className="bg-white shadow-2xl rounded-3xl p-6 sm:p-10 w-full max-w-md sm:max-w-lg border border-gray-200">
        
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-6 sm:mb-8 text-gray-900 flex items-center justify-center gap-2">
          <Image src="/rocket.png" alt="Rocket" width={36} height={36} /> Pastebin Lite
        </h1>

        <textarea
          className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl mb-4 sm:mb-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          rows={5}
          placeholder="Write your paste here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
          <input
            type="number"
            placeholder="TTL (seconds)"
            className="w-full sm:flex-1 p-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={ttl}
            onChange={(e) => setTtl(e.target.value)}
          />
          <input
            type="number"
            placeholder="Max Views"
            className="w-full sm:flex-1 p-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={views}
            onChange={(e) => setViews(e.target.value)}
          />
        </div>

        <button
          onClick={createPaste}
          className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition duration-200 shadow-md mb-4 sm:mb-6"
        >
          Create Paste
        </button>

        {result && (
          <div className="mt-4 sm:mt-6 text-center bg-gray-100 p-3 sm:p-4 rounded-xl border border-gray-200 break-words">
            <p className="text-gray-700 mb-1 sm:mb-2 font-medium">Share this link:</p>
            <a
              href={result}
              className="text-indigo-700 font-semibold hover:underline break-all"
            >
              {result}
            </a>
          </div>
        )}
      </div>

      {/* Floating bottom-right badge */}
      <div className="fixed bottom-1 right-4 sm:bottom-6 sm:right-6 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-md text-gray-700 text-sm flex items-center gap-1 select-none z-50">
        🚀 Built by Pandiyaraj
      </div>

    </div>
  );
}
