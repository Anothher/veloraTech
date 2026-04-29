import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../lib/language';

const copy = {
  es: {
    title: '¿Listo para convertir tu idea en una experiencia digital?',
    description:
      'Cuéntanos qué quieres construir y te ayudamos a definir la mejor ruta: página web, app, ecommerce, sistema interno o automatización.',
    quote: 'Solicitar cotización',
    whatsapp: 'Hablar por WhatsApp',
    whatsappText: 'Hola, me gustaría solicitar información sobre sus servicios',
  },
  en: {
    title: 'Ready to turn your idea into a digital experience?',
    description:
      'Tell us what you want to build and we will help you define the best path: website, app, ecommerce, internal system or automation.',
    quote: 'Request a quote',
    whatsapp: 'Talk on WhatsApp',
    whatsappText: 'Hi, I would like to request information about your services',
  },
};

export default function FinalCTA() {
  const { language } = useLanguage();
  const content = copy[language];
  const whatsappUrl = `https://wa.me/5491112345678?text=${encodeURIComponent(content.whatsappText)}`;

  return (
    <section className="relative overflow-hidden bg-[#171735] px-4 py-20 sm:px-6 lg:px-8">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 20% 0%, rgba(37, 99, 235, 0.28), transparent 30%), radial-gradient(circle at 78% 85%, rgba(255, 77, 184, 0.22), transparent 30%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-3xl font-black text-white md:text-5xl">{content.title}</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">{content.description}</p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#contacto"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#06B6D4] px-8 py-4 font-bold text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              {content.quote}
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-[#111827] transition-colors duration-200 hover:bg-slate-100"
            >
              <MessageCircle className="h-5 w-5" />
              {content.whatsapp}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
