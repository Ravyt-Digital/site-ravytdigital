import TypeformEmbed from "@/components/TypeformEmbed";

type ContactFormSectionProps = {
  title?: string;
  description?: string;
};

export default function ContactFormSection({
  title = "Quer conversar sobre nossos serviços?",
  description = "Este formulário é exclusivo para pessoas e empresas interessadas em contratar ou conhecer melhor os serviços da Ravyt Digital.",
}: ContactFormSectionProps) {
  return (
    <section className="contact-form-section" id="contato" aria-labelledby="titulo-contato">
      <div className="shell contact-form-grid">
        <div className="contact-form-copy">
          <p className="section-kicker">Seu próximo passo</p>
          <h2 id="titulo-contato">{title}</h2>
          <p>{description}</p>
          <p className="contact-form-guidance">
            Para parcerias, imprensa, suporte, questões administrativas ou qualquer outro assunto, escreva para <a href="mailto:ola@ravytdigital.com">ola@ravytdigital.com</a>.
          </p>
          <p className="contact-form-privacy">
            Suas informações são usadas somente para responder à sua solicitação e são tratadas conforme nossa <a href="/politica-de-privacidade">Política de Privacidade</a>.
          </p>
        </div>

        <div className="contact-form-embed" aria-label="Formulário de contato da Ravyt Digital">
          <TypeformEmbed />
        </div>
      </div>
    </section>
  );
}
