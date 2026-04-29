import { useLanguage } from '../lib/language';

const copy = {
  es: {
    title: 'Política de cookies',
    lastUpdated: 'Última actualización',
    sections: [
      [
        '¿Qué son las cookies?',
        'Las cookies son pequeños archivos que se guardan en tu dispositivo para recordar preferencias y mejorar la navegación.',
      ],
      [
        'Cookies que usamos',
        'Podemos usar cookies necesarias, de preferencia, analítica y marketing para entender el tráfico y mejorar el sitio.',
      ],
      [
        'Cookies de terceros',
        'Herramientas como Google Analytics, Google Fonts o redes sociales pueden establecer cookies según su propia configuración.',
      ],
      [
        'Cómo controlarlas',
        'Puedes aceptar, rechazar o configurar cookies desde el banner y también desde las preferencias de tu navegador.',
      ],
    ],
  },
  en: {
    title: 'Cookie policy',
    lastUpdated: 'Last updated',
    sections: [
      [
        'What are cookies?',
        'Cookies are small files stored on your device to remember preferences and improve browsing.',
      ],
      [
        'Cookies we use',
        'We may use necessary, preference, analytics and marketing cookies to understand traffic and improve the site.',
      ],
      [
        'Third-party cookies',
        'Tools such as Google Analytics, Google Fonts or social networks may set cookies according to their own settings.',
      ],
      [
        'How to control them',
        'You can accept, reject or configure cookies from the banner and also from your browser preferences.',
      ],
    ],
  },
};

export default function CookiePolicy() {
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
