import { useState } from 'react';
import { ChevronDown, Globe2, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../lib/language';

const copy = {
  es: {
    nav: [
      { label: 'Servicios', href: '#servicios' },
      { label: 'Proceso', href: '#proceso' },
      { label: 'Proyectos', href: '#portafolio' },
      { label: 'Tecnologías', href: '#tecnologias' },
      { label: 'Planes', href: '#planes' },
    ],
    account: 'Hablemos',
    cta: 'Cotiza gratis',
    menu: 'Abrir menú',
    close: 'Cerrar menú',
    language: 'Cambiar a inglés',
  },
  en: {
    nav: [
      { label: 'Services', href: '#servicios' },
      { label: 'Process', href: '#proceso' },
      { label: 'Projects', href: '#portafolio' },
      { label: 'Tech stack', href: '#tecnologias' },
      { label: 'Plans', href: '#planes' },
    ],
    account: 'Let’s talk',
    cta: 'Free quote',
    menu: 'Open menu',
    close: 'Close menu',
    language: 'Switch to Spanish',
  },
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const content = copy[language];
  const nextLanguage = language === 'es' ? 'EN' : 'ES';

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="fixed left-0 right-0 top-4 z-50 px-3 sm:px-5"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex min-h-16 items-center justify-between gap-4 rounded-[2rem] border border-white/25 bg-white/90 px-4 py-2 shadow-2xl shadow-[#111827]/15 backdrop-blur-xl md:px-8">
          <a href="#inicio" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <div className="relative h-8 w-8 overflow-hidden rounded-lg bg-[#1F2AE8]">
              <div className="absolute left-1 top-1 h-4 w-4 rounded-sm bg-[#18A8FF]" />
              <div className="absolute bottom-1 left-1 h-3 w-3 rounded-sm bg-[#FF4DB8]" />
              <div className="absolute bottom-1 right-1 h-5 w-3 rounded-sm bg-[#7C3AED]" />
            </div>
            <span className="text-xl font-bold tracking-normal text-[#171A3A]">VeloraTech</span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {content.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-[#2F3255] transition-colors duration-200 hover:text-[#2563EB]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <button
              type="button"
              onClick={toggleLanguage}
              className="inline-flex items-center gap-2 rounded-full px-2.5 py-2 text-sm font-semibold text-[#171A3A] transition-colors duration-200 hover:bg-[#EEF2FF]"
              aria-label={content.language}
            >
              <Globe2 className="h-4 w-4 text-[#2563EB]" />
              {nextLanguage}
              <ChevronDown className="h-3.5 w-3.5 text-[#7A7D9A]" />
            </button>
            <a href="#contacto" className="text-sm font-semibold text-[#171A3A] transition-colors hover:text-[#2563EB]">
              {content.account}
            </a>
            <a
              href="#contacto"
              className="rounded-full bg-[#171A3A] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#171A3A]/20 transition-transform duration-200 hover:-translate-y-0.5"
            >
              {content.cta}
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleLanguage}
              className="inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-[#EEF2FF] px-3 text-sm font-bold text-[#171A3A]"
              aria-label={content.language}
            >
              {nextLanguage}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#171A3A] text-white"
              aria-label={isOpen ? content.close : content.menu}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/20 bg-white p-4 shadow-2xl md:hidden"
          >
            <nav className="grid gap-1">
              {content.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl px-4 py-3 text-[#171A3A] transition-colors hover:bg-[#EEF2FF]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-2xl bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#06B6D4] px-4 py-3 text-center font-bold text-white"
              >
                {content.cta}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
