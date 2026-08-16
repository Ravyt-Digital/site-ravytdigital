import Script from "next/script";

const TYPEFORM_ID = "wr1pvhAx";
const TYPEFORM_URL = `https://form.typeform.com/to/${TYPEFORM_ID}`;

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
          <div data-tf-widget={TYPEFORM_ID} data-tf-hide-headers data-tf-hide-footer />
          <noscript>
            <a href={TYPEFORM_URL} target="_blank" rel="noopener noreferrer">Abrir formulário de contato</a>
          </noscript>
        </div>
      </div>
      <Script src="https://embed.typeform.com/next/embed.js" strategy="lazyOnload" />
    </section>
  );
}
