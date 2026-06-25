export const WHATSAPP_NUMBER = "524441741629";

export const WHATSAPP_MSG_DIAGNOSTICO =
  "Hola, me interesa el diagnostico de IA para mi negocio";

export const WHATSAPP_MSG_GENERAL =
  "Hola Abelardo, vi tu sitio y quiero platicar sobre IA para mi negocio";

export const WHATSAPP_MSG_SERVICIOS =
  "Hola Abelardo, vi tus servicios y quiero cotizar uno para mi negocio";

export const WHATSAPP_MSG_VPS =
  "Hola Abelardo, necesito desplegar/preparar un servidor VPS y quiero cotizar";

export const WHATSAPP_MSG_AUTOMATIZACION =
  "Hola Abelardo, quiero automatizar procesos en mi negocio y quiero cotizar";

export const WHATSAPP_MSG_SITIOS =
  "Hola Abelardo, necesito un sitio web o landing y quiero cotizar";

export function whatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
