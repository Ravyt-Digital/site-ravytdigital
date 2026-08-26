import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Como a Ravyt Digital utiliza armazenamento essencial e medição com consentimento.",
  alternates: { canonical: "/politica-de-cookies" },
};

export default function CookiePolicyPage() {
  return <LegalPage eyebrow="Privacidade e escolha" title="Política de Cookies">
    <p className="legal-lead">Esta política explica como o site da Ravyt Digital utiliza armazenamento local e tecnologias de medição.</p>
    <h2>1. Armazenamento essencial</h2>
    <p>Utilizamos armazenamento local estritamente necessário para registrar sua escolha de aceitar ou recusar recursos de medição. Esse recurso não é usado para criar perfis.</p>
    <h2>2. Medição com consentimento</h2>
    <p>Eventos de visualização de páginas e cliques em WhatsApp, e-mail e chamadas principais só são registrados após o aceite. Nenhum desses eventos inclui nome, e-mail, telefone, conteúdo de mensagem, dados de saúde ou outras informações pessoais ou sensíveis.</p>
    <h2>3. Recusa</h2>
    <p>Ao recusar, os recursos de medição não essenciais permanecem desativados. Os links de WhatsApp e e-mail continuam funcionando normalmente.</p>
    <h2>4. Contato</h2>
    <p>Dúvidas podem ser enviadas para <a href="mailto:ola@ravytdigital.com">ola@ravytdigital.com</a>.</p>
  </LegalPage>;
}
