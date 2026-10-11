export const YTALA_WHATSAPP_NUMBER = "5588996956479";
export const WHATSAPP_MESSAGE = "Olá! Gostaria de conversar sobre os serviços da Ravyt Digital.";

export function whatsappUrl(message = WHATSAPP_MESSAGE) {
  return `https://wa.me/${YTALA_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function localizedWhatsAppUrl(lang: string) {
 const messages:Record<string,string>={pt:WHATSAPP_MESSAGE,en:"Hello! I would like to discuss Ravyt Digital’s services.",fr:"Bonjour ! Je souhaite discuter des services de Ravyt Digital.",es:"¡Hola! Quiero conversar sobre los servicios de Ravyt Digital."};
 return whatsappUrl(messages[lang]??WHATSAPP_MESSAGE);
}
