import type { Metadata } from "next";
import { redirect } from "next/navigation";
export const metadata: Metadata = { title:"Sobre a Ravyt Digital", description:"Conheça a Ravyt Digital, agência de Social Media para Psicólogos Parentais com Ytala Cabral.", alternates:{canonical:"/#sobre"} };
export default function Page(){ redirect("/#sobre"); }
