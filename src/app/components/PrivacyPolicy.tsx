import { useLanguage } from '../lib/language';

const copy = {
  es: {
    title: 'Política de privacidad',
    lastUpdated: 'Última actualización',
    sections: [
      [
        '1. Información que recopilamos',
        'Podemos recopilar nombre, correo, teléfono, empresa y detalles del proyecto cuando nos contactas por formularios, correo o WhatsApp.',
      ],
      [
        '2. Uso de la información',
        'Usamos esta información para responder consultas, preparar cotizaciones, prestar servicios, mejorar la experiencia y cumplir obligaciones legales.',
      ],
      [
        '3. Compartir información',
        'No vendemos tus datos. Solo los compartimos con proveedores necesarios para prestar el servicio o cuando la ley lo requiera.',
      ],
      [
        '4. Seguridad',
        'Aplicamos medidas técnicas y organizativas razonables para proteger la información frente a accesos no autorizados.',
      ],
      [
        '5. Tus derechos',
        'Puedes solicitar acceso, corrección, eliminación u oposición al tratamiento de tus datos escribiendo a hola@veloratech.com.',
      ],
    ],
  },
  en: {
    title: 'Privacy policy',
    lastUpdated: 'Last updated',
    sections: [
      [
        '1. Information we collect',
        'We may collect name, email, phone, company and project details when you contact us through forms, email or WhatsApp.',
      ],
      [
        '2. How we use information',
        'We use this information to answer questions, prepare quotes, provide services, improve the experience and comply with legal obligations.',
      ],
      [
        '3. Sharing information',
        'We do not sell your data. We only share it with providers needed to deliver the service or when required by law.',
      ],
      [
        '4. Security',
        'We apply reasonable technical and organizational measures to protect information from unauthorized access.',
      ],
      [
        '5. Your rights',
        'You may request access, correction, deletion or objection to data processing by writing to hola@veloratech.com.',
      ],
    ],
  },
};

export default function PrivacyPolicy() {
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
