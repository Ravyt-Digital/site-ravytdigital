"use client";
import Image from "next/image";
import { whatsappUrl } from "@/locales/es/lib/contact";

export default function FloatingWhatsApp() {
  return <a className="whatsapp-contact is-single" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" data-track="whatsapp_click" aria-label="Hablar con Ytala Cabral por WhatsApp (se abre en una pestaña nueva)">
    <span className="whatsapp-trigger"><Image src="/team/ytala-cabral-contact.webp" alt="" width={120} height={120} unoptimized /><strong className="whatsapp-mobile-label"> Hablar con Ytala </strong></span>
  </a>;
}
