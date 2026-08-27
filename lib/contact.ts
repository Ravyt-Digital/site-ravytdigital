export const MARCIO_WHATSAPP_NUMBER = "5588996777332";
export const YTALA_WHATSAPP_NUMBER = "5588996956479";
export const WHATSAPP_NUMBER = YTALA_WHATSAPP_NUMBER;
export const WHATSAPP_MESSAGE = "Olá! Sou produtor(a) digital na área de Psicologia Parental e gostaria de conversar sobre meu projeto.";
export const COPYWRITING_MESSAGE = "Olá! Sou produtor(a) digital na área de Psicologia Parental e gostaria de conversar sobre o serviço de Copywriting.";
export const LANDING_PAGE_MESSAGE = "Olá, Márcio! Sou produtor(a) digital na área de Psicologia Parental e gostaria de conversar sobre a criação de uma Landing Page.";

export function whatsappUrl(message = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function contactWhatsappUrl(number: string, message: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
