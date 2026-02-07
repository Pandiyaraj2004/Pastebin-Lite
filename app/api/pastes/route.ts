import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const content = body.content;
    const ttl_seconds = body.ttl_seconds;
    const max_views = body.max_views;

    if (!content || typeof content !== "string" || content.trim() === "") {
      return NextResponse.json(
        { error: "Content is required" },
        { status: 400 }
      );
    }

    if (ttl_seconds !== undefined) {
      if (!Number.isInteger(ttl_seconds) || ttl_seconds < 1) {
        return NextResponse.json(
          { error: "Invalid ttl_seconds" },
          { status: 400 }
        );
      }
    }

    if (max_views !== undefined) {
      if (!Number.isInteger(max_views) || max_views < 1) {
        return NextResponse.json(
          { error: "Invalid max_views" },
          { status: 400 }
        );
      }
    }

    const id = crypto.randomUUID();
    const now = Date.now();

    const expires_at =
      ttl_seconds !== undefined ? now + ttl_seconds * 1000 : null;

    const paste = {
      content,
      expires_at,
      remaining_views: max_views ?? null,
    };

    // 🔥 SAVE
    await redis.set(`paste:${id}`, JSON.stringify(paste));

    // 🔥 DEBUG CHECK
    const check = await redis.get(`paste:${id}`);
    console.log("CHECK AFTER SAVE:", check);

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;

    return NextResponse.json({
      id,
      url: `${baseUrl}/p/${id}`,
    });
  } catch (error) {
    console.error("CREATE ERROR:", error);
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
