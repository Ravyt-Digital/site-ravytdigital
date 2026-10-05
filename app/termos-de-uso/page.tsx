import RegionalLegalNotice from "@/components/i18n/RegionalLegalNotice";
import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Termos de Uso",
  description: "Condições para acesso e uso do site da Ravyt Digital.",
  alternates: { canonical: `${SITE_URL}/termos-de-uso` },
});

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Condições de acesso" title="Termos de Uso" updated="5 de outubro de 2026">
      <p className="legal-lead">Ao navegar pelo site da Ravyt Digital, você concorda com estes termos. Se não concordar com alguma condição, interrompa o uso do site.</p>
      <h2>1. Finalidade do site</h2>
      <p>Este site apresenta a Ravyt Digital, seus serviços de Google, sites e SEO e conteúdos sobre presença digital. O conteúdo tem caráter institucional e informativo.</p>
      <h2>2. Propostas e contratação</h2>
      <p>Mensagens, estimativas, exemplos e conteúdos do site não constituem contrato ou oferta definitiva. Escopo, prazos, valores, responsabilidades e condições de cada projeto serão definidos em proposta e contrato enviados ao cliente antes do pagamento.</p>
      <h2>3. Propriedade intelectual</h2>
      <p>Marca, identidade visual, textos, layouts, elementos gráficos, códigos e demais conteúdos produzidos pela Ravyt são protegidos pela legislação aplicável. Não é permitido copiar, adaptar, publicar, vender ou explorar esses materiais sem autorização, ressalvados os direitos de clientes e terceiros identificados.</p>
      <h2>4. Uso adequado</h2>
      <p>Você se compromete a não usar o site para violar leis, direitos de terceiros, medidas de segurança ou a disponibilidade do serviço; introduzir código malicioso; tentar acesso não autorizado; ou reproduzir conteúdo de forma indevida.</p>
      <h2>5. Links e serviços de terceiros</h2>
      <p>O site pode direcionar para serviços de e-mail ou páginas externas. A Ravyt não controla a disponibilidade, o conteúdo ou as políticas desses ambientes, que são regidos por termos próprios.</p>
      <h2>6. Disponibilidade e informações</h2>
      <p>Buscamos manter o site atualizado e funcionando corretamente, mas podem ocorrer indisponibilidades, manutenções ou informações desatualizadas. Nada nestes termos exclui direitos que não possam ser afastados pela legislação aplicável.</p>
      <h2>7. Privacidade</h2>
      <p>O tratamento de dados pessoais relacionado ao site é explicado na nossa <a href="/politica-de-privacidade">Política de Privacidade</a>.</p>
      <h2>8. Alterações e legislação</h2>
      <p>Estes termos não afastam normas obrigatórias de privacidade, proteção do consumidor ou competência judicial da União Europeia ou do estado americano aplicável. A escolha do idioma ou a navegação não autoriza cookies opcionais. Condições de prestação de serviços e eventuais direitos de desistência serão apresentados antes da contratação, conforme a legislação aplicável.</p>
      <h2>9. Contato</h2>
      <p>Dúvidas sobre estes termos podem ser enviadas para <a href="mailto:ola@ravytdigital.com">ola@ravytdigital.com</a>.</p>
    <RegionalLegalNotice lang="pt" kind="terms"/>
    </LegalPage>
  );
}
