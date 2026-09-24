import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);
const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
const ctx = { waitUntil() {}, passThroughOnException() {} };
const request = (path, init = {}) => worker.fetch(new Request(`https://ravytdigital.com${path}`, init), env, ctx);
async function render(path) {
  const response = await request(path, { headers: { accept: "text/html" } });
  assert.equal(response.status, 200, path);
  return response.text();
}
function schemas(html) {
  return [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .flatMap(match => { const data = JSON.parse(match[1]); return data["@graph"] ?? [data]; });
}

test("renders production SEO metadata", async () => {
  const html = await render("/");
  assert.match(html, /<title>Gestão de Mídias Sociais e Criação de Sites \| Ravyt Digital<\/title>/i);
  assert.match(html, /<meta[^>]+name="description"[^>]+content=/i);
  assert.match(html, /<meta[^>]+property="og:image"[^>]+content=/i);
  assert.doesNotMatch(html, /codex-preview/i);
  assert.equal(schemas(html).filter(item => item["@type"] === "Organization").length, 1);
});

test("articles expose accurate authors, canonical URLs, breadcrumbs and update dates", async () => {
  const articles = [
    ["gestao-de-redes-sociais-ou-producao-de-conteudo", "Organization", "Ravyt Digital", "2026-09-24"],
    ["site-institucional-paginas-essenciais", "Organization", "Ravyt Digital", "2026-09-24"],
    ["criacao-de-site-para-psicologos", "Organization", "Ravyt Digital", "2026-09-24"],
    ["conteudo-para-psicologos-parentais", "Person", "Ytala Cabral", "2026-09-13"],
    ["comunicacao-etica-psicologia-parental", "Person", "Ytala Cabral", "2026-09-13"],
    ["autoridade-digital-psicologo-parental", "Person", "Ytala Cabral", "2026-09-13"],
  ];
  for (const [slug, authorType, authorName, modified] of articles) {
    const html = await render(`/blog/${slug}`);
    const data = schemas(html);
    const article = data.find(item => item["@type"] === "BlogPosting");
    assert.ok(article, slug);
    assert.equal(article.author["@type"], authorType);
    assert.equal(article.author.name, authorName);
    assert.ok(article.author.url.startsWith("https://ravytdigital.com"));
    assert.equal(article.dateModified, modified);
    assert.ok(data.some(item => item["@id"] === article.publisher["@id"] && item.name === "Ravyt Digital"));
    assert.match(html, new RegExp(`<link[^>]*rel="canonical"[^>]*href="https://ravytdigital.com/blog/${slug}"`));
    const crumbs = data.filter(item => item["@type"] === "BreadcrumbList");
    assert.equal(crumbs.length, 1);
    assert.equal(crumbs[0].itemListElement.at(-1).item, article.url);
    if (authorType === "Organization") {
      assert.match(html, /Resposta rápida/);
      assert.match(html, /id="checklist"/);
    }
  }
  const profile = schemas(await render("/autores/ytala-cabral")).find(item => item["@type"] === "ProfilePage");
  assert.equal(profile.mainEntity.name, "Ytala Cabral");
  const sitemap = await (await request("/sitemap.xml")).text();
  for (const [slug, , , modified] of articles) {
    const item = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].find(match => match[1].includes(`/blog/${slug}</loc>`));
    assert.ok(item?.[1].includes(`<lastmod>${modified}`), `Sitemap update date: ${slug}`);
  }
});

test("analytics records only allowed destinations and discards extra payload fields", async () => {
  const logs = [];
  const originalLog = console.log;
  console.log = (...args) => logs.push(args.join(" "));
  try {
    const post = (body, origin = "https://ravytdigital.com") => request("/api/analytics", {
      method: "POST", headers: { origin, "content-type": "application/json" }, body: JSON.stringify(body),
    });
    const payload = { event: "service_page_click", path: "/blog/site-institucional-paginas-essenciais", destination: "/criacao-de-sites-online", message: "must-not-be-stored", email: "example@example.com" };
    assert.equal((await post(payload)).status, 204);
    const entry = logs.map(line => { try { return JSON.parse(line); } catch { return null; } }).find(item => item?.event === payload.event);
    assert.deepEqual(Object.keys(entry).sort(), ["destination", "event", "occurredAt", "path"]);
    assert.equal(entry.destination, payload.destination);
    assert.equal((await post({ ...payload, destination: "/criacao-de-sites-online?email=example@example.com" })).status, 400);
    assert.equal((await post({ ...payload, destination: "https://example.com" })).status, 400);
    assert.equal((await post({ ...payload, path: "/?secret=value" })).status, 400);
    assert.equal((await post(payload, "https://example.com")).status, 403);
  } finally { console.log = originalLog; }
});
