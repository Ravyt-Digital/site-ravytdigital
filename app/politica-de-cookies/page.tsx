import RegionalLegalNotice from "@/components/i18n/RegionalLegalNotice";
import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = pageMetadata({
  title: "Política de Cookies",
  description: "Como a Ravyt Digital utiliza armazenamento essencial e medição com consentimento.",
  alternates: { canonical: "/politica-de-cookies" },
});

export default function CookiePolicyPage() {
  return <LegalPage eyebrow="Privacidade e escolha" title="Política de Cookies" updated="5 de outubro de 2026">
    <p className="legal-lead">Esta política explica como o site da Ravyt Digital utiliza armazenamento local e tecnologias de medição.</p>
    <h2>1. Armazenamento essencial</h2>
    <p>Utilizamos armazenamento local estritamente necessário para registrar sua escolha de aceitar ou recusar recursos de medição. Esse recurso não é usado para criar perfis.</p>
    <p>Um cookie essencial guarda o idioma que você escolheu por até 12 meses, para manter sua preferência nas próximas visitas.</p>
    <h2>2. Medição com consentimento</h2>
    <p>O Metricool, o Google Analytics, o Pixel da Meta, a API de Conversões da Meta e a medição própria só são ativados após o aceite. Eles podem registrar visualizações de páginas, rolagens, cliques externos, downloads, interações com vídeos, pesquisas internas, cliques em WhatsApp, e-mail e telefone, chamadas principais e envios concluídos de formulário. Nenhum desses eventos inclui nome, e-mail, telefone, conteúdo de mensagem, dados de saúde ou conteúdo adicional dos formulários.</p>
    <h2>3. Recusa</h2>
    <p>Ao recusar, os recursos de medição não essenciais do Metricool, do Google e da Meta permanecem desativados. Os links de WhatsApp e e-mail continuam funcionando normalmente.</p>
    <h2>4. Alterar a escolha</h2><p>Use “Alterar preferências de privacidade” ao final de qualquer página. Ao recusar, novos eventos deixam de ser enviados. A medição da Meta pode ser utilizada para atribuição e otimização de campanhas publicitárias, sempre condicionada ao seu aceite.</p><h2>5. Contato</h2>
    <p>Dúvidas podem ser enviadas para <a href="mailto:ola@ravytdigital.com">ola@ravytdigital.com</a>.</p>
  <RegionalLegalNotice lang="pt" kind="cookies"/>
    </LegalPage>;
}
