import Image from "next/image";

export default function FloatingWhatsApp() {
  return (
    <div className="whatsapp-contact">
      <div className="whatsapp-invite" aria-hidden="true">
        <strong>Fale com a Ravyt</strong>
        <span>Todos os canais em um só lugar</span>
      </div>
      <a
        className="whatsapp-trigger"
        href="/contato"
        aria-label="Ver todos os canais de contato da Ravyt Digital"
      >
        <Image src="/brand/ravyt-symbol-2026.webp" alt="" width={245} height={235} unoptimized />
        <span aria-hidden="true" />
      </a>
    </div>
  );
}
