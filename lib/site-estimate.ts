export const rates = { base: 700, page: 350, blog: 1800, crm: 250, other: 550, content: 250 };
export const contentPageLimit = 20;
export const legalItems = 'Página de Política de Privacidade e banner de aviso de cookies';
export const publicationFee = 'A Ravyt não cobra taxa de publicação.';
export const partialNotice = 'O subtotal inclui apenas os itens com preço definido. O valor final poderá mudar após o orçamento dos itens pendentes.';
export const pendingNotice = 'A Ravyt informará o valor após analisar os itens a orçar.';
export const fixedNotice = 'Este é o valor final do serviço. A Ravyt não cobrará nenhum custo adicional pelo escopo selecionado.';
export const thirdPartyNotice = 'Quando aplicáveis, domínio, hospedagem externa e assinaturas de ferramentas são pagos aos fornecedores pelo cliente.';
export const revisionPolicy = 'Você pode pedir até 6 ajustes pontuais sem custo antes da aprovação final, como trocar um texto, uma imagem ou um link. Novas páginas, funcionalidades e outras mudanças de escopo são orçadas à parte.';
export const money = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'});

export type Option = { id: string; label: string; detail?: string; price?: number };

const blog = 'Blog em WordPress com Oxygen Builder';
const customStructure = 'Quantidade de páginas a definir';
export const pageOptions: Option[] = Array.from({length:5}, (_, i) => ({
  id:String(i+1), label:pagesLabel(i+1), price:rates.base+i*rates.page,
  ...(i === 0 ? {detail:'Até cinco seções'} : {}),
}));
pageOptions.push({id:'custom',label:'Outra quantidade',detail:'Sob orçamento'});

export const specialProjects: Option[] = [
  {id:'blog',label:blog,detail:'Listagem de posts, modelo de artigo e painel editorial.',price:rates.blog},
  {id:'wordpress',label:'Portal de notícias ou outro site em WordPress',detail:'Sob orçamento'},
  {id:'store',label:'Loja virtual',detail:'Sob orçamento'},
];
export const contactOptions: Option[] = [
  {id:'whatsapp',label:'Só o botão de WhatsApp',detail:'Sem custo adicional'},
  {id:'crm',label:'Integração com CRM',detail:'Um formulário com conector compatível.',price:rates.crm},
  {id:'other',label:'Integração com outra plataforma',detail:'Uma plataforma externa com integração padrão.',price:rates.other},
  {id:'custom',label:'Integração personalizada',detail:'Automações, APIs ou várias ferramentas sob orçamento.'},
];
export const materialOptions: Option[] = [
  {id:'ready',label:'Já tenho os materiais',detail:'Envio meus textos e imagens.'},
  {id:'preparing',label:'Ainda estou preparando',detail:'Vou produzir e entregar os materiais.'},
  {id:'ravyt',label:'Quero que a Ravyt produza',detail:'Uma página por R$ 250,00. Duas ou mais sob orçamento.'},
];

const externalHosting = {id:'external',label:'Domínio próprio e hospedagem externa',detail:'O cliente contrata e paga os fornecedores.'};
const publicationDetails: Record<string,string> = {
  ravyt:'Hospedagem na Cloudflare e endereço em rvt.bio.',
  'own-domain':'Hospedagem na Cloudflare. Registro e renovação do domínio próprio por conta do cliente.',
  external:'Domínio próprio e hospedagem externa contratados e pagos pelo cliente.',
};

export const initialEstimate = {structure:'', contact:'', contactDetail:'', materials:'', contentPages:1, hosting:''};
export type Estimate = typeof initialEstimate;

export function commercialPages(structure: string) {
  return /^[1-5]$/.test(structure) ? Number(structure) : 0;
}
export function pagesLabel(count: number) {
  return count + (count === 1 ? ' página' : ' páginas');
}

export function publicationFor(estimate: Estimate) {
  if (specialProjects.some(({id}) => id === estimate.structure)) return {
    help:'WordPress e lojas virtuais precisam de domínio próprio e hospedagem externa compatível, pagos pelo cliente.',
    options:[
      {...externalHosting,label:'Já tenho domínio e hospedagem externa'},
      {id:'undecided',label:'Ainda preciso escolher domínio ou hospedagem',detail:'A Ravyt orienta sobre os requisitos.'},
    ],
    detail:publicationDetails.external,
  };
  if (estimate.contact && estimate.contact !== 'whatsapp') return {
    help:'A Ravyt verifica se a integração é compatível com a hospedagem de um site estático.',
    options:[externalHosting,{id:'undecided',label:'Confirmar compatibilidade com a Ravyt'}],
    detail:'Publicação a definir após a análise da integração. Domínio próprio e hospedagem externa ficam por conta do cliente.',
  };
  return {
    help:'Cloudflare e rvt.bio são opções da Ravyt para sites estáticos. Domínio próprio, hospedagem externa e suas renovações ficam por conta do cliente.',
    options:[
      {id:'ravyt',label:'Cloudflare e rvt.bio'},
      {id:'own-domain',label:'Cloudflare e domínio próprio',detail:'O cliente registra e renova o domínio.'},
      externalHosting,
      {id:'undecided',label:'Ainda preciso decidir'},
    ],
    detail:'Publicação a definir. Cloudflare e rvt.bio estão disponíveis para sites estáticos.',
  };
}

export function calculateEstimate(estimate: Estimate) {
  const pageCount = commercialPages(estimate.structure);
  const contentCount = pageCount ? Math.min(pageCount,estimate.contentPages) : estimate.contentPages;
  const special = specialProjects.find(({id}) => id === estimate.structure);
  const contact = contactOptions.find(({id}) => id === estimate.contact);
  const rows: {label:string; amount:number}[] = [];
  const pending: string[] = [];

  if (pageCount) {
    rows.push({label:'Criação inicial',amount:rates.base});
    if (pageCount > 1) {
      const extra = pageCount - 1;
      rows.push({label:pagesLabel(extra) + (extra === 1 ? ' extra' : ' extras'),amount:extra*rates.page});
    }
  }
  if (special?.price) rows.push({label:special.label,amount:special.price});
  else if (special) pending.push(special.label);
  if (estimate.structure === 'custom') pending.push('Quantidade e escopo das páginas extras');
  if (contact?.price) rows.push({label:contact.label,amount:contact.price});
  if (estimate.contact === 'custom') pending.push('Integração personalizada');
  if (estimate.materials === 'ravyt') {
    const label = 'Textos e imagens ('+pagesLabel(contentCount)+')';
    if (contentCount === 1) rows.push({label,amount:rates.content});
    else pending.push(label);
  }

  const publication = publicationFor(estimate);
  const selectedHosting = publication.options.find(({id}) => id === estimate.hosting);
  const hosting = (selectedHosting && publicationDetails[selectedHosting.id]) || publication.detail;
  const materials = {
    ready:'O cliente fornece os textos e as imagens que já tem.',
    preparing:'O cliente vai preparar e fornecer os textos e as imagens.',
    ravyt:'A Ravyt produz textos e imagens para '+pagesLabel(contentCount)+'. Artigos e cadastros de produtos são orçados à parte.',
  }[estimate.materials];
  const structure = special?.label || (pageCount ? pagesLabel(pageCount) + (pageCount === 1 ? ' comercial' : ' comerciais') : customStructure);
  return {rows,pending,hosting,materials,structure,contact:contact?.label,contentCount,
    total:rows.reduce((sum,row) => sum + row.amount,0)};
}

export function estimateWhatsApp(estimate: Estimate) {
  const {rows,pending,hosting,materials,structure,contact,total} = calculateEstimate(estimate);
  const message = [
    'Olá, Ravyt! Simulei o orçamento do meu site e quero conversar sobre este projeto.',
    '',
    'Estrutura: '+structure,
    'Contato: '+contact+(estimate.contactDetail ? ' ('+estimate.contactDetail.trim()+')' : ''),
    ...rows.map(({label,amount}) => '• '+label+' — '+money.format(amount)),
    rows.length ? (pending.length ? 'Subtotal dos itens com preço definido: ' : 'Valor do serviço: ')+money.format(total) : 'Valor da criação: a orçar.',
    ...(pending.length ? ['Itens a orçar: '+pending.join('; ')+'.', rows.length ? partialNotice : pendingNotice] : [fixedNotice]),
    'Textos e imagens: '+materials,
    'Incluído na criação: '+legalItems+'.',
    revisionPolicy,
    'Publicação: '+hosting+' '+publicationFee,
    thirdPartyNotice,
  ].join('\n');
  return 'https://wa.me/5588996777332?text='+encodeURIComponent(message);
}
