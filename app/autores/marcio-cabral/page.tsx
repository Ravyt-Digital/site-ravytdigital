import type { Metadata } from "next";
import AuthorProfilePage from "@/components/AuthorProfilePage";

export const metadata: Metadata = {
  title: "Marcio Cabral | Tecnologia, Sites, Aplicativos e SEO",
  description: "Conheça Marcio Cabral, especialista em criação de sites, aplicativos, tecnologia e SEO na Ravyt Digital, e acesse seus artigos.",
  alternates: { canonical: "/autores/marcio-cabral" },
};

export default function MarcioCabralPage() {
  return <AuthorProfilePage name="Marcio Cabral" slug="marcio-cabral" role="Especialista em criação de sites e aplicativos" image="/team/marcio-cabral.webp" description="Especialista em tecnologia, criação de sites, aplicativos e estruturas digitais na Ravyt Digital. Escreve sobre SEO técnico, automação e decisões que conectam experiência e infraestrutura." knowsAbout={["Criação de sites", "Aplicativos", "SEO técnico", "Tecnologia", "Automação"]} />;
}
