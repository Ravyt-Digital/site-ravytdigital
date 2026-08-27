import type { Metadata } from "next";
import Link from "next/link";
import { whatsappUrl } from "@/lib/contact";
export const metadata: Metadata = { title:"Projeto enviado", description:"Próximos passos após apresentar seu projeto à Ravyt Digital.", robots:{index:false,follow:false} };
export default function Page(){ return <main className="thank-you-page"><section className="thank-you-card"><p className="section-kicker">Mensagem preparada</p><h1>Obrigada por apresentar seu projeto.</h1><p>O WhatsApp foi aberto com as informações preenchidas. Confirme o envio da mensagem para iniciar a conversa com a Ravyt.</p><div className="thank-you-actions"><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Abrir WhatsApp novamente</a><Link href="/">Voltar ao início</Link></div><script dangerouslySetInnerHTML={{__html:`window.dispatchEvent(new CustomEvent('ravyt:conversion',{detail:'thank_you_view'}));`}}/></section></main>; }
