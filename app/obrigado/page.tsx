import type { Metadata } from "next";
import Link from "next/link";
import { BlogHeader } from "@/components/BlogChrome";

export const metadata: Metadata = {
  title: "Solicitação enviada",
  description: "Confirmação de envio do formulário de contato da Ravyt Digital.",
  alternates: { canonical: "/obrigado" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Solicitação enviada | Ravyt Digital",
    description: "Recebemos sua solicitação e retornaremos pelos dados informados.",
    url: "/obrigado",
    type: "website",
    images: [{ url: "/brand/ravyt-social-card.jpg", width: 1200, height: 630, alt: "Ravyt Digital — criação de sites e gestão de redes sociais no Ceará" }],
  },
};

export default function ThankYouPage() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <BlogHeader current="contact" />
      <main id="conteudo" className="thank-you-page">
        <section className="shell thank-you-card">
          <p className="section-kicker">Formulário enviado</p>
          <h1>Recebemos sua solicitação.</h1>
          <p>A equipe da Ravyt Digital vai analisar as informações e responder pelos dados de contato informados no formulário.</p>
          <div className="thank-you-actions">
            <Link href="/">Voltar para a página inicial</Link>
            <Link href="/servicos">Ver nossos serviços</Link>
          </div>
        </section>
      </main>
    </>
  );
}
