import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página não encontrada",
  description: "A página solicitada não foi encontrada no site da Ravyt Digital.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main id="conteudo" className="not-found-page">
      <div className="shell">
        <p>Erro 404</p>
        <h1>Esta página não foi encontrada.</h1>
        <span>O endereço pode ter mudado ou o conteúdo pode não estar mais disponível. Use um dos caminhos abaixo para continuar.</span>
        <nav aria-label="Caminhos para continuar">
          <Link className="button button-light" href="/">Voltar para a página inicial</Link>
          <Link className="button button-ghost" href="/blog">Explorar os conteúdos do blog</Link>
          <Link className="button button-ghost" href="/servicos">Conhecer as soluções da Ravyt</Link>
        </nav>
      </div>
    </main>
  );
}
