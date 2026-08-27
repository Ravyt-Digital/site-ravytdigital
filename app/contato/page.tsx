import type { Metadata } from "next";
import LeadQualificationForm from "@/components/LeadQualificationForm";
import { BlogFooter, BlogHeader } from "@/components/BlogChrome";
export const metadata: Metadata = { title:"Contato e orçamento", description:"Apresente seu produto digital de Psicologia Parental e solicite uma proposta de landing page ou copywriting.", alternates:{canonical:"/contato"} };
export default function Page(){ return <><BlogHeader current="contact"/><main className="contact-repositioned"><header className="contact-intro"><div className="shell"><p className="section-kicker">Conte sobre sua oferta</p><h1>Vamos estruturar sua landing page e sua mensagem?</h1><p>Preencha as informações essenciais. Ao finalizar, o site abrirá uma conversa com o WhatsApp oficial da Ravyt para você confirmar o envio.</p></div></header><section className="form-section"><div className="shell"><LeadQualificationForm/></div></section></main><BlogFooter/></>; }
