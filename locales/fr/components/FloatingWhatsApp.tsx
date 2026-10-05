"use client";
import Image from "next/image";
import { whatsappUrl } from "@/locales/fr/lib/contact";

export default function FloatingWhatsApp() {
  return <a className="whatsapp-contact is-single" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" data-track="whatsapp_click" aria-label="Échanger avec Ytala Cabral sur WhatsApp (s’ouvre dans un nouvel onglet)">
    <span className="whatsapp-trigger"><Image src="/team/ytala-cabral-contact.webp" alt="" width={120} height={120} unoptimized /><strong className="whatsapp-mobile-label"> Échanger avec Ytala </strong></span>
  </a>;
}
