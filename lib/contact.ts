export const WHATSAPP_NUMBER = "5588996956479";
export const WHATSAPP_MESSAGE = "Olá! Sou produtor(a) digital na área de Psicologia Parental e gostaria de conversar sobre meu projeto.";
export const COPYWRITING_MESSAGE = "Olá! Sou produtor(a) digital na área de Psicologia Parental e gostaria de conversar sobre o serviço de Copywriting.";

export function whatsappUrl(message = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
