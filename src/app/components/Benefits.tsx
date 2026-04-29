import { motion } from 'motion/react';
import { Headphones, MessageSquare, Rocket, Search, Smartphone, Zap } from 'lucide-react';
import { useLanguage } from '../lib/language';

const icons = [Zap, Rocket, Search, Smartphone, MessageSquare, Headphones];

const copy = {
  es: {
    title: '¿Por qué elegir VeloraTech?',
    description:
      'Combinamos diseño, desarrollo y estrategia digital para lanzar productos que se ven bien, cargan rápido y generan resultados.',
    benefits: [
      ['Diseño premium', 'Interfaces modernas, claras y alineadas con la identidad de tu marca.'],
      ['Rendimiento real', 'Páginas y apps optimizadas para cargar rápido en móvil y escritorio.'],
      ['SEO desde el inicio', 'Estructura, contenido y metadatos pensados para posicionar en Google.'],
      ['Responsive perfecto', 'Experiencias cuidadas para teléfonos, tablets y pantallas grandes.'],
      ['Integraciones útiles', 'WhatsApp, pagos, CRM, formularios, analítica, reservas y automatizaciones.'],
      ['Soporte continuo', 'Acompañamiento técnico para evolucionar tu producto después del lanzamiento.'],
    ],
  },
  en: {
    title: 'Why choose VeloraTech?',
    description:
      'We combine design, development and digital strategy to launch products that look sharp, load fast and create measurable outcomes.',
    benefits: [
      ['Premium design', 'Modern, clear interfaces aligned with your brand identity.'],
      ['Real performance', 'Websites and apps optimized to load fast on mobile and desktop.'],
      ['SEO from day one', 'Structure, content and metadata designed to rank on Google.'],
      ['Responsive by default', 'Carefully designed experiences for phones, tablets and large screens.'],
      ['Useful integrations', 'WhatsApp, payments, CRM, forms, analytics, bookings and automations.'],
      ['Ongoing support', 'Technical guidance to evolve your product after launch.'],
    ],
  },
};

export default function Benefits() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.benefits.map(([title, description], index) => {
            const Icon = icons[index];

            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#2563EB]/12 via-[#7C3AED]/12 to-[#06B6D4]/12">
                  <Icon className="h-6 w-6 text-[#2563EB]" />
                </div>
                <h3 className="mb-2 text-xl font-black text-[#111827]">{title}</h3>
                <p className="leading-7 text-[#6B7280]">{description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
