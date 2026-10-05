import {ExchangeNote} from "@/components/i18n/Regional";

import {PriceText} from "@/components/i18n/Regional";
import Link from 'next/link';
import { BlogFooter, BlogHeader } from '@/components/BlogChrome';
import { DiagnosticCTA } from '@/components/Commercial';
import ScrollReveal from '@/components/ScrollReveal';

type Niche = {
  label: string;
  heading: string;
  intro: string;
  challenge: string;
  challengeText: string;
  site: string;
  google: string;
  seo: string;
  example: string;
  exampleText: string;
};

export const niches: Record<'engenharia' | 'arquitetura' | 'moveis', Niche> = {
  engenharia: {
    label: 'Para empresas de engenharia',
    heading: 'Site para empresas de engenharia, Google e SEO.',
    intro: 'Apresente especialidades, projetos e áreas de atendimento com clareza para quem procura uma empresa de engenharia. A Ravyt cria e mantém o site e organiza sua presença nas pesquisas.',
    challenge: 'Antes de pedir uma proposta, o cliente precisa entender sua atuação.',
    challengeText: 'Quem pesquisa por uma empresa de engenharia quer identificar os tipos de projeto atendidos, a experiência da equipe e como iniciar uma conversa. Um site com páginas claras para cada especialidade ajuda a responder essas perguntas.',
    site: 'Estruturamos páginas para especialidades, projetos, equipe e contato, com navegação funcional no celular. Domínio, hospedagem, atualizações e suporte fazem parte da assinatura.',
    google: 'Organizamos os dados do Perfil da Empresa no Google, quando a empresa é elegível, para representar corretamente a localização, os serviços e o modo de atendimento.',
    seo: 'Trabalhamos títulos, conteúdo, links internos e aspectos técnicos para que páginas de serviços e projetos possam ser compreendidas pelos mecanismos de busca.',
    example: 'Uma referência visual para engenharia',
    exampleText: 'O projeto Vértice Norte Engenharia, apresentado no portfólio como demonstração conceitual, mostra uma forma de organizar especialidades e projetos sem confundir o visitante.',
  },
  arquitetura: {
    label: 'Para escritórios de arquitetura',
    heading: 'Site para escritórios de arquitetura, Google e SEO.',
    intro: 'Seus projetos precisam mostrar o trabalho e explicar o processo de contratação. A Ravyt cria um site profissional para seu escritório, cuida da manutenção e trabalha a estrutura para pesquisas no Google.',
    challenge: 'Um portfólio precisa ajudar o visitante a tomar uma decisão.',
    challengeText: 'Fotos atraem atenção, mas o potencial cliente também procura saber o tipo de projeto desenvolvido, a região atendida, as etapas do trabalho e como entrar em contato. Contexto e organização tornam o portfólio mais útil.',
    site: 'Criamos páginas de projetos e serviços com imagens bem apresentadas, textos objetivos e caminhos claros para contato. A assinatura inclui domínio, hospedagem, atualizações e suporte.',
    google: 'Quando o escritório é elegível ao Perfil da Empresa no Google, cuidamos da consistência das informações de localização, serviços e atendimento.',
    seo: 'Organizamos estrutura, títulos, descrições e links internos para conectar os serviços e projetos às pesquisas relevantes, sem prometer posições específicas.',
    example: 'Uma referência visual para arquitetura',
    exampleText: 'Nina Valença Arquitetura é uma demonstração conceitual do portfólio que apresenta projetos com imagens amplas e uma navegação voltada à leitura do trabalho.',
  },
  moveis: {
    label: 'Para empresas de móveis planejados',
    heading: 'Site para empresas de móveis planejados, Google e SEO.',
    intro: 'Mostre ambientes, materiais e soluções sob medida em um site que facilita o pedido de orçamento. A Ravyt reúne criação e manutenção do site, presença no Google e otimizações de SEO.',
    challenge: 'Cada ambiente precisa dar ao cliente um próximo passo claro.',
    challengeText: 'Quem pesquisa móveis planejados compara estilos e possibilidades antes de conversar com uma empresa. Uma apresentação organizada por ambientes pode ajudar o visitante a reconhecer o que procura e solicitar atendimento.',
    site: 'Criamos uma vitrine de ambientes e serviços com informações essenciais e contato acessível no celular. Domínio, hospedagem, atualizações e suporte estão incluídos na assinatura.',
    google: 'Para empresas elegíveis, organizamos o Perfil da Empresa no Google com informações coerentes sobre a atuação e a área local atendida.',
    seo: 'Estruturamos páginas para ambientes e serviços, com conteúdo e títulos específicos, além de melhorias técnicas e acompanhamento contínuo.',
    example: 'Uma referência visual para móveis planejados',
    exampleText: 'Lumea Planejados, uma demonstração conceitual do portfólio, apresenta ambientes em destaque para ajudar a imaginar aplicações do produto.',
  },
};

export default function NichePage({ niche }: { niche: Niche }) {
  return <><BlogHeader/><main className="rv" id="conteudo" tabIndex={-1}><ScrollReveal/>
    <section className="rv-page-hero"><div className="shell"><p className="rv-label">{<PriceText>{niche.label}</PriceText>}</p><h1>{<PriceText>{niche.heading}</PriceText>}</h1><p className="rv-lead">{<PriceText>{niche.intro}</PriceText>}</p><div className="rv-actions"><DiagnosticCTA/></div></div></section>
    <section className="rv-section" data-reveal><div className="shell"><p className="rv-label">O ponto de partida</p><h2>{<PriceText>{niche.challenge}</PriceText>}</h2><p className="rv-intro">{<PriceText>{niche.challengeText}</PriceText>}</p></div></section>
    <section className="rv-section rv-services" data-reveal><div className="shell"><p className="rv-label">Google + Site + SEO</p><h2>Uma presença digital com três pilares.</h2><div className="rv-method"><article><span className="rv-step">01 / SITE</span><h3>Site profissional</h3><p>{<PriceText>{niche.site}</PriceText>}</p></article><article><span className="rv-step">02 / GOOGLE</span><h3>Perfil da Empresa no Google</h3><p>{<PriceText>{niche.google}</PriceText>}</p></article><article><span className="rv-step">03 / SEO</span><h3>Estrutura para pesquisas</h3><p>{<PriceText>{niche.seo}</PriceText>}</p></article></div></div></section>
    <section className="rv-section rv-dark" data-reveal><div className="shell"><p className="rv-label">Portfólio</p><h2>{<PriceText>{niche.example}</PriceText>}</h2><p className="rv-intro">{<PriceText>{niche.exampleText}</PriceText>}</p><Link className="rv-text-link" href="/cases">Ver demonstrações e sites publicados →</Link></div></section>
    <section className="rv-section rv-offer" data-reveal><div className="shell rv-offer-grid"><div><p className="rv-label">Atendimento remoto em todo o mundo</p><h2>Um serviço contínuo para sua empresa.</h2><p className="rv-intro">Perfil da Empresa no Google, conforme elegibilidade, site profissional, domínio, hospedagem, atualizações, suporte e otimizações de SEO. O escopo é detalhado na proposta.</p></div><div className="rv-offer-price"><p>Google + Site + SEO</p><strong><PriceText>R$ 597,00 </PriceText><small>/ano</small></strong><ExchangeNote/><span className="rv-monthly">Plano único anual · Pix, cartão ou boleto</span><small>Sem taxa de implantação. Cartão NFC de Avaliação do Google (disponível somente no Brasil) incluído como bônus.</small><DiagnosticCTA/></div></div></section>
  </main><BlogFooter/></>;
}
