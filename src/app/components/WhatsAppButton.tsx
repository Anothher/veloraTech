import { motion } from 'motion/react';
import whatsappIcon from '../../assets/icons/whatsapp.png';
import { useLanguage } from '../lib/language';

const copy = {
  es: {
    label: 'Contactar por WhatsApp',
    message: 'Hola, me gustaría solicitar información sobre sus servicios',
  },
  en: {
    label: 'Contact on WhatsApp',
    message: 'Hi, I would like to request information about your services',
  },
};

export default function WhatsAppButton() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <motion.a
      href={`https://wa.me/573006284960?text=${encodeURIComponent(content.message)}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform duration-200 hover:scale-110"
      aria-label={content.label}
    >
      <img src={whatsappIcon} alt="" aria-hidden="true" className="h-full w-full object-contain" />
    </motion.a>
  );
}
