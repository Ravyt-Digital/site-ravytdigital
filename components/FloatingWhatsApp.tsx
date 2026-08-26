import Image from "next/image";
import { whatsappUrl } from "@/lib/contact";

export default function FloatingWhatsApp() {
  return (
    <div className="whatsapp-contact">
      <div className="whatsapp-invite" aria-hidden="true">
        <strong>Fale com a Ravyt</strong>
        <span>Atendimento direto pelo WhatsApp</span>
      </div>
      <a
        className="whatsapp-trigger"
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        data-track="whatsapp_click"
        aria-label="Conversar pelo WhatsApp com a Ravyt Digital (abre em nova aba)"
      >
        <Image src="/brand/ravyt-symbol-2026.webp" alt="" width={245} height={235} unoptimized />
        <span aria-hidden="true" />
        <strong className="whatsapp-mobile-label">Conversar pelo WhatsApp</strong>
      </a>
    </div>
  );
}
