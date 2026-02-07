import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

type Paste = {
  content: string;
  expires_at: number | null;
  remaining_views: number | null;
};

function getNow(req: Request) {
  if (process.env.TEST_MODE === "1") {
    const header = req.headers.get("x-test-now-ms");
    if (header) return Number(header);
  }
  return Date.now();
}

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const key = `paste:${id}`;

    const paste = await redis.get<Paste>(key);

    if (!paste) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const now = getNow(req);

    if (paste.expires_at !== null && now > paste.expires_at) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    if (paste.remaining_views !== null) {
      if (paste.remaining_views <= 0) {
        return NextResponse.json({ error: "Not found" }, { status: 404 });
      }

      paste.remaining_views -= 1;
      await redis.set(key, paste);
    }

    return NextResponse.json(paste);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
