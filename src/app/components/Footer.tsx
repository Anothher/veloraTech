import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { useLanguage } from '../lib/language';

const copy = {
  es: {
    description: 'Creamos páginas web, apps y soluciones digitales que ayudan a negocios reales a crecer online.',
    quickLinks: 'Enlaces rápidos',
    servicesTitle: 'Servicios',
    contact: 'Contacto',
    rights: 'Todos los derechos reservados.',
    privacy: 'Política de privacidad',
    cookies: 'Política de cookies',
    terms: 'Términos y condiciones',
    links: [
      ['Inicio', '#inicio'],
      ['Servicios', '#servicios'],
      ['Proyectos', '#portafolio'],
      ['Planes', '#planes'],
      ['Contacto', '#contacto'],
    ],
    services: ['Páginas web', 'Apps y sistemas', 'Ecommerce', 'SEO', 'Branding digital', 'Automatizaciones con IA'],
  },
  en: {
    description: 'We create websites, apps and digital solutions that help real businesses grow online.',
    quickLinks: 'Quick links',
    servicesTitle: 'Services',
    contact: 'Contact',
    rights: 'All rights reserved.',
    privacy: 'Privacy policy',
    cookies: 'Cookie policy',
    terms: 'Terms and conditions',
    links: [
      ['Home', '#inicio'],
      ['Services', '#servicios'],
      ['Projects', '#portafolio'],
      ['Plans', '#planes'],
      ['Contact', '#contacto'],
    ],
    services: ['Websites', 'Apps and systems', 'Ecommerce', 'SEO', 'Digital branding', 'AI automations'],
  },
};

export default function Footer() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <footer className="bg-[#0F172A] px-4 pb-8 pt-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="relative h-8 w-8 overflow-hidden rounded-lg bg-[#1F2AE8]">
                <div className="absolute left-1 top-1 h-4 w-4 rounded-sm bg-[#18A8FF]" />
                <div className="absolute bottom-1 left-1 h-3 w-3 rounded-sm bg-[#FF4DB8]" />
                <div className="absolute bottom-1 right-1 h-5 w-3 rounded-sm bg-[#7C3AED]" />
              </div>
              <span className="text-xl font-black">VeloraTech</span>
            </div>
            <p className="mb-4 leading-7 text-slate-400">{content.description}</p>
            {/* <div className="flex gap-3">
              {[
                ['https://facebook.com', 'Facebook', Facebook],
                ['https://twitter.com', 'Twitter', Twitter],
                ['https://instagram.com', 'Instagram', Instagram],
                ['https://linkedin.com', 'LinkedIn', Linkedin],
              ].map(([href, label, Icon]) => (
                <a
                  key={label as string}
                  href={href as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 transition-colors duration-200 hover:bg-[#2563EB]"
                  aria-label={label as string}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div> */}
          </div>

          <div>
            <h4 className="mb-4 font-black">{content.quickLinks}</h4>
            <ul className="space-y-2">
              {content.links.map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-slate-400 transition-colors duration-200 hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-black">{content.servicesTitle}</h4>
            <ul className="space-y-2">
              {content.services.map((service) => (
                <li key={service} className="text-slate-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-black">{content.contact}</h4>
            <ul className="space-y-3">
              {/* <li className="flex items-start gap-3 text-slate-400">
                <Mail className="mt-0.5 h-5 w-5 shrink-0" />
                <a href="mailto:hola@veloratech.com" className="transition-colors duration-200 hover:text-white">
                  hola@veloratech.com
                </a>
              </li> */}
              <li className="flex items-start gap-3 text-slate-400">
                <Phone className="mt-0.5 h-5 w-5 shrink-0" />
                <a href="tel:+573006284960" className="transition-colors duration-200 hover:text-white">
                  +57 300 628 4960
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0" />
                <span>Barranquilla, Colombia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-slate-400 md:text-left">
              © {new Date().getFullYear()} VeloraTech. {content.rights}
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#privacy" className="text-slate-400 transition-colors duration-200 hover:text-white">
                {content.privacy}
              </a>
              <a href="#cookies" className="text-slate-400 transition-colors duration-200 hover:text-white">
                {content.cookies}
              </a>
              <a href="#terms" className="text-slate-400 transition-colors duration-200 hover:text-white">
                {content.terms}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
