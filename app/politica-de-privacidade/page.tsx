import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Entenda como a Ravyt Digital trata dados pessoais, preferências de cookies e solicitações de titulares.",
  alternates: { canonical: `${SITE_URL}/politica-de-privacidade` },
};

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Privacidade e transparência" title="Política de Privacidade">
      <p className="legal-lead">A Ravyt Digital respeita sua privacidade. Esta política explica, de forma clara, quais dados podem ser tratados durante sua interação com nosso site e canais de contato.</p>
      <h2>1. Quem é responsável pelos dados</h2>
      <p>A Ravyt Digital atua como controladora dos dados pessoais relacionados a este site e aos contatos comerciais recebidos por seus canais. Dúvidas ou solicitações podem ser enviadas para <a href="mailto:ola@ravytdigital.com">ola@ravytdigital.com</a>.</p>
      <h2>2. Quais informações podem ser coletadas</h2>
      <ul>
        <li>Informações que você decidir enviar diretamente pelo WhatsApp ou e-mail, sob as regras do canal escolhido;</li>
        <li>Dados técnicos essenciais, como endereço IP, tipo de dispositivo, navegador e registros de segurança disponibilizados pela infraestrutura de hospedagem;</li>
        <li>Sua escolha sobre cookies e recursos de medição, armazenada localmente no dispositivo.</li>
      </ul>
      <p>Este site não possui formulários nem campos de captura. Os eventos de medição não incluem nome, e-mail, telefone, conteúdo de mensagens, dados de saúde ou outras informações pessoais ou sensíveis.</p>
      <h2>3. Para que usamos essas informações</h2>
      <p>Os dados podem ser usados para responder solicitações, preparar propostas, prestar serviços contratados, manter a segurança e o funcionamento do site, melhorar a experiência e cumprir obrigações legais ou regulatórias.</p>
      <h2>4. Fundamentos para o tratamento</h2>
      <p>O tratamento ocorre conforme as hipóteses aplicáveis da Lei Geral de Proteção de Dados, incluindo consentimento, procedimentos relacionados a contratos, cumprimento de obrigação legal e legítimo interesse avaliado com respeito aos direitos do titular. Consulte o <a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/L13709compilado.htm" target="_blank" rel="noreferrer">texto oficial compilado da LGPD</a>.</p>
      <h2>5. Cookies e armazenamento local</h2>
      <p>O site utiliza armazenamento essencial para lembrar sua escolha de privacidade. Após o seu aceite, nosso monitoramento próprio registra a página visitada, a página de referência, as dimensões da tela e o horário da visita nos registros protegidos da infraestrutura da Ravyt. Não usamos esse recurso para publicidade nem instalamos cookies de terceiros. Você pode limpar sua preferência nas configurações do navegador a qualquer momento.</p>
      <h2>6. Compartilhamento</h2>
      <p>Não vendemos dados pessoais. Informações podem ser compartilhadas apenas com fornecedores necessários para hospedagem, comunicação, segurança e execução dos serviços, dentro do limite adequado a cada finalidade, ou quando houver obrigação legal.</p>
      <h2>7. Conservação e segurança</h2>
      <p>Os dados são mantidos somente pelo período necessário à finalidade informada, ao relacionamento comercial ou ao cumprimento de obrigações aplicáveis. Adotamos medidas razoáveis de organização e segurança, embora nenhum ambiente digital seja totalmente imune a riscos.</p>
      <h2>8. Seus direitos</h2>
      <p>Nos termos da legislação aplicável, você pode solicitar confirmação do tratamento, acesso, correção, informação sobre compartilhamentos, anonimização, bloqueio ou eliminação quando cabível, além de revogar consentimentos. Para exercer seus direitos, use o e-mail indicado nesta página.</p>
      <h2>9. Links externos e atualizações</h2>
      <p>Links para Instagram, e-mail ou outros serviços seguem as políticas próprias dessas plataformas. Esta política pode ser atualizada para refletir mudanças no site, nos serviços ou na legislação; a data da versão vigente será sempre informada no topo.</p>
    </LegalPage>
  );
}
