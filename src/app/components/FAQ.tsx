import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../lib/language';

const copy = {
  es: {
    title: 'Preguntas frecuentes',
    description: 'Resolvemos las dudas más comunes antes de iniciar un proyecto digital.',
    faqs: [
      [
        '¿Cuánto tiempo toma crear una página web o app?',
        'Depende del alcance. Una landing puede estar lista en 1-2 semanas; una web completa suele tomar 3-5 semanas; una app o sistema a medida puede requerir 6-12 semanas.',
      ],
      [
        '¿Todo queda optimizado para SEO?',
        'Sí. Trabajamos estructura semántica, metadatos, velocidad, indexación, responsive y buenas prácticas para que Google entienda mejor tu sitio.',
      ],
      [
        '¿Puedo solicitar cambios durante el desarrollo?',
        'Sí. Trabajamos por etapas con revisiones para validar diseño, contenido y funcionalidades antes del lanzamiento.',
      ],
      [
        '¿También hacen ecommerce y automatizaciones?',
        'Sí. Podemos crear tiendas online, sistemas internos, integraciones con pagos, CRM, WhatsApp, formularios y flujos con IA.',
      ],
      [
        '¿Ofrecen mantenimiento posterior?',
        'Sí. Puedes contratar soporte mensual para mejoras, actualizaciones, backups, seguridad y evolución del producto.',
      ],
    ],
  },
  en: {
    title: 'Frequently asked questions',
    description: 'Answers to the most common questions before starting a digital project.',
    faqs: [
      [
        'How long does it take to build a website or app?',
        'It depends on scope. A landing page can be ready in 1-2 weeks; a full website usually takes 3-5 weeks; a custom app or system can take 6-12 weeks.',
      ],
      [
        'Is everything optimized for SEO?',
        'Yes. We work on semantic structure, metadata, speed, indexing, responsive design and best practices so Google can understand your site.',
      ],
      [
        'Can I request changes during development?',
        'Yes. We work in stages with reviews to validate design, content and features before launch.',
      ],
      [
        'Do you also build ecommerce and automations?',
        'Yes. We can create online stores, internal systems, payment integrations, CRM, WhatsApp, forms and AI workflows.',
      ],
      [
        'Do you offer maintenance after launch?',
        'Yes. You can hire monthly support for improvements, updates, backups, security and product evolution.',
      ],
    ],
  },
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <section id="faq" className="bg-[#F8FAFC] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-black text-[#111827] md:text-5xl">{content.title}</h2>
          <p className="text-lg leading-8 text-[#6B7280]">{content.description}</p>
        </motion.div>

        <div className="space-y-4">
          {content.faqs.map(([question, answer], index) => (
            <motion.div
              key={question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="overflow-hidden rounded-lg border border-slate-200 bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors duration-200 hover:bg-slate-50"
              >
                <span className="pr-4 font-black text-[#111827]">{question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[#6B7280] transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="leading-7 text-[#6B7280]">{answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
