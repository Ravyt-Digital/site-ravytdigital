import type { Metadata } from "next";
import { redirect } from "next/navigation";
export const metadata: Metadata = { title:"Sobre a Ravyt Digital", description:"Conheça a Ravyt Digital, especializada em landing pages e copywriting para produtores digitais de Psicologia Parental.", alternates:{canonical:"/#sobre"} };
export default function Page(){ redirect("/#sobre"); }
