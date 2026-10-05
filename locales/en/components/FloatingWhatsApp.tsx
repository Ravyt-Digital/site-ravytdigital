"use client";
import Image from "next/image";
import { whatsappUrl } from "@/locales/en/lib/contact";

export default function FloatingWhatsApp() {
  return <a className="whatsapp-contact is-single" href={whatsappUrl()} target="_blank" rel="noopener noreferrer" data-track="whatsapp_click" aria-label="Talk to Ytala Cabral on WhatsApp (opens in a new tab)">
    <span className="whatsapp-trigger"><Image src="/team/ytala-cabral-contact.webp" alt="" width={120} height={120} unoptimized /><strong className="whatsapp-mobile-label"> Talk to Ytala </strong></span>
  </a>;
}
