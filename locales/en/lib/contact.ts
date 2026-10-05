export const YTALA_WHATSAPP_NUMBER = "5588996956479";
export const WHATSAPP_MESSAGE = "Hello! I would like to discuss Ravyt Digital’s services.";

export function whatsappUrl(message = WHATSAPP_MESSAGE) {
  return `https://wa.me/${YTALA_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
