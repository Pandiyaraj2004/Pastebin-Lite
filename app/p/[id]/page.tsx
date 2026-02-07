import { notFound } from "next/navigation";

async function getPaste(id: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/pastes/${id}`,
      { cache: "no-store" }
    );

    if (!res.ok) return null;

    return await res.json();
  } catch {
    return null;
  }
}

export default async function PastePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // ✅ IMPORTANT: unwrap params
  const { id } = await params;

  const paste = await getPaste(id);

  if (!paste) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-3xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-indigo-700 text-center">
          View Paste
        </h1>

        <div className="bg-gray-100 p-6 rounded-xl border">
          <pre className="whitespace-pre-wrap text-gray-900 text-lg">
            {paste.content}
          </pre>
        </div>
      </div>
    </div>
  );
}
