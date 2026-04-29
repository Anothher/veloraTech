import { useLanguage } from '../lib/language';

const copy = {
  es: {
    title: 'Términos y condiciones',
    lastUpdated: 'Última actualización',
    sections: [
      [
        '1. Aceptación',
        'Al usar este sitio o contratar servicios de VeloraTech, aceptas estos términos y las condiciones acordadas en cada propuesta comercial.',
      ],
      [
        '2. Servicios',
        'Ofrecemos desarrollo web, apps, ecommerce, UX/UI, SEO, branding, automatizaciones con IA, integraciones y mantenimiento.',
      ],
      [
        '3. Proceso y pagos',
        'Cada proyecto se define mediante alcance, tiempos, entregables y esquema de pagos. Los cambios fuera de alcance pueden generar costos adicionales.',
      ],
      [
        '4. Propiedad intelectual',
        'Una vez completado el pago del proyecto, el cliente recibe los derechos de uso de los entregables acordados. VeloraTech puede mostrar el proyecto en su portafolio salvo acuerdo contrario.',
      ],
      [
        '5. Soporte',
        'El soporte, mantenimiento y garantía se prestan según el plan o contrato acordado para cada proyecto.',
      ],
    ],
  },
  en: {
    title: 'Terms and conditions',
    lastUpdated: 'Last updated',
    sections: [
      [
        '1. Acceptance',
        'By using this site or hiring VeloraTech services, you accept these terms and the conditions agreed in each commercial proposal.',
      ],
      [
        '2. Services',
        'We provide web development, apps, ecommerce, UX/UI, SEO, branding, AI automations, integrations and maintenance.',
      ],
      [
        '3. Process and payments',
        'Each project is defined by scope, timeline, deliverables and payment schedule. Out-of-scope changes may generate additional costs.',
      ],
      [
        '4. Intellectual property',
        'Once the project is fully paid, the client receives usage rights for the agreed deliverables. VeloraTech may show the project in its portfolio unless otherwise agreed.',
      ],
      [
        '5. Support',
        'Support, maintenance and warranty are provided according to the plan or contract agreed for each project.',
      ],
    ],
  },
};

export default function TermsConditions() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <div className="mx-auto max-w-4xl px-4 py-28 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-4xl font-black text-[#111827]">{content.title}</h1>

      <div className="space-y-6 text-[#6B7280]">
        {content.sections.map(([title, description]) => (
          <section key={title}>
            <h2 className="mb-3 text-2xl font-black text-[#111827]">{title}</h2>
            <p className="leading-8">{description}</p>
          </section>
        ))}

        <p className="mt-8 text-sm">
          {content.lastUpdated}: {new Date().toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>
    </div>
  );
}
