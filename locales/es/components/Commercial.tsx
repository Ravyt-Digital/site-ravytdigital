import {BrandCTA,BrandFinal} from '@/components/BrandContent';

import {PriceText} from "@/components/i18n/Regional";
import Image from 'next/image';
import { projects, questions } from "@/locales/es/lib/commercial";
import PortfolioPreview from "@/locales/es/components/PortfolioPreview";
export function DiagnosticCTA(){return <BrandCTA lang="es"/>;}
export function FinalCTA(){return <BrandFinal lang="es"/>;}
export function Cases({headingLevel=3}:{headingLevel?:2|3}={}){const Heading=headingLevel===2?'h2':'h3';return <div className="rv-cases">{projects.map(p=><article key={p.slug}><PortfolioPreview slug={p.slug} name={p.name}/><p className="rv-label">{p.type}</p><Heading>{p.name}</Heading><p>{p.text}</p></article>)}</div>;}
export function Team({headingLevel=3}:{headingLevel?:2|3}={}){const Heading=headingLevel===2?'h2':'h3';return <div className="rv-team"><article><Image src="/team/ytala-cabral-card.webp" alt="Ytala Cabral" width={320} height={464} unoptimized/><div><p className="rv-label">Presencia en Google</p><Heading>Ytala Cabral</Heading><strong>Presencia en Google · SEO · Comunicación</strong><p>Ytala investiga y organiza el sitio y la información del Perfil de Empresa en Google cuando sea elegible.</p></div></article><article><Image src="/team/marcio-cabral-card.webp" alt="Márcio Cabral" width={320} height={464} unoptimized/><div><p className="rv-label">Creación de sitios</p><Heading>Márcio Cabral</Heading><strong>Creación de sitios · UX/UI · Web Design</strong><p>Márcio diseña e implementa el sitio con servicios claros y contacto fácil desde el móvil.</p></div></article></div>;}
export function FAQ(){return <div className="rv-faq">{<PriceText>{questions.map(([q,a])=><details key={q}><summary>{<PriceText>{q}</PriceText>}</summary><p>{<PriceText>{a}</PriceText>}</p></details>)}</PriceText>}</div>;}
