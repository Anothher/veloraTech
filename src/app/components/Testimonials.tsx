import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { useLanguage } from '../lib/language';

const copy = {
  es: {
    title: 'Clientes que ya confían en una presencia digital mejor',
    description: 'Resultados reales para negocios que necesitaban verse profesionales y vender más online.',
    testimonials: [
      [
        'María González',
        'Dueña de Restaurante La Terraza',
        'VeloraTech transformó nuestra presencia online. Ahora recibimos reservas directas desde la web y nuestras ventas aumentaron.',
      ],
      [
        'Carlos Ramírez',
        'Fundador de Urban Style',
        'Necesitaba una tienda online profesional y el resultado superó mis expectativas: rápida, segura y fácil de administrar.',
      ],
      [
        'Ana Martínez',
        'Directora de Consultoría Avanza',
        'Entendieron nuestra visión desde el primer día y crearon una web que refleja perfectamente nuestra marca.',
      ],
    ],
  },
  en: {
    title: 'Clients who already trust a stronger digital presence',
    description: 'Real results for businesses that needed to look professional and sell more online.',
    testimonials: [
      [
        'Maria Gonzalez',
        'Owner at La Terraza Restaurant',
        'VeloraTech transformed our online presence. We now receive direct bookings from the website and our sales increased.',
      ],
      [
        'Carlos Ramirez',
        'Founder of Urban Style',
        'I needed a professional online store and the result exceeded my expectations: fast, secure and easy to manage.',
      ],
      [
        'Ana Martinez',
        'Director at Avanza Consulting',
        'They understood our vision from day one and created a website that perfectly reflects our brand.',
      ],
    ],
  },
};

export default function Testimonials() {
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

        <div className="grid gap-6 md:grid-cols-3">
          {content.testimonials.map(([name, role, text], index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-lg border border-slate-200 bg-[#F8FAFC] p-6"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, starIndex) => (
                  <Star key={starIndex} className="h-5 w-5 fill-[#FFC107] text-[#FFC107]" />
                ))}
              </div>
              <p className="mb-6 leading-7 text-[#111827]">{text}</p>
              <p className="font-black text-[#111827]">{name}</p>
              <p className="text-sm text-[#6B7280]">{role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
