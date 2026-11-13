import {plans} from '@/lib/plans';

const proposalPlans = new Set<string>([...plans.map(plan => plan.id), 'google', 'nao-sei']);
const referralPattern = /^[a-zA-Z0-9_-]{3,40}$/;
const uuidPattern = /^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i;
const campaignPattern = /^[a-zA-Z0-9_. -]{1,100}$/;
const headers = {'Cache-Control': 'no-store'};
const json = (body: object, status = 200) => Response.json(body, {status, headers});

export interface ProposalDatabase {
  prepare(sql: string): {bind(...params: Array<string | null>): {run(): Promise<unknown>}};
}

export async function submitProposal(request: Request, database?: ProposalDatabase) {
  const origin = request.headers.get('origin');
  if (origin !== new URL(request.url).origin) return json({error: 'Origem inválida.'}, 403);
  if (!request.headers.get('content-type')?.startsWith('application/json')) return json({error: 'Formato inválido.'}, 415);
  if (Number(request.headers.get('content-length')) > 8192) return json({error: 'Solicitação longa demais.'}, 413);

  let body: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (raw.length > 8192) return json({error: 'Solicitação longa demais.'}, 413);
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return json({error: 'Formato inválido.'}, 400);
    body = parsed;
  } catch {
    return json({error: 'Formato inválido.'}, 400);
  }

  const string = (key: string) => typeof body[key] === 'string' ? (body[key] as string).trim() : '';
  const kind = string('kind');
  const id = string('requestId').toLowerCase();
  const name = string('name');
  const business = string('business');
  const contact = string('contact');
  const plan = string('plan');
  const description = string('description');
  const code = string('referral');
  const telephone = contact.replace(/[^\d]/g, '');
  const validContact = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact) || (/^[+\d().\s-]+$/.test(contact) && telephone.length >= 10 && telephone.length <= 15);
  if ((kind !== 'proposta' && kind !== 'parceria') || !uuidPattern.test(id) || string('consent') !== 'sim' || string('website')) {
    return json({error: 'Revise a solicitação e tente novamente.'}, 400);
  }
  if (!name || name.length > 100 || business.length > 140 || (kind === 'proposta' && (!business || !proposalPlans.has(plan))) ||
      !validContact || contact.length > 160 || description.length < 10 || description.length > 1200) {
    return json({error: 'Revise os campos e informe um WhatsApp com DDD ou um e-mail válido.'}, 400);
  }

  const campaign = body.campaign && typeof body.campaign === 'object' ? body.campaign as Record<string, unknown> : {};
  const campaignValue = (key: string) => typeof campaign[key] === 'string' && campaignPattern.test(campaign[key]) ? campaign[key] : null;
  const reference = 'RVT-' + id.slice(0, 13).replace('-', '').toUpperCase();
  try {
    if (!database) throw new Error('Database binding unavailable');
    await database.prepare(`INSERT INTO ravyt_commercial_requests
      (id, reference, kind, name, business, contact, description, plan, referral, utm_source, utm_medium, utm_campaign, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ON CONFLICT(id) DO NOTHING`).bind(
      id, reference, kind, name, business, contact, description,
      kind === 'proposta' ? plan : null,
      kind === 'proposta' && referralPattern.test(code) ? code : null,
      campaignValue('utm_source'), campaignValue('utm_medium'), campaignValue('utm_campaign'), new Date().toISOString()
    ).run();
    console.info('Pedido comercial recebido', {reference, kind});
    return json({reference}, 201);
  } catch {
    console.error('Falha ao gravar pedido comercial');
    return json({error: 'O formulário está indisponível. Tente novamente ou fale com a Ravyt pelo WhatsApp.'}, 503);
  }
}
