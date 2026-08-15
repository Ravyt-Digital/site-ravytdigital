import type { Metadata } from "next";
import AuthorProfilePage from "@/components/AuthorProfilePage";

export const metadata: Metadata = {
  title: "Ytala Cabral | Estratégia, Posicionamento e Social Media",
  description: "Conheça Ytala Cabral, responsável por estratégia, posicionamento e Social Media na Ravyt Digital, e acesse seus artigos.",
  alternates: { canonical: "/autores/ytala-cabral" },
};

export default function YtalaCabralPage() {
  return <AuthorProfilePage name="Ytala Cabral" slug="ytala-cabral" role="Direção estratégica e Social Media" image="/team/ytala-cabral.webp" description="Responsável por estratégia, posicionamento e Social Media na Ravyt Digital. Escreve sobre conteúdo, percepção de valor e decisões que aproximam a presença digital da qualidade real do negócio." knowsAbout={["Social Media", "Posicionamento", "Estratégia digital", "Conteúdo", "Presença digital"]} />;
}
