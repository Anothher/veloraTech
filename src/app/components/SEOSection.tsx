import { motion } from 'motion/react';
import { BarChart, CheckCircle2, Gauge, Globe, Search, Smartphone } from 'lucide-react';
import { useLanguage } from '../lib/language';

const icons = [Search, Gauge, Smartphone, BarChart, CheckCircle2, Globe];

const copy = {
  es: {
    title: 'SEO y rendimiento pensados desde la estrategia',
    description:
      'No diseñamos solo para que se vea bonito. Creamos estructura, velocidad y contenido para que tu negocio pueda ser encontrado y medido.',
    features: [
      ['SEO técnico completo', 'Metatítulos, metadescripciones, URLs limpias y estructura semántica optimizada.'],
      ['Velocidad optimizada', 'Imágenes comprimidas, código eficiente y carga rápida en todos los dispositivos.'],
      ['Mobile-first', 'Diseño adaptable con prioridad en la experiencia móvil y la conversión.'],
      ['Analítica integrada', 'Google Analytics, Search Console y eventos clave para medir resultados.'],
      ['Accesibilidad', 'Buenas prácticas que mejoran la experiencia, la lectura y el posicionamiento.'],
      ['Indexación Google', 'Sitemap, robots.txt y configuración para facilitar el rastreo del sitio.'],
    ],
  },
  en: {
    title: 'SEO and performance designed from the strategy stage',
    description:
      'We do not design only for looks. We create structure, speed and content so your business can be found and measured.',
    features: [
      ['Complete technical SEO', 'Meta titles, descriptions, clean URLs and optimized semantic structure.'],
      ['Optimized speed', 'Compressed images, efficient code and fast loading across devices.'],
      ['Mobile-first', 'Responsive design with priority on mobile experience and conversion.'],
      ['Integrated analytics', 'Google Analytics, Search Console and key events to measure results.'],
      ['Accessibility', 'Best practices that improve experience, readability and search performance.'],
      ['Google indexing', 'Sitemap, robots.txt and configuration to help crawlers understand the site.'],
    ],
  },
};

export default function SEOSection() {
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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {content.features.map(([title, description], index) => {
            const Icon = icons[index];

            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="flex gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#2563EB]/12 via-[#7C3AED]/12 to-[#06B6D4]/12">
                  <Icon className="h-6 w-6 text-[#2563EB]" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-black text-[#111827]">{title}</h3>
                  <p className="leading-7 text-[#6B7280]">{description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
