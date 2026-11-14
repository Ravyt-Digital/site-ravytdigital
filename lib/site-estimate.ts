export const rates = { base: 700, page: 350, blog: 1800, crm: 250, other: 550, content: 250 };
export const contentPageLimit = 20;
export const legalItems = 'Página de Política de Privacidade e banner de aviso de cookies';
export const publicationFee = 'A Ravyt não cobra taxa de publicação.';
export const partialNotice = 'O subtotal mostra os itens já calculados. O valor final pode mudar após a análise do que está pendente.';
export const pendingNotice = 'A Ravyt informará o valor após analisar os itens a orçar.';
export const fixedNotice = 'Este é o valor final do serviço. A Ravyt não cobrará nenhum custo adicional pelo escopo selecionado.';
export const revisionPolicy = 'Você pode pedir até 6 ajustes pontuais sem custo antes da aprovação final. A troca de um texto, de uma imagem ou de um link conta como um ajuste. Novas páginas e funcionalidades são orçadas à parte.';
export const termsNote = 'A Ravyt confirma o prazo de entrega, as condições de pagamento e a validade do orçamento na proposta.';
export const timingOptions = ['Nos próximos 30 dias', 'Em 1 a 3 meses', 'Ainda estou pesquisando'] as const;
export const money = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'});

export type Option = { id: string; label: string; detail?: string; price?: number };

const blog = 'Blog em WordPress';
const customStructure = 'Quantidade de páginas a definir';
export const pageOptions: Option[] = Array.from({length:5}, (_, i) => ({
  id:String(i+1), label:pagesLabel(i+1), price:rates.base+i*rates.page,
  ...(i === 0 ? {detail:'Até cinco seções'} : {}),
}));
pageOptions.push({id:'custom',label:'Outra quantidade ou ainda não sei',detail:'Sob orçamento'});

export const specialProjects: Option[] = [
  {id:'blog',label:blog,detail:'Listagem de posts, modelo de artigo e painel para publicar. Desenvolvimento com Oxygen Builder.',price:rates.blog},
  {id:'blog-site',label:'Site institucional com blog',detail:'Blog com valor definido. Páginas institucionais sob orçamento.'},
  {id:'wordpress',label:'Portal de notícias ou outro site em WordPress',detail:'Sob orçamento'},
  {id:'store',label:'Loja virtual',detail:'Sob orçamento'},
];
export const contactOptions: Option[] = [
  {id:'whatsapp',label:'Só o botão de WhatsApp',detail:'Sem custo adicional'},
  {id:'crm',label:'Integração com CRM',detail:'Um formulário com conector compatível.',price:rates.crm},
  {id:'other',label:'Integração com outra plataforma',detail:'Uma plataforma externa com integração padrão.',price:rates.other},
  {id:'custom',label:'Integração personalizada',detail:'Automações, APIs ou várias ferramentas sob orçamento.'},
  {id:'undecided',label:'Ainda não sei como receber contatos',detail:'A Ravyt ajuda a escolher a forma de contato.'},
];
export const materialOptions: Option[] = [
  {id:'ready',label:'Já tenho os materiais',detail:'Envio meus textos e imagens.'},
  {id:'preparing',label:'Ainda estou preparando',detail:'Vou produzir e entregar os materiais.'},
  {id:'ravyt',label:'Quero que a Ravyt produza',detail:'Uma página por R$ 250,00. Duas ou mais sob orçamento.'},
];

const externalHosting = {id:'external',label:'Meu domínio e hospedagem externa',detail:'Você contrata e paga os fornecedores.'};
const publicationDetails: Record<string,string> = {
  ravyt:'Hospedagem na Cloudflare e endereço em rvt.bio oferecidos pela Ravyt.',
  'own-domain':'Hospedagem na Cloudflare com seu domínio próprio.',
  external:'Publicação com domínio próprio e hospedagem externa.',
};

const specialHostingDetails = 'Publicação com domínio próprio e hospedagem externa compatível.';
const integrationCosts = 'Assinaturas do CRM, da plataforma ou do conector, se necessárias, são pagas aos fornecedores.';
export const initialEstimate = {structure:'', brief:'', contact:'', contactDetail:'', materials:'', contentPages:1, hosting:'', timing:''};
export type Estimate = typeof initialEstimate;

export function commercialPages(structure: string) {
  return /^[1-5]$/.test(structure) ? Number(structure) : 0;
}
export function pagesLabel(count: number) {
  return count + (count === 1 ? ' página' : ' páginas');
}

export function requiresBrief(structure: string) {
  return ['custom', 'blog-site', 'wordpress', 'store'].includes(structure);
}

export function publicationFor(estimate: Estimate) {
  if (specialProjects.some(({id}) => id === estimate.structure)) return {
    help:'WordPress e lojas virtuais precisam de domínio próprio e hospedagem externa compatível, pagos pelo cliente.',
    options:[
      {...externalHosting,label:'Já tenho domínio e hospedagem externa'},
      {id:'undecided',label:'Ainda preciso escolher domínio ou hospedagem',detail:'A Ravyt orienta sobre os requisitos.'},
    ],
    detail:specialHostingDetails,
  };
  return {
    help:'Para sites estáticos, a Ravyt oferece hospedagem na Cloudflare e endereço em rvt.bio. Se escolher uma integração, a Ravyt confirma se ela funciona na hospedagem escolhida.',
    options:[
      {id:'ravyt',label:'Cloudflare e endereço em rvt.bio',detail:'Use um endereço como suaempresa.rvt.bio.'},
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
  const hasBlog = estimate.structure === 'blog' || estimate.structure === 'blog-site';
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
  if (hasBlog) rows.push({label:blog,amount:rates.blog});
  if (estimate.structure === 'blog-site') pending.push('Páginas institucionais');
  if (special && !hasBlog) pending.push(special.label);
  if (estimate.structure === 'custom') pending.push('Quantidade e escopo das páginas do site');
  if (contact?.price) rows.push({label:contact.label,amount:contact.price});
  if (contact?.price) pending.push('Compatibilidade da integração padrão' + (estimate.contactDetail.trim() ? ' com ' + estimate.contactDetail.trim() : ''));
  if (estimate.contact === 'custom') pending.push('Integração personalizada');
  if (estimate.contact === 'undecided') pending.push('Forma de contato a definir');
  if (estimate.materials === 'ravyt') {
    const label = 'Textos e imagens ('+pagesLabel(contentCount)+')';
    if (contentCount === 1) rows.push({label,amount:rates.content});
    else pending.push(label);
  }

  const publication = publicationFor(estimate);
  const selectedHosting = publication.options.find(({id}) => id === estimate.hosting);
  const hosting = special ? publication.detail : (selectedHosting && publicationDetails[selectedHosting.id]) || publication.detail;
  const providerCosts = [
    ...(special ? ['Domínio e hospedagem externa são pagos aos fornecedores.'] :
      estimate.hosting === 'ravyt' ? [] :
      estimate.hosting === 'own-domain' ? ['Registro e renovação do domínio próprio são pagos ao fornecedor.'] :
      estimate.hosting === 'external' ? ['Domínio e hospedagem externa são pagos aos fornecedores.'] :
      ['Se escolher domínio próprio ou hospedagem externa, os valores serão pagos aos fornecedores.']),
    ...(hasBlog ? ['A proposta confirma se a licença do Oxygen Builder e eventuais renovações estão incluídas.'] : []),
    ...(contact?.price || estimate.contact === 'custom' ? [integrationCosts] : []),
  ];
  const materials = {
    ready:'O cliente fornece os textos e as imagens que já tem.',
    preparing:'O cliente vai preparar e fornecer os textos e as imagens.',
    ravyt:'A Ravyt produz textos e imagens para '+pagesLabel(contentCount)+
      (hasBlog || estimate.structure === 'wordpress' ? '. A produção de artigos é orçada à parte.' :
        estimate.structure === 'store' ? '. O cadastro de produtos é orçado à parte.' : '.'),
  }[estimate.materials];
  const structure = special?.label || (pageCount ? pagesLabel(pageCount) + (pageCount === 1 ? ' comercial' : ' comerciais') : customStructure);
  return {rows,pending,hosting,providerCosts,materials,structure,contact:contact?.label,contentCount,
    total:rows.reduce((sum,row) => sum + row.amount,0)};
}

export function estimateSummary(estimate: Estimate) {
  const {rows,pending,hosting,providerCosts,materials,structure,contact,total} = calculateEstimate(estimate);
  return [
    'Orçamento do meu projeto com a Ravyt Digital',
    'Estrutura: '+structure,
    ...(estimate.brief.trim() ? ['O que preciso: '+estimate.brief.trim()] : []),
    ...(estimate.timing ? ['Quando preciso: '+estimate.timing] : []),
    'Contato: '+contact+(estimate.contactDetail ? ' ('+estimate.contactDetail.trim()+')' : ''),
    ...rows.map(({label,amount}) => '• '+label+' — '+money.format(amount)),
    rows.length ? (pending.length ? 'Subtotal dos itens com preço definido: ' : 'Valor do serviço: ')+money.format(total) : 'Valor da criação: a orçar.',
    ...(pending.length ? ['Itens a orçar: '+pending.join('; ')+'.', rows.length ? partialNotice : pendingNotice] : [fixedNotice]),
    'Textos e imagens: '+materials,
    'Incluído na criação: '+legalItems+'.',
    revisionPolicy,
    'Publicação: '+hosting+' '+publicationFee,
    ...providerCosts,
    termsNote,
  ].join('\n');
}

export function estimateWhatsApp(summary: string, referral = '') {
  const source = referral ? '\nCódigo de indicação: ' + referral : '';
  return 'https://wa.me/5588996777332?text=' +
    encodeURIComponent('Olá, Ravyt! Quero conversar sobre este projeto.\n\n' + summary + source);
}
