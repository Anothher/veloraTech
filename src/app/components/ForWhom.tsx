import { motion } from 'motion/react';
import { Briefcase, Dumbbell, Heart, Home, Lightbulb, MapPin, Scale, Store, User, UtensilsCrossed } from 'lucide-react';
import { useLanguage } from '../lib/language';

const icons = [UtensilsCrossed, Home, Heart, Scale, Store, Dumbbell, User, Briefcase, MapPin, Lightbulb];

const copy = {
  es: {
    title: 'Creamos para negocios de todos los tamaños',
    description: 'Adaptamos cada web, app o sistema al sector, proceso de venta y etapa de crecimiento de tu empresa.',
    sectors: [
      'Restaurantes',
      'Inmobiliarias',
      'Clínicas',
      'Abogados',
      'Tiendas',
      'Gimnasios',
      'Marcas personales',
      'Empresas de servicios',
      'Negocios locales',
      'Startups',
    ],
  },
  en: {
    title: 'Built for businesses of every size',
    description: 'We adapt each website, app or system to your industry, sales process and growth stage.',
    sectors: [
      'Restaurants',
      'Real estate',
      'Clinics',
      'Law firms',
      'Stores',
      'Gyms',
      'Personal brands',
      'Service companies',
      'Local businesses',
      'Startups',
    ],
  },
};

export default function ForWhom() {
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

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {content.sectors.map((sector, index) => {
            const Icon = icons[index];

            return (
              <motion.div
                key={sector}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                whileHover={{ y: -5 }}
                className="group flex min-h-40 flex-col items-center justify-center rounded-lg border border-slate-200 bg-white p-5 text-center shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-[#2563EB]/12 via-[#7C3AED]/12 to-[#06B6D4]/12">
                  <Icon className="h-7 w-7 text-[#2563EB]" />
                </div>
                <span className="font-bold leading-6 text-[#111827]">{sector}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
