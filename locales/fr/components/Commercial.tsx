import {BrandCTA,BrandFinal} from '@/components/BrandContent';

import {PriceText} from "@/components/i18n/Regional";
import Image from 'next/image';
import { projects, questions } from "@/locales/fr/lib/commercial";
import PortfolioPreview from "@/locales/fr/components/PortfolioPreview";
export function DiagnosticCTA(){return <BrandCTA lang="fr"/>;}
export function FinalCTA(){return <BrandFinal lang="fr"/>;}
export function Cases({headingLevel=3}:{headingLevel?:2|3}={}){const Heading=headingLevel===2?'h2':'h3';return <div className="rv-cases">{projects.map(p=><article key={p.slug}><PortfolioPreview slug={p.slug} name={p.name}/><p className="rv-label">{p.type}</p><Heading>{p.name}</Heading><p>{p.text}</p></article>)}</div>;}
export function Team({headingLevel=3}:{headingLevel?:2|3}={}){const Heading=headingLevel===2?'h2':'h3';return <div className="rv-team"><article><Image src="/team/ytala-cabral-card.webp" alt="Ytala Cabral" width={320} height={464} unoptimized/><div><p className="rv-label">Présence sur Google</p><Heading>Ytala Cabral</Heading><strong>Présence sur Google · SEO · Communication</strong><p>Ytala étudie et organise le site et les informations du Profil d’entreprise Google sous réserve d’éligibilité.</p></div></article><article><Image src="/team/marcio-cabral-card.webp" alt="Marcio Cabral" width={320} height={464} unoptimized/><div><p className="rv-label">Création de sites</p><Heading>Marcio Cabral</Heading><strong>Création de sites · UX/UI · Web Design</strong><p>Márcio crée la structure et le design du site avec des services clairs et un contact facile sur mobile.</p></div></article></div>;}
export function FAQ(){return <div className="rv-faq">{<PriceText>{questions.map(([q,a])=><details key={q}><summary>{<PriceText>{q}</PriceText>}</summary><p>{<PriceText>{a}</PriceText>}</p></details>)}</PriceText>}</div>;}
