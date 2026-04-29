import { motion } from 'motion/react';
import { Code, Cpu, Globe, Link, Megaphone, Palette, Search, Settings, ShoppingCart, Target } from 'lucide-react';
import { useLanguage } from '../lib/language';

const icons = [Globe, Target, ShoppingCart, Palette, Search, Cpu, Megaphone, Settings, Link, Code];

const copy = {
  es: {
    title: 'Servicios digitales para crecer online',
    description: 'Construimos desde landing pages de alto impacto hasta sistemas completos para operar tu negocio.',
    more: 'Más información',
    services: [
      ['Páginas web corporativas', 'Sitios profesionales que transmiten confianza y convierten visitantes en prospectos.'],
      ['Landing pages', 'Páginas de conversión para campañas, lanzamientos y servicios específicos.'],
      ['Ecommerce', 'Tiendas online con catálogo, carrito, pagos seguros y gestión de pedidos.'],
      ['UX/UI Design', 'Diseño de interfaces intuitivas para que tus usuarios entiendan y compren más rápido.'],
      ['SEO', 'Optimización estratégica para aparecer cuando tus clientes buscan soluciones como la tuya.'],
      ['Automatizaciones con IA', 'Chatbots, asistentes, reportes y flujos que reducen trabajo operativo.'],
      ['Branding digital', 'Identidad visual, colores, tipografías y sistemas gráficos para tu marca.'],
      ['Mantenimiento web', 'Actualizaciones, backups, seguridad, mejoras y soporte técnico continuo.'],
      ['Integraciones', 'Conexión con APIs, CRMs, pasarelas de pago, reservas y herramientas externas.'],
      ['Sistemas personalizados', 'Plataformas internas, dashboards y apps a medida para procesos específicos.'],
    ],
  },
  en: {
    title: 'Digital services built for online growth',
    description: 'We build everything from high-converting landing pages to complete systems that run your business.',
    more: 'Learn more',
    services: [
      ['Business websites', 'Professional sites that build trust and turn visitors into qualified leads.'],
      ['Landing pages', 'Conversion pages for campaigns, launches and specific services.'],
      ['Ecommerce', 'Online stores with catalog, cart, secure payments and order management.'],
      ['UX/UI Design', 'Intuitive interfaces that help users understand, trust and buy faster.'],
      ['SEO', 'Strategic optimization so customers find you when they search for your solution.'],
      ['AI automations', 'Chatbots, assistants, reporting and workflows that reduce manual work.'],
      ['Digital branding', 'Visual identity, colors, typography and graphic systems for your brand.'],
      ['Web maintenance', 'Updates, backups, security, improvements and continuous technical support.'],
      ['Integrations', 'Connections with APIs, CRMs, payment gateways, booking tools and external platforms.'],
      ['Custom systems', 'Internal platforms, dashboards and tailored apps for specific operations.'],
    ],
  },
};

export default function Services() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <section id="servicios" className="bg-[#F8FAFC] px-4 py-20 sm:px-6 lg:px-8">
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.services.map(([title, description], index) => {
            const Icon = icons[index];

            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                whileHover={{ y: -6 }}
                className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-[#2563EB] via-[#7C3AED] to-[#06B6D4]">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-black text-[#111827]">{title}</h3>
                <p className="mb-5 leading-7 text-[#6B7280]">{description}</p>
                <a
                  href="#contacto"
                  className="inline-flex items-center font-bold text-[#2563EB] transition-colors duration-200 hover:text-[#7C3AED]"
                >
                  {content.more}
                  <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
