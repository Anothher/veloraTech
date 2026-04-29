import { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useLanguage } from '../lib/language';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projectImages = {
  restaurant:
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=720&q=70',
  realEstate:
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=720&q=70',
  ecommerce:
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=720&q=70',
  clinic:
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=720&q=70',
  ai:
    'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=720&q=70',
};

const copy = {
  es: {
    badge: 'Apps, páginas web y automatización para negocios',
    title: 'Creamos experiencias digitales que convierten visitas en clientes',
    subtitle:
      'Diseñamos y desarrollamos páginas web, aplicaciones, ecommerce y sistemas a medida con SEO técnico, diseño premium y una estrategia pensada para crecer.',
    primaryCta: 'Cotizar mi proyecto',
    secondaryCta: 'Ver proyectos',
    proof: ['SEO listo para Google', 'Diseño responsive', 'Apps y sistemas a medida'],
    tabs: ['Sitios web', 'Apps', 'Ecommerce', 'IA y automatización', 'SEO'],
    projects: [
      {
        title: 'Sabores del Valle',
        type: 'Restaurante',
        headline: 'Reservas online, menú digital y pedidos por WhatsApp.',
        metric: '+42% reservas',
        image: projectImages.restaurant,
        accent: '#FF4DB8',
      },
      {
        title: 'Habita Real Estate',
        type: 'Inmobiliaria',
        headline: 'Portal de propiedades con filtros, leads y CRM.',
        metric: '3.1x leads',
        image: projectImages.realEstate,
        accent: '#18A8FF',
      },
      {
        title: 'Urban Style',
        type: 'Ecommerce',
        headline: 'Tienda rápida con catálogo, carrito y pagos seguros.',
        metric: '+28% ventas',
        image: projectImages.ecommerce,
        accent: '#7C3AED',
      },
      {
        title: 'Bella Clinic',
        type: 'Salud',
        headline: 'Agenda online, servicios, testimonios y chat directo.',
        metric: '-35% gestión',
        image: projectImages.clinic,
        accent: '#06B6D4',
      },
      {
        title: 'OpsFlow AI',
        type: 'Automatización',
        headline: 'Panel interno con flujos, reportes y asistentes con IA.',
        metric: '12 h/semana',
        image: projectImages.ai,
        accent: '#22C55E',
      },
    ],
    miniLabels: {
      booking: 'Nueva cita',
      online: 'Online',
      dashboard: 'Panel del negocio',
      conversion: 'Conversión',
      visits: 'Visitas',
      leads: 'Leads',
      published: 'Publicado',
    },
  },
  en: {
    badge: 'Apps, websites and automation for businesses',
    title: 'We build digital experiences that turn traffic into customers',
    subtitle:
      'We design and develop websites, apps, ecommerce platforms and custom systems with technical SEO, premium UI and a growth-focused strategy.',
    primaryCta: 'Quote my project',
    secondaryCta: 'See projects',
    proof: ['SEO ready for Google', 'Responsive design', 'Custom apps and systems'],
    tabs: ['Websites', 'Apps', 'Ecommerce', 'AI automation', 'SEO'],
    projects: [
      {
        title: 'Sabores del Valle',
        type: 'Restaurant',
        headline: 'Online bookings, digital menu and WhatsApp orders.',
        metric: '+42% bookings',
        image: projectImages.restaurant,
        accent: '#FF4DB8',
      },
      {
        title: 'Habita Real Estate',
        type: 'Real estate',
        headline: 'Property portal with filters, lead capture and CRM.',
        metric: '3.1x leads',
        image: projectImages.realEstate,
        accent: '#18A8FF',
      },
      {
        title: 'Urban Style',
        type: 'Ecommerce',
        headline: 'Fast storefront with catalog, cart and secure payments.',
        metric: '+28% sales',
        image: projectImages.ecommerce,
        accent: '#7C3AED',
      },
      {
        title: 'Bella Clinic',
        type: 'Healthcare',
        headline: 'Online scheduling, services, testimonials and live chat.',
        metric: '-35% admin',
        image: projectImages.clinic,
        accent: '#06B6D4',
      },
      {
        title: 'OpsFlow AI',
        type: 'Automation',
        headline: 'Internal dashboard with workflows, reporting and AI assistants.',
        metric: '12 h/week',
        image: projectImages.ai,
        accent: '#22C55E',
      },
    ],
    miniLabels: {
      booking: 'New booking',
      online: 'Online',
      dashboard: 'Business dashboard',
      conversion: 'Conversion',
      visits: 'Visits',
      leads: 'Leads',
      published: 'Published',
    },
  },
};

export default function Hero() {
  const { language } = useLanguage();
  const content = copy[language];
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const activeProject = content.projects[activeIndex];
  const previousProject = content.projects[(activeIndex + content.projects.length - 1) % content.projects.length];
  const nextProject = content.projects[(activeIndex + 1) % content.projects.length];

  useEffect(() => {
    if (shouldReduceMotion) return;

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % content.projects.length);
    }, 4300);

    return () => window.clearInterval(interval);
  }, [content.projects.length, shouldReduceMotion]);

  useEffect(() => {
    setActiveIndex(0);
  }, [language]);

  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-[#18183B] px-4 pb-0 pt-32 text-white sm:px-6 lg:px-8"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 24% 12%, rgba(124, 58, 237, 0.32), transparent 28%), radial-gradient(circle at 82% 72%, rgba(255, 77, 184, 0.22), transparent 28%), linear-gradient(180deg, #1A1A3F 0%, #171735 52%, #15152E 100%)',
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#FF4DB8]/18 to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/85 shadow-lg shadow-black/10 backdrop-blur">
            <Sparkles className="h-4 w-4 text-[#7DD3FC]" />
            {content.badge}
          </div>

          <h1 className="mx-auto max-w-5xl text-balance text-4xl font-black leading-[1.04] tracking-normal text-white md:text-6xl lg:text-7xl">
            {content.title}
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg font-medium leading-8 text-white/78 md:text-xl">
            {content.subtitle}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contacto"
              className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#06B6D4] px-8 py-4 text-base font-extrabold text-white shadow-2xl shadow-[#2563EB]/25 transition-transform duration-200 hover:-translate-y-0.5"
            >
              {content.primaryCta}
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#portafolio"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/18 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur transition-colors duration-200 hover:bg-white/16"
            >
              {content.secondaryCta}
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm text-white/70">
            {content.proof.map((item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-full bg-white/8 px-3 py-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#22C55E]" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="mt-14 flex w-full max-w-4xl flex-wrap items-center justify-center gap-3">
          {content.tabs.map((tab, index) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                activeIndex === index
                  ? 'bg-white/16 text-white shadow-lg shadow-black/10'
                  : 'text-white/42 hover:bg-white/8 hover:text-white/80'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="relative mt-8 h-[430px] w-full max-w-7xl sm:h-[520px]">
          <motion.div
            animate={{ y: shouldReduceMotion ? 0 : [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-1/2 top-8 z-20 w-[82vw] max-w-[560px] -translate-x-1/2 sm:top-6"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.title}
                initial={{ opacity: 0, y: 18, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -18, scale: 0.96 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="overflow-hidden rounded-[1.7rem] border-[8px] border-[#E7E9F4] bg-white text-[#171A3A] shadow-2xl shadow-black/35"
              >
                <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">{content.miniLabels.dashboard}</p>
                    <h2 className="text-xl font-black text-[#171A3A]">{activeProject.title}</h2>
                  </div>
                  <span
                    className="rounded-full px-3 py-1 text-xs font-black text-white"
                    style={{ backgroundColor: activeProject.accent }}
                  >
                    {activeProject.metric}
                  </span>
                </div>
                <div className="grid gap-4 p-4 sm:grid-cols-[1.15fr_0.85fr]">
                  <div className="overflow-hidden rounded-2xl bg-slate-100">
                    <ImageWithFallback
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="h-48 w-full object-cover sm:h-64"
                      loading="eager"
                    />
                  </div>
                  <div className="flex flex-col justify-between rounded-2xl bg-[#F8FAFC] p-4">
                    <div>
                      <p className="mb-2 text-sm font-black" style={{ color: activeProject.accent }}>
                        {activeProject.type}
                      </p>
                      <p className="text-lg font-extrabold leading-6 text-[#171A3A]">{activeProject.headline}</p>
                    </div>
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-white p-3 shadow-sm">
                        <p className="text-xs font-bold text-slate-400">{content.miniLabels.visits}</p>
                        <p className="text-lg font-black text-[#171A3A]">18.4k</p>
                      </div>
                      <div className="rounded-xl bg-white p-3 shadow-sm">
                        <p className="text-xs font-bold text-slate-400">{content.miniLabels.leads}</p>
                        <p className="text-lg font-black text-[#171A3A]">724</p>
                      </div>
                    </div>
                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
                      <motion.div
                        key={`${activeProject.title}-bar`}
                        initial={{ width: '18%' }}
                        animate={{ width: '76%' }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: activeProject.accent }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div
            animate={{ y: shouldReduceMotion ? 0 : [0, 12, 0] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-[2%] top-20 z-10 hidden w-[235px] rotate-[-3deg] overflow-hidden rounded-[1.6rem] border-[7px] border-[#DDE2F1] bg-white text-[#171A3A] opacity-80 shadow-2xl shadow-black/30 md:block xl:left-[10%]"
          >
            <div className="h-28 overflow-hidden">
              <ImageWithFallback src={previousProject.image} alt={previousProject.title} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="p-4">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-400">{content.miniLabels.booking}</p>
              <h3 className="mt-1 text-lg font-black">{previousProject.title}</h3>
              <div className="mt-4 rounded-2xl bg-slate-100 p-3">
                <div className="mb-2 h-2 w-3/4 rounded-full bg-slate-300" />
                <div className="h-2 w-1/2 rounded-full bg-slate-300" />
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: shouldReduceMotion ? 0 : [0, -14, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
            className="absolute right-[2%] top-24 z-10 hidden w-[235px] rotate-[3deg] overflow-hidden rounded-[1.6rem] border-[7px] border-[#DDE2F1] bg-white text-[#171A3A] opacity-80 shadow-2xl shadow-black/30 md:block xl:right-[10%]"
          >
            <div className="p-4">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-[#EAFDF4] px-3 py-1 text-xs font-black text-[#16A34A]">{content.miniLabels.online}</span>
                <span className="text-xs font-black text-slate-400">{content.miniLabels.published}</span>
              </div>
              <h3 className="text-lg font-black">{nextProject.title}</h3>
              <p className="mt-2 text-sm font-semibold text-slate-500">{nextProject.headline}</p>
            </div>
            <div className="mx-4 mb-4 overflow-hidden rounded-2xl">
              <ImageWithFallback src={nextProject.image} alt={nextProject.title} className="h-32 w-full object-cover" loading="lazy" />
            </div>
          </motion.div>

          <div className="absolute -left-36 bottom-0 hidden h-64 w-[460px] rounded-[1.8rem] border border-white/10 bg-white/8 opacity-40 blur-[1px] lg:block" />
          <div className="absolute -right-36 bottom-0 hidden h-64 w-[460px] rounded-[1.8rem] border border-white/10 bg-white/8 opacity-40 blur-[1px] lg:block" />
        </div>
      </div>
    </section>
  );
}
