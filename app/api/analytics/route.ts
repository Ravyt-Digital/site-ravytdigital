import { NextResponse } from "next/server";

type PageView = {
  event?: unknown;
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

  const allowedEvents = ["page_view", "whatsapp_click", "email_click", "primary_cta_click", "form_start", "form_submit", "thank_you_view"];
  const event = typeof body.event === "string" && allowedEvents.includes(body.event) ? body.event : "page_view";
  console.log(JSON.stringify({
    event,
    path: body.path,
    referrer: event === "page_view" && typeof body.referrer === "string" ? body.referrer.slice(0, 500) : null,
    viewport: typeof body.viewport === "string" ? body.viewport.slice(0, 30) : null,
    occurredAt: typeof body.occurredAt === "string" ? body.occurredAt : new Date().toISOString(),
  }));

  return new NextResponse(null, {
    status: 204,
    headers: { "cache-control": "no-store" },
  });
}
