import {PriceText} from '@/components/i18n/Regional';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { BlogHeader, BlogFooter } from '@/components/BlogChrome';
import { PlanOffer } from '@/components/i18n/PlanOffer';
import { FAQ } from '@/components/Commercial';
import { whatsappUrl } from '@/lib/contact';
import { projects } from '@/lib/commercial';
import { niches } from '@/lib/segment-niches';
import segmentStyles from './segment-landing.css?inline';

const segments = {
 arquitetura: {
  title: 'Um site para arquitetura que apresenta seus projetos com clareza.',
  accent: 'Arquitetura', hero: 'nina',
  alt: 'Captura do site demonstrativo Nina Valença, com residência contemporânea e portfólio de arquitetura',
  query: 'arquiteto residencial em Teresina',
  services: ['Arquitetura residencial', 'Interiores', 'Projetos comerciais'],
  portfolio: ['nina'], cta: 'Quero um site para meu escritório',
  sections: ['Projetos com contexto', 'Serviços e etapas', 'Região de atuação', 'Contato para proposta'],
  comparison: 'Fotos de projetos chamam atenção. Reunir tipo de projeto, processo e região atendida ajuda o visitante a entender se o escritório atende ao que ele precisa.',
  result: 'Arquitetura residencial e interiores',
  description: 'Conheça as especialidades, veja projetos organizados e entenda como solicitar uma proposta.',
 },
 engenharia: {
  title: 'Um site para engenharia que mostra sua capacidade técnica.',
  accent: 'Engenharia', hero: 'moreira',
  alt: 'Captura do site demonstrativo Vértice Norte Engenharia, com obra residencial e apresentação dos serviços técnicos',
  query: 'engenheiro civil em Teresina',
  services: ['Projetos técnicos', 'Acompanhamento de obras', 'Consultoria'],
  portfolio: ['moreira'], cta: 'Quero apresentar meus projetos',
  sections: ['Especialidades técnicas', 'Projetos e atuação', 'Equipe e processo', 'Solicitação de proposta'],
  comparison: 'O cliente precisa entender o tipo de projeto atendido, a atuação técnica e como pedir uma proposta. Essas informações podem ficar dispersas entre publicações e mensagens.',
  result: 'Engenharia civil e projetos técnicos',
  description: 'Entenda as especialidades, conheça a atuação técnica e encontre o caminho para pedir uma proposta.',
 },
 moveis: {
  title: 'Um site para móveis planejados que valoriza cada ambiente.',
  accent: 'Móveis planejados', hero: 'lumea',
  alt: 'Captura do site demonstrativo Lumea Planejados, com sala personalizada e mobiliário sob medida',
  query: 'móveis planejados em Teresina',
  services: ['Cozinhas planejadas', 'Salas e dormitórios', 'Móveis sob medida'],
  portfolio: ['lumea', 'mirauna'], cta: 'Quero um site para meus móveis planejados',
  sections: ['Ambientes organizados', 'Materiais e acabamento', 'Etapas do atendimento', 'Pedido de orçamento'],
  comparison: 'Quem busca móveis sob medida compara ambientes, materiais e acabamentos. Uma vitrine organizada facilita reconhecer o estilo do trabalho e preparar um pedido de orçamento.',
  result: 'Móveis planejados e ambientes sob medida',
  description: 'Explore os ambientes, conheça as soluções e saiba como conversar sobre seu projeto.',
 },
} as const;
const urls: Record<string,string> = {
 nina: 'https://nina-valenca-arquitetura-demo.ravytdigital.chatgpt.site',
 moreira: 'https://moreira-filho-engenharia-demo.ravytdigital.chatgpt.site',
 lumea: 'https://lumea-planejados.ravytdigital.chatgpt.site',
 mirauna: 'https://mirauna-mobiliario-demo.ravytdigital.chatgpt.site',
};
function ProjectImage({slug,alt,priority=false}:{slug:string;alt:string;priority?:boolean}) {
 return <img src={`/projects/portfolio/${slug}.webp`} srcSet={`/projects/portfolio/${slug}-400.webp 400w, /projects/portfolio/${slug}.webp 720w`} sizes="(max-width:800px) calc(100vw - 40px), (max-width:1200px) 45vw, 560px" alt={alt} width={720} height={494} loading={priority?'eager':'lazy'} fetchPriority={priority?'high':undefined} decoding="async"/>;
}
export default function SegmentedLanding({segment}:{segment:keyof typeof segments}) {
 const s=segments[segment];const niche=niches[segment];
 const selected=projects.filter(p=>(s.portfolio as readonly string[]).includes(p.slug));
 const hero=selected.find(p=>p.slug===s.hero)!;
 const contact=whatsappUrl(`Olá! Quero conversar sobre um site para ${s.accent.toLowerCase()} e o plano anual da Ravyt Digital.`);
 const CTA=({children}:{children?:React.ReactNode})=><a className="rv-button" href={contact} data-track="whatsapp_click">{children??s.cta}<span aria-hidden="true">↗</span></a>;
 return <><style dangerouslySetInnerHTML={{__html:segmentStyles}}/><BlogHeader/><main className="rv rv-segment" id="conteudo" tabIndex={-1}>
  <section className="rv-page-hero"><div className="shell segment-hero">
   <div><p className="rv-label">Sites para {s.accent.toLowerCase()}</p><h1>{s.title}</h1><p className="rv-lead">{niche.intro}</p><div className="rv-actions"><CTA/><a className="segment-plan-link" href="#investimento">Conhecer o plano ↓</a></div><p className="segment-hero-note">Site + SEO + presença no Google quando elegível. Plano anual de R$ 597.</p></div>
   <figure className="segment-showcase"><div className="segment-browser"><span aria-hidden="true">● ● ●</span><span>Prévia de site · {s.accent}</span></div><ProjectImage slug={s.hero} alt={s.alt} priority/><figcaption>{hero.name}<span>Projeto demonstrativo · marca e projetos fictícios</span></figcaption></figure>
  </div></section>
  <div className="shell"><Breadcrumbs items={[{name:'Início',href:'/'},{name:'Criação de sites',href:'/sites'},{name:`Sites para ${s.accent.toLowerCase()}`,href:segment==='arquitetura'?'/sites-para-escritorios-de-arquitetura':segment==='engenharia'?'/sites-para-empresas-de-engenharia':'/sites-para-moveis-planejados'}]}/></div>
  <section className="rv-section"><div className="shell"><p className="rv-label">A apresentação faz parte da decisão</p><h2>{niche.challenge}</h2><p className="rv-intro">{s.comparison}</p>
   <div className="segment-comparison">
    <article className="segment-scattered"><p className="rv-label">Informações dispersas</p><h3>O visitante precisa juntar as peças.</h3><div className="segment-posts" aria-hidden="true">{s.services.map((item,i)=><div key={item}><span>Publicação {String(i+1).padStart(2,'0')}</span><strong>{item}</strong><span>Mais detalhes por mensagem</span></div>)}</div><ul><li>Serviços em publicações diferentes.</li><li>Projetos sem uma visão geral da atuação.</li><li>Informações de contratação difíceis de localizar.</li></ul></article>
    <article className="segment-organized"><p className="rv-label">Informações organizadas</p><h3>Seu trabalho em um só endereço.</h3><div className="segment-site-mini"><div className="segment-mini-nav"><strong>{s.accent}</strong><span>Serviços · Projetos · Contato</span></div><ProjectImage slug={s.hero} alt={`Exemplo de organização visual: ${hero.name}`}/><div className="segment-mini-sections">{s.sections.map(item=><span key={item}>{item}</span>)}</div><span className="segment-contact-example">Contato pelo WhatsApp ↗</span></div><p>Seções claras, portfólio acessível e contato bem posicionado, com navegação adaptada ao celular.</p></article>
   </div><p className="segment-note">Comparativo ilustrativo de organização. Não representa perda de clientes nem resultado comercial garantido.</p>
  </div></section>
  <section className="rv-section segment-discovery"><div className="shell"><p className="rv-label">Da busca à conversa</p><h2>Ajude quem procura seu serviço a conhecer seu trabalho.</h2><p className="rv-intro">Site e SEO organizam informações que os mecanismos de busca podem compreender. Para negócios elegíveis, o Perfil da Empresa no Google complementa essa presença local.</p>
   <div className="segment-google-grid"><div className="segment-search"><p className="rv-label">Demonstração ilustrativa de busca no Google</p><div className="segment-query"><span aria-hidden="true">⌕</span><span>{s.query}</span></div><article className="segment-result"><small>exemplo.invalid · endereço fictício</small><h3>{s.result}</h3><p>{s.description}</p><div className="segment-result-tags">{s.services.map(item=><span key={item}>{item}</span>)}</div></article><div className="segment-local"><strong>Perfil da Empresa no Google, quando elegível</strong><p>Localização ou área atendida, serviços, horários e contato coerentes com a atuação real.</p></div></div>
    <ol className="segment-journey">{[['Pesquisa','Uma pessoa busca um serviço na região.'],['Descoberta','Encontra informações relevantes sobre a atuação.'],['Visita ao site','Acessa uma apresentação organizada.'],['Conhecimento dos serviços',s.sections.join(', ')+'.'],['Contato pelo WhatsApp','Inicia uma conversa para avaliar o projeto.']].map(([title,body],i)=><li key={title}><span aria-hidden="true">{String(i+1).padStart(2,'0')}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol>
   </div><p className="segment-note"><PriceText>Busca, endereço e resultado fictícios, sem indicação de posição garantida. SEO não garante primeira página, contatos ou inclusão nas respostas de IA do Google. Teresina é apenas o exemplo da busca; o atendimento da Ravyt é remoto em todo o Brasil.</PriceText></p>
  </div></section>
  <section className="rv-section rv-dark" id="portfolio"><div className="shell"><p className="rv-label">Portfólio de {s.accent.toLowerCase()}</p><h2>Veja como apresentamos profissionais do seu segmento</h2><p className="rv-intro">Capturas reais dos sites demonstrativos da Ravyt. Estes exemplos mostram possibilidades de apresentação; não representam clientes contratantes nem resultados obtidos.</p><div className="segment-projects">{selected.map(p=><article key={p.slug}><a href={urls[p.slug]} target="_blank" rel="noopener noreferrer" aria-label={`Ver projeto demonstrativo ${p.name}`}><ProjectImage slug={p.slug} alt={`Captura real do site demonstrativo ${p.name}`}/></a><p className="rv-label">Projeto demonstrativo · {s.accent}</p><h3>{p.name}</h3><p>{p.text}</p><a className="rv-text-link" href={urls[p.slug]} target="_blank" rel="noopener noreferrer">Ver projeto <span aria-hidden="true">↗</span></a></article>)}</div><Link className="rv-text-link" href="/cases">Conhecer o portfólio completo →</Link></div></section>
  <section className="rv-section rv-services"><div className="shell"><p className="rv-label">Google + Site + SEO</p><h2>Uma estrutura que conecta apresentação e descoberta.</h2><div className="rv-method"><article><span className="rv-step">01 / SITE</span><h3>Seu trabalho bem apresentado</h3><p>{niche.site}</p></article><article><span className="rv-step">02 / GOOGLE</span><h3>Presença local quando aplicável</h3><p>{niche.google}</p></article><article><span className="rv-step">03 / SEO</span><h3>Estrutura para pesquisas</h3><p>{niche.seo}</p></article></div><div className="segment-service-links"><Link href="/sites">Criação de sites →</Link><Link href="/google-meu-negocio">Presença no Google →</Link><Link href="/seo">SEO →</Link></div></div></section>
  <section className="rv-section rv-offer" id="investimento"><div className="shell segment-offer"><div><p className="rv-label"><PriceText>Atendimento remoto em todo o Brasil</PriceText></p><h2>Um site organizado. Um plano anual claro.</h2><p className="rv-intro">O plano de R$ 597 por ano inclui um site One Page: uma única página com seções organizadas para apresentar sua atuação, serviços, projetos e contato.</p><ul className="rv-deliverables">{s.sections.map(item=><li key={item}>{item}</li>)}</ul><p>Seções não são páginas individuais. Domínio, hospedagem, manutenção e suporte durante 12 meses, SEO dentro do escopo contratado e Perfil da Empresa no Google quando elegível. As condições são detalhadas na proposta antes da contratação.</p></div><PlanOffer/></div></section>
  <section className="rv-section" id="duvidas"><div className="shell rv-split"><div><p className="rv-label">Antes de contratar</p><h2>Dúvidas sobre o site e o plano.</h2></div><div className="rv-faq"><details><summary>O que significa site One Page?</summary><p>É um site com uma única página. Apresentação, serviços, projetos e contato ficam em seções organizadas, com navegação adaptada ao celular. O plano anual de R$ 597 não inclui automaticamente páginas individuais para cada serviço ou projeto.</p></details><details><summary>Posso mostrar projetos e especialidades?</summary><p>Sim, em seções do site One Page, com conteúdo e imagens combinados na proposta. Estruturas com várias páginas e necessidades adicionais devem ser avaliadas antes da contratação.</p></details><FAQ/></div></div></section>
  <section className="rv-final"><div className="shell"><p className="rv-label">Seu próximo passo</p><h2>Vamos organizar a apresentação do seu trabalho?</h2><p>Conte quais serviços oferece, em que região atua e o que precisa mostrar. A Ravyt explica as entregas e as condições para seu projeto.</p><CTA>Conversar sobre meu site</CTA></div></section>
 </main><BlogFooter/></>;
}
