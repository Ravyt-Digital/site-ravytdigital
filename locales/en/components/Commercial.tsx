import {BrandCTA,BrandFinal} from '@/components/BrandContent';

import {PriceText} from "@/components/i18n/Regional";
import Image from 'next/image';
import { projects, questions } from "@/locales/en/lib/commercial";
import PortfolioPreview from "@/locales/en/components/PortfolioPreview";
export function DiagnosticCTA(){return <BrandCTA lang="en"/>;}
export function FinalCTA(){return <BrandFinal lang="en"/>;}
export function Cases({headingLevel=3}:{headingLevel?:2|3}={}){const Heading=headingLevel===2?'h2':'h3';return <div className="rv-cases">{projects.map(p=><article key={p.slug}><PortfolioPreview slug={p.slug} name={p.name}/><p className="rv-label">{p.type}</p><Heading>{p.name}</Heading><p>{p.text}</p></article>)}</div>;}
export function Team({headingLevel=3}:{headingLevel?:2|3}={}){const Heading=headingLevel===2?'h2':'h3';return <div className="rv-team"><article><Image src="/team/ytala-cabral-card.webp" alt="Ytala Cabral" width={320} height={464} unoptimized/><div><p className="rv-label">Google presence</p><Heading>Ytala Cabral</Heading><strong>Google presence · SEO · Communication</strong><p>Ytala researches and organizes your website and Google Business Profile information when eligible.</p></div></article><article><Image src="/team/marcio-cabral-card.webp" alt="Márcio Cabral" width={320} height={464} unoptimized/><div><p className="rv-label">Website creation</p><Heading>Márcio Cabral</Heading><strong>Website creation · UX/UI · Web Design</strong><p>Márcio designs and implements your website with clear services and easy mobile contact.</p></div></article></div>;}
export function FAQ(){return <div className="rv-faq">{<PriceText>{questions.map(([q,a])=><details key={q}><summary>{<PriceText>{q}</PriceText>}</summary><p>{<PriceText>{a}</PriceText>}</p></details>)}</PriceText>}</div>;}
