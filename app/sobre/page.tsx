import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
export const metadata: Metadata = { title:"Sobre a Ravyt Digital", description:"Conheça a Ravyt Digital, agência de gestão de mídias sociais e criação de sites online com atendimento em todo o Brasil.", alternates:{canonical:"/#sobre"} };
export default function Page(){ permanentRedirect("/#sobre"); }
