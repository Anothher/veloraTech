import { motion } from 'motion/react';
import { Code, Ear, Lightbulb, Palette, Rocket, Zap } from 'lucide-react';
import { useLanguage } from '../lib/language';

const icons = [Ear, Lightbulb, Palette, Code, Zap, Rocket];

const copy = {
  es: {
    title: 'Un proceso claro desde la idea hasta el lanzamiento',
    description: 'Trabajamos con etapas simples para que sepas qué pasa, cuándo pasa y qué resultado esperar.',
    step: 'Paso',
    steps: [
      ['Escuchamos tu idea', 'Entendemos tus objetivos, audiencia, proceso comercial y visión del proyecto.'],
      ['Creamos la estrategia', 'Definimos estructura, funcionalidades, contenido, SEO y tecnología ideal.'],
      ['Diseñamos la interfaz', 'Preparamos una experiencia visual profesional, clara y enfocada en conversión.'],
      ['Desarrollamos el producto', 'Programamos tu web, app o sistema con código moderno y escalable.'],
      ['Optimizamos todo', 'Mejoramos velocidad, accesibilidad, SEO técnico, seguridad y medición.'],
      ['Publicamos y acompañamos', 'Lanzamos, medimos y te damos soporte para seguir evolucionando.'],
    ],
  },
  en: {
    title: 'A clear process from idea to launch',
    description: 'We work in simple stages so you know what happens, when it happens and what outcome to expect.',
    step: 'Step',
    steps: [
      ['We listen to your idea', 'We understand your goals, audience, sales process and product vision.'],
      ['We create the strategy', 'We define structure, features, content, SEO and the right technology.'],
      ['We design the interface', 'We prepare a professional, clear and conversion-focused visual experience.'],
      ['We develop the product', 'We code your website, app or system with modern and scalable practices.'],
      ['We optimize everything', 'We improve speed, accessibility, technical SEO, security and tracking.'],
      ['We launch and support', 'We publish, measure and support you so the product keeps evolving.'],
    ],
  },
};

export default function Process() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <section id="proceso" className="bg-[#F8FAFC] px-4 py-20 sm:px-6 lg:px-8">
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
          {content.steps.map(([title, description], index) => {
            const Icon = icons[index];

            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#2563EB] via-[#7C3AED] to-[#06B6D4]">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-sm font-black uppercase tracking-[0.14em] text-[#2563EB]">
                    {content.step} {index + 1}
                  </span>
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
