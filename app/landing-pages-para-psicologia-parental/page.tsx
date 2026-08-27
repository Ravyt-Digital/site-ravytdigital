import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
export const metadata: Metadata = { title:"Criação de Landing Pages para Psicologia Parental", description:"Landing pages personalizadas para cursos, mentorias e produtos digitais de Psicologia Parental, com cookies, pixels e eventos de conversão.", alternates:{canonical:"/landing-pages-para-psicologia-parental"} };
export default function Page(){ return <ServicePage kind="landing"/>; }
