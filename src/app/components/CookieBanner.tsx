import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useLanguage } from '../lib/language';

const copy = {
  es: {
    title: 'Usamos cookies',
    description:
      'Utilizamos cookies para mejorar la experiencia, analizar el tráfico y entender qué contenido ayuda más a nuestros visitantes.',
    more: 'Más información',
    configure: 'Configurar',
    reject: 'Rechazar',
    accept: 'Aceptar todas',
    close: 'Cerrar banner de cookies',
    alert: 'En una implementación real, aquí se abriría un modal de configuración de cookies.',
  },
  en: {
    title: 'We use cookies',
    description:
      'We use cookies to improve the experience, analyze traffic and understand which content helps visitors the most.',
    more: 'Learn more',
    configure: 'Configure',
    reject: 'Reject',
    accept: 'Accept all',
    close: 'Close cookie banner',
    alert: 'In a production implementation, a cookie settings modal would open here.',
  },
};

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();
  const content = copy[language];

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  const handleConfigure = () => {
    alert(content.alert);
    handleAccept();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white p-4 shadow-2xl"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div className="flex-1 pr-8 md:pr-0">
                <h3 className="mb-2 font-black text-[#111827]">{content.title}</h3>
                <p className="text-sm leading-6 text-[#6B7280]">
                  {content.description}{' '}
                  <a href="#cookies" className="font-bold text-[#2563EB] hover:underline">
                    {content.more}
                  </a>
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleConfigure}
                  className="rounded-lg border border-slate-300 px-4 py-2 text-sm text-[#111827] transition-colors duration-200 hover:bg-slate-50"
                >
                  {content.configure}
                </button>
                <button
                  onClick={handleReject}
                  className="rounded-lg border border-slate-300 px-4 py-2 text-sm text-[#111827] transition-colors duration-200 hover:bg-slate-50"
                >
                  {content.reject}
                </button>
                <button
                  onClick={handleAccept}
                  className="rounded-lg bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#06B6D4] px-4 py-2 text-sm text-white transition-opacity duration-200 hover:opacity-90"
                >
                  {content.accept}
                </button>
              </div>

              <button
                onClick={() => setIsVisible(false)}
                className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 md:relative md:right-0 md:top-0"
                aria-label={content.close}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
