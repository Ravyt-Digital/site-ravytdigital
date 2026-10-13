import { NextResponse } from "next/server";
import { analyticsEvents } from "@/lib/analytics";

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return new NextResponse(null, { status: 403 });
  const raw = await request.text();
  if (raw.length > 2048) return new NextResponse(null, { status: 413 });
  let body;
  try { body = JSON.parse(raw); } catch { return new NextResponse(null, { status: 400 }); }
  if (!body || typeof body.path !== "string" || !/^\/[a-zA-Z0-9/_-]*$/.test(body.path) || body.path.length > 300 || !analyticsEvents.includes(body.event)) {
    return new NextResponse(null, { status: 400 });
  }
  // Store only the documented fields, never arbitrary request data or full contact URLs.
  console.log(JSON.stringify({
    event: body.event, path: body.path,
    occurredAt: new Date().toISOString(),
  }));
  return new NextResponse(null, { status: 204, headers: { "cache-control": "no-store" } });
}
