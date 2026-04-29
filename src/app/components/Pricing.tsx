import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { useLanguage } from '../lib/language';

const copy = {
  es: {
    title: 'Planes flexibles según tu etapa',
    description: 'Cada proyecto se cotiza según alcance, pero estos puntos de partida ayudan a elegir el camino correcto.',
    popular: 'Más elegido',
    cta: 'Cotizar proyecto',
    custom: '¿Necesitas algo más específico? Creamos',
    customLink: 'soluciones personalizadas',
    customEnd: 'para tu negocio.',
    plans: [
      {
        name: 'Launch',
        description: 'Para validar rápido una oferta o empezar con presencia profesional.',
        features: ['Landing page profesional', 'Diseño responsive', 'Formulario + WhatsApp', 'SEO base', '1 mes de soporte'],
      },
      {
        name: 'Growth',
        description: 'Para negocios que necesitan una web completa y lista para captar clientes.',
        features: [
          'Web hasta 5 secciones',
          'Diseño UI personalizado',
          'SEO inicial completo',
          'Animaciones y microinteracciones',
          'Analytics + Search Console',
          'Soporte 3 meses',
        ],
        highlighted: true,
      },
      {
        name: 'Scale',
        description: 'Para empresas que requieren ecommerce, app, sistema o automatizaciones.',
        features: [
          'Web avanzada, ecommerce o app',
          'UX/UI profesional',
          'SEO técnico avanzado',
          'Integraciones personalizadas',
          'Automatizaciones con IA',
          'Soporte prioritario',
        ],
      },
    ],
  },
  en: {
    title: 'Flexible plans for every stage',
    description: 'Every project is quoted by scope, but these starting points make it easier to choose the right path.',
    popular: 'Most chosen',
    cta: 'Quote project',
    custom: 'Need something more specific? We create',
    customLink: 'custom solutions',
    customEnd: 'for your business.',
    plans: [
      {
        name: 'Launch',
        description: 'For validating an offer quickly or starting with a professional presence.',
        features: ['Professional landing page', 'Responsive design', 'Form + WhatsApp', 'Base SEO', '1 month support'],
      },
      {
        name: 'Growth',
        description: 'For businesses that need a complete site ready to capture customers.',
        features: [
          'Website up to 5 sections',
          'Custom UI design',
          'Complete initial SEO',
          'Animations and microinteractions',
          'Analytics + Search Console',
          '3 months support',
        ],
        highlighted: true,
      },
      {
        name: 'Scale',
        description: 'For companies that need ecommerce, an app, a system or automations.',
        features: [
          'Advanced website, ecommerce or app',
          'Professional UX/UI',
          'Advanced technical SEO',
          'Custom integrations',
          'AI automations',
          'Priority support',
        ],
      },
    ],
  },
};

export default function Pricing() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <section id="planes" className="bg-[#F8FAFC] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-black text-[#111827] md:text-5xl">{content.title}</h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-[#6B7280]">{content.description}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {content.plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={`relative rounded-lg bg-white p-8 shadow-sm ${
                plan.highlighted ? 'border-2 border-[#2563EB] shadow-xl md:-translate-y-3' : 'border border-slate-200'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#06B6D4] px-4 py-1 text-sm font-bold text-white">
                  {content.popular}
                </div>
              )}

              <h3 className="mb-2 text-2xl font-black text-[#111827]">{plan.name}</h3>
              <p className="mb-6 leading-7 text-[#6B7280]">{plan.description}</p>

              <ul className="mb-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#2563EB]" />
                    <span className="text-[#111827]">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`block rounded-lg px-6 py-3 text-center font-bold transition-all duration-200 ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#06B6D4] text-white hover:opacity-90'
                    : 'border-2 border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB]/5'
                }`}
              >
                {content.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-12 text-center"
        >
          <p className="text-[#6B7280]">
            {content.custom}{' '}
            <a href="#contacto" className="font-bold text-[#2563EB] hover:underline">
              {content.customLink}
            </a>{' '}
            {content.customEnd}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
