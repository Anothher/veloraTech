import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../lib/language';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projectImages = [
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=640&q=70',
  'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=640&q=70',
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=640&q=70',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=640&q=70',
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=640&q=70',
  'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=640&q=70',
];

const copy = {
  es: {
    title: 'Proyectos que muestran lo que podemos construir',
    description: 'Una muestra del tipo de experiencias digitales que diseñamos para atraer, convertir y operar mejor.',
    cta: 'Ver idea de proyecto',
    projects: [
      ['Sabores del Valle', 'Restaurante', 'Sitio con menú digital, reservas online y pedidos por WhatsApp.'],
      ['Habita Premium', 'Inmobiliaria', 'Portal de propiedades con filtros, fichas optimizadas y captura de leads.'],
      ['Urban Style', 'Ecommerce', 'Tienda online con catálogo rápido, carrito y pagos seguros.'],
      ['Avanza Consulting', 'Consultoría', 'Web corporativa con blog, área de clientes y formularios inteligentes.'],
      ['Bella Clinic', 'Salud', 'Sitio profesional con servicios, testimonios, agenda online y chat.'],
      ['Café Local', 'Emprendimiento', 'Landing page con ubicación, horarios, reseñas y pedidos directos.'],
    ],
  },
  en: {
    title: 'Projects that show what we can build',
    description: 'A sample of the digital experiences we design to attract, convert and operate better.',
    cta: 'See project idea',
    projects: [
      ['Sabores del Valle', 'Restaurant', 'Website with digital menu, online bookings and WhatsApp orders.'],
      ['Habita Premium', 'Real estate', 'Property portal with filters, optimized listings and lead capture.'],
      ['Urban Style', 'Ecommerce', 'Online store with fast catalog, cart and secure payments.'],
      ['Avanza Consulting', 'Consulting', 'Business site with blog, client area and smart forms.'],
      ['Bella Clinic', 'Healthcare', 'Professional site with services, testimonials, online scheduling and chat.'],
      ['Local Cafe', 'Small business', 'Landing page with location, opening hours, reviews and direct orders.'],
    ],
  },
};

export default function Portfolio() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <section id="portafolio" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
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
          {content.projects.map(([title, category, description], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <ImageWithFallback
                  src={projectImages[index]}
                  alt={title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/55 to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-white/92 px-3 py-1 text-xs font-black text-[#2563EB]">
                  {category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-black text-[#111827]">{title}</h3>
                <p className="mb-5 leading-7 text-[#6B7280]">{description}</p>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 font-bold text-[#2563EB] transition-colors duration-200 hover:text-[#7C3AED]"
                >
                  {content.cta}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
