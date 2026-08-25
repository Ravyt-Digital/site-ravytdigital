import { NextResponse } from "next/server";

type PageView = {
  path?: unknown;
  referrer?: unknown;
  viewport?: unknown;
  occurredAt?: unknown;
};

export async function POST(request: Request) {
  let body: PageView;

  try {
    body = await request.json() as PageView;
  } catch {
    return NextResponse.json({ error: "Payload inválido." }, { status: 400 });
  }

  if (typeof body.path !== "string" || !body.path.startsWith("/") || body.path.length > 300) {
    return NextResponse.json({ error: "Caminho inválido." }, { status: 400 });
  }

  console.log(JSON.stringify({
    event: "page_view",
    path: body.path,
    referrer: typeof body.referrer === "string" ? body.referrer.slice(0, 500) : null,
    viewport: typeof body.viewport === "string" ? body.viewport.slice(0, 30) : null,
    occurredAt: typeof body.occurredAt === "string" ? body.occurredAt : new Date().toISOString(),
  }));

  return new NextResponse(null, {
    status: 204,
    headers: { "cache-control": "no-store" },
  });
}
