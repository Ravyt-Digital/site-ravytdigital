import {BrandCTA,BrandFinal} from '@/components/BrandContent';

import {PriceText} from "@/components/i18n/Regional";
import Image from 'next/image';
import { projects, questions } from "@/locales/fr/lib/commercial";
import PortfolioPreview from "@/locales/fr/components/PortfolioPreview";
export function DiagnosticCTA(){return <BrandCTA lang="fr"/>;}
export function FinalCTA(){return <BrandFinal lang="fr"/>;}
export function Cases(){return <div className="rv-cases">{projects.map(p=><article key={p.slug}><PortfolioPreview slug={p.slug} name={p.name}/><p className="rv-label">{p.type}</p><h3>{p.name}</h3><p>{p.text}</p></article>)}</div>;}
export function Team(){return <div className="rv-team"><article><Image src="/team/ytala-cabral-card.webp" alt="Ytala Cabral" width={320} height={464} unoptimized/><div><p className="rv-label">Présence sur Google</p><h3>Ytala Cabral</h3><strong>Présence sur Google · SEO · Communication</strong><p>Ytala étudie et organise le site et les informations du Profil d’entreprise Google sous réserve d’éligibilité.</p></div></article><article><Image src="/team/marcio-cabral-card.webp" alt="Marcio Cabral" width={320} height={464} unoptimized/><div><p className="rv-label">Création de sites</p><h3>Marcio Cabral</h3><strong>Création de sites · UX/UI · Web Design</strong><p>Márcio crée la structure et le design du site avec des services clairs et un contact facile sur mobile.</p></div></article></div>;}
export function FAQ(){return <div className="rv-faq">{<PriceText>{questions.map(([q,a])=><details key={q}><summary>{<PriceText>{q}</PriceText>}</summary><p>{<PriceText>{a}</PriceText>}</p></details>)}</PriceText>}</div>;}
