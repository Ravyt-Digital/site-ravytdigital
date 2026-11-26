// Server-only: preserve D1 as source of truth and append only new simulator requests.
interface SyncStatement {
  bind(...values: Array<string | number | null>): SyncStatement;
  all<T>(): Promise<{results: T[]}>;
  run(): Promise<unknown>;
}
export interface SyncDatabase { prepare(sql: string): SyncStatement }
interface ServiceAccount { client_email: string; private_key: string }
interface Lead {
  id: string; reference: string; created_at: string; name: string; business: string;
  contact: string; plan: string; description: string; segment: string | null;
  estimate_total: number | null; estimate_pending: number | null;
}
const sheet = "'Leads do simulador'";
const endpoint = 'https://oauth2.googleapis.com/token';
const b64url = (bytes: Uint8Array) => btoa(String.fromCharCode(...bytes)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
const encode = (value: object) => b64url(new TextEncoder().encode(JSON.stringify(value)));
async function accessToken(raw: string) {
  const credentials = JSON.parse(raw) as ServiceAccount;
  if (!credentials.client_email || !credentials.private_key) throw new Error('Invalid service account');
  const key = await crypto.subtle.importKey('pkcs8', Uint8Array.from(atob(credentials.private_key.replace(/-----BEGIN PRIVATE KEY-----|-----END PRIVATE KEY-----|\s/g, '')), c => c.charCodeAt(0)), {name:'RSASSA-PKCS1-v1_5', hash:'SHA-256'}, false, ['sign']);
  const now = Math.floor(Date.now() / 1000);
  const unsigned = encode({alg:'RS256',typ:'JWT'}) + '.' + encode({iss:credentials.client_email,scope:'https://www.googleapis.com/auth/spreadsheets',aud:endpoint,iat:now,exp:now+3600});
  const signature = await crypto.subtle.sign('RSASSA-PKCS1-v1_5',key,new TextEncoder().encode(unsigned));
  const response = await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams({grant_type:'urn:ietf:params:oauth:grant-type:jwt-bearer',assertion:unsigned+'.'+b64url(new Uint8Array(signature))}),signal:AbortSignal.timeout(10000)});
  if (!response.ok) throw new Error('Google authentication failed');
  const result = await response.json() as {access_token?: string};
  if (!result.access_token) throw new Error('Missing access token');
  return result.access_token;
}
export function leadRow(lead: Lead) {
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.contact);
  // Sheets dates are local serial numbers; CRM is set to America/Fortaleza (UTC-03).
  const serial = Date.parse(lead.created_at)/86400000 + 25569 - 3/24;
  const segment = lead.segment === 'arquitetura' ? 'Arquitetura' : lead.segment === 'engenharia' ? 'Engenharia' : '';
  return [lead.id, Number.isFinite(serial)?serial:'', lead.business || lead.name, segment, '', '', lead.name,
    email ? lead.contact : '', email ? '' : lead.contact, 'Criação ou reformulação de site',
    lead.estimate_total ?? '', lead.description, 'Alta', 'Novo lead', '', '', '', '',
    'Protocolo: '+lead.reference+(lead.estimate_pending ? ' | Estimativa parcial ou sob orçamento' : ''), email ? 'E-mail — retorno da solicitação' : 'WhatsApp — retorno da solicitação'];
}
export async function syncCrm(database: SyncDatabase, credentials: string, spreadsheetId: string) {
  const pending = (await database.prepare("SELECT id,reference,created_at,name,business,contact,plan,description,segment,estimate_total,estimate_pending FROM ravyt_commercial_requests WHERE kind='proposta' AND source='simulador' AND crm_synced_at IS NULL ORDER BY created_at,id LIMIT 100").all<Lead>()).results;
  if (!pending.length) return 0;
  if (!/^[A-Za-z0-9_-]+$/.test(spreadsheetId)) throw new Error('Invalid spreadsheet ID');
  const token = await accessToken(credentials);
  const base = 'https://sheets.googleapis.com/v4/spreadsheets/'+spreadsheetId+'/values/';
  const headers = {Authorization:'Bearer '+token,'Content-Type':'application/json'};
  const read = await fetch(base+encodeURIComponent(sheet+'!A2:A'),{headers,signal:AbortSignal.timeout(10000)});
  if (!read.ok) throw new Error('CRM lookup failed');
  const result = await read.json() as {values?: string[][]};
  const existing = new Set((result.values || []).map(row=>row[0]));
  const missing = pending.filter(row=>!existing.has(row.id));
  if (missing.length) {
    const append = await fetch(base+encodeURIComponent(sheet+'!A:T')+':append?valueInputOption=RAW&insertDataOption=INSERT_ROWS',{method:'POST',headers,body:JSON.stringify({majorDimension:'ROWS',values:missing.map(leadRow)}),signal:AbortSignal.timeout(15000)});
    if (!append.ok) throw new Error('CRM append failed');
    const reply = await append.json() as {updates?: {updatedRows?: number}};
    if (reply.updates?.updatedRows !== missing.length) throw new Error('CRM append not verified');
  }
  const syncedAt = new Date().toISOString();
  for (const lead of pending) await database.prepare('UPDATE ravyt_commercial_requests SET crm_synced_at=? WHERE id=? AND crm_synced_at IS NULL').bind(syncedAt,lead.id).run();
  return missing.length;
}
