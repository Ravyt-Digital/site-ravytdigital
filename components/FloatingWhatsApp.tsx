"use client";
import Image from "next/image";
import { whatsappUrl } from "@/lib/contact";

export default function FloatingWhatsApp() {
  return <a className="whatsapp-contact is-single" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" data-track="whatsapp_click" aria-label="Conversar com Ytala Cabral pelo WhatsApp (abre em nova aba)">
    <span className="whatsapp-trigger"><Image src="/team/ytala-cabral.webp" alt="" width={120} height={120} unoptimized /><strong className="whatsapp-mobile-label">Conversar com Ytala</strong></span>
  </a>;
}
