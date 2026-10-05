export const YTALA_WHATSAPP_NUMBER = "5588996956479";
export const WHATSAPP_MESSAGE = "¡Hola! Me gustaría hablar sobre los servicios de Ravyt Digital.";

export function whatsappUrl(message = WHATSAPP_MESSAGE) {
  return `https://wa.me/${YTALA_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
