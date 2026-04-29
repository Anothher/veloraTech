import { motion, useReducedMotion } from 'motion/react';
import { useLanguage } from '../lib/language';
import { ImageWithFallback } from './figma/ImageWithFallback';

const logoBase = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

const technologies = [
  { name: 'React', logo: `${logoBase}/react/react-original.svg` },
  { name: 'Next.js', logo: `${logoBase}/nextjs/nextjs-original.svg` },
  { name: 'TypeScript', logo: `${logoBase}/typescript/typescript-original.svg` },
  { name: 'Tailwind CSS', logo: `${logoBase}/tailwindcss/tailwindcss-original.svg` },
  { name: 'Node.js', logo: `${logoBase}/nodejs/nodejs-original.svg` },
  { name: 'Firebase', logo: `${logoBase}/firebase/firebase-plain.svg` },
  { name: 'WordPress', logo: `${logoBase}/wordpress/wordpress-plain.svg` },
  { name: 'Shopify', logo: `${logoBase}/shopify/shopify-original.svg` },
  { name: 'Figma', logo: `${logoBase}/figma/figma-original.svg` },
  { name: 'Docker', logo: `${logoBase}/docker/docker-original.svg` },
  { name: 'Google Cloud', logo: `${logoBase}/googlecloud/googlecloud-original.svg` },
  { name: 'PostgreSQL', logo: `${logoBase}/postgresql/postgresql-original.svg` },
];

const copy = {
  es: {
    eyebrow: 'Stack moderno',
    title: 'Tecnologías que usamos para construir rápido, seguro y escalable',
    description:
      'Elegimos herramientas probadas para que tu web, app o ecommerce cargue rápido, sea fácil de mantener y esté listo para crecer.',
  },
  en: {
    eyebrow: 'Modern stack',
    title: 'Technologies we use to build fast, secure and scalable products',
    description:
      'We choose proven tools so your website, app or ecommerce platform loads quickly, stays maintainable and is ready to grow.',
  },
};

function TechRail({ reverse = false }: { reverse?: boolean }) {
  const shouldReduceMotion = useReducedMotion();
  const railItems = reverse ? [...technologies].reverse() : technologies;
  const duplicatedItems = [...railItems, ...railItems];

  return (
    <div
      className="relative overflow-hidden py-3"
      style={{
        maskImage: 'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
      }}
    >
      <motion.div
        className="flex w-max gap-4"
        animate={shouldReduceMotion ? undefined : { x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration: reverse ? 34 : 30, repeat: Infinity, ease: 'linear' }}
      >
        {duplicatedItems.map((technology, index) => (
          <div
            key={`${technology.name}-${index}`}
            className="flex h-16 min-w-[210px] items-center gap-3 rounded-lg border border-slate-200 bg-white px-5 shadow-sm"
          >
            <ImageWithFallback
              src={technology.logo}
              alt={`${technology.name} logo`}
              className="h-8 w-8 object-contain"
              loading="lazy"
            />
            <span className="font-bold text-[#171A3A]">{technology.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Technologies() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <section id="tecnologias" className="overflow-hidden bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-[#2563EB]">{content.eyebrow}</p>
          <h2 className="text-3xl font-black leading-tight text-[#111827] md:text-5xl">{content.title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#6B7280]">{content.description}</p>
        </motion.div>
      </div>

      <div className="space-y-2">
        <TechRail />
        <TechRail reverse />
      </div>
    </section>
  );
}
