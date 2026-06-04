export const whatsappContact = {
  display: '+57 315 704 0015',
  tel: '+573157040015',
  waNumber: '573157040015',
};

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${whatsappContact.waNumber}?text=${encodeURIComponent(message)}`;
}
