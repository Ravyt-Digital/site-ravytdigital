import {BrandCTA,BrandFinal} from '@/components/BrandContent';

import {PriceText} from "@/components/i18n/Regional";
import Image from 'next/image';
import { projects, questions } from '@/lib/commercial';
import PortfolioPreview from '@/components/PortfolioPreview';
export function DiagnosticCTA(){return <BrandCTA lang="pt"/>;}
export function FinalCTA(){return <BrandFinal lang="pt"/>;}
export function Cases({headingLevel=3}:{headingLevel?:2|3}={}){const Heading=headingLevel===2?'h2':'h3';return <div className="rv-cases">{projects.map(p=><article key={p.slug}><PortfolioPreview slug={p.slug} name={p.name}/><p className="rv-label">{p.type}</p><Heading>{p.name}</Heading><p>{p.text}</p></article>)}</div>;}
export function Team({headingLevel=3}:{headingLevel?:2|3}={}){const Heading=headingLevel===2?'h2':'h3';return <div className="rv-team"><article><Image src="/team/ytala-cabral-card.webp" alt="Ytala Cabral" width={320} height={464} unoptimized/><div><p className="rv-label">Presença no Google</p><Heading>Ytala Cabral</Heading><strong>Presença no Google · SEO · Comunicação</strong><p>Ytala cuida da pesquisa, do SEO e das informações do Perfil da Empresa no Google, quando elegível, para apresentar seus serviços com consistência.</p></div></article><article><Image src="/team/marcio-cabral-card.webp" alt="Marcio Cabral" width={280} height={380} unoptimized/><div><p className="rv-label">Criação de sites</p><Heading>Marcio Cabral</Heading><strong>Criação de sites · UX/UI · Web Design</strong><p>Márcio cuida da estrutura, do design e da implementação do site pela Ravyt Digital, com serviços claros e contato fácil no celular.</p></div></article></div>;}
export function FAQ(){return <div className="rv-faq">{<PriceText>{questions.map(([q,a])=><details key={q}><summary>{<PriceText>{q}</PriceText>}</summary><p>{<PriceText>{a}</PriceText>}</p></details>)}</PriceText>}</div>;}
