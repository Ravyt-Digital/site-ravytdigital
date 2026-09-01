export const YTALA_WHATSAPP_NUMBER = "5588996956479";
export const WHATSAPP_MESSAGE = "Olá, Ytala! Sou psicólogo(a) parental e gostaria de conversar sobre o trabalho de Social Media da Ravyt Digital.";

export function whatsappUrl(message = WHATSAPP_MESSAGE) {
  return `https://wa.me/${YTALA_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
