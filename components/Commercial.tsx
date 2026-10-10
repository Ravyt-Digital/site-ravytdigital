
import {PriceText} from "@/components/i18n/Regional";
import Image from 'next/image';
import Link from 'next/link';
import { whatsappUrl } from '@/lib/contact';
import { projects, questions } from '@/lib/commercial';
import PortfolioPreview from '@/components/PortfolioPreview';
export function DiagnosticCTA(){return <Link className="rv-button" href={whatsappUrl()} data-track="whatsapp_click">Conversar sobre meu projeto <span aria-hidden="true">↗</span></Link>;}
export function FinalCTA(){return <section className="rv-final"><div className="shell"><p className="rv-label">Seu próximo passo</p><h2>Vamos organizar sua presença digital?</h2><p>Conte o que você faz, como atende e o que precisa melhorar. A Ravyt apresenta as entregas e condições antes da contratação.</p><DiagnosticCTA/></div></section>;}
export function Cases(){return <div className="rv-cases">{<PriceText>{projects.map(p=><article key={p.slug}><PortfolioPreview slug={p.slug} name={p.name}/><p className="rv-label">{<PriceText>{p.type}</PriceText>}</p><h3>{<PriceText>{p.name}</PriceText>}</h3><p>{<PriceText>{p.text}</PriceText>}{<PriceText>{'nicheHref' in p && p.nicheHref && <><br/><Link href={p.nicheHref}>{<PriceText>{p.nicheLabel}</PriceText>} →</Link></>}</PriceText>}</p></article>)}</PriceText>}</div>;}
export function Team(){return <div className="rv-team"><article><Image src="/team/ytala-cabral-card.webp" alt="Ytala Cabral" width={320} height={464} unoptimized/><div><p className="rv-label">Presença no Google</p><h3>Ytala Cabral</h3><strong>Presença no Google · SEO · Comunicação</strong><p>Ytala cuida da pesquisa, do SEO e das informações do Perfil da Empresa no Google, quando elegível, para apresentar seus serviços com consistência.</p></div></article><article><Image src="/team/marcio-cabral-card.webp" alt="Marcio Cabral" width={280} height={380} unoptimized/><div><p className="rv-label">Criação de sites</p><h3>Marcio Cabral</h3><strong>Criação de sites · UX/UI · Web Design</strong><p>Márcio cuida da estrutura, do design e da implementação do site pela Ravyt Digital, com serviços claros e contato fácil no celular.</p></div></article></div>;}
export function FAQ(){return <div className="rv-faq">{<PriceText>{questions.map(([q,a])=><details key={q}><summary>{<PriceText>{q}</PriceText>}</summary><p>{<PriceText>{a}</PriceText>}</p></details>)}</PriceText>}</div>;}
