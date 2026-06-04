import type { Language } from '../lib/language';
import { buildWhatsAppUrl } from './contactChannels';

export type SubmitStatus = 'idle' | 'success' | 'error';

type QuoteCopy = {
  title: string;
  description: string;
  fields: {
    name: string;
    email: string;
    phone: string;
    projectType: string;
    budget: string;
    message: string;
  };
  placeholders: {
    name: string;
    email: string;
    phone: string;
    projectType: string;
    budget: string;
    message: string;
  };
  projectOptions: Array<[string, string]>;
  budgetOptions: Array<[string, string]>;
  submit: string;
  submitting: string;
  sending: string;
  error: string;
  successTitle: string;
  successDescription: string;
  close: string;
  whatsappIntro: string;
  labels: {
    name: string;
    email: string;
    phone: string;
    projectType: string;
    budget: string;
    message: string;
  };
};

export const quoteCopy: Record<Language, QuoteCopy> = {
  es: {
    title: 'Solicita tu cotización',
    description: 'Cuéntanos sobre tu proyecto y te responderemos lo antes posible.',
    fields: {
      name: 'Nombre',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      projectType: 'Tipo de proyecto',
      budget: 'Presupuesto estimado',
      message: 'Mensaje',
    },
    placeholders: {
      name: 'Tu nombre completo',
      email: 'tucorreo@ejemplo.com',
      phone: '+57 300 000 0000',
      projectType: 'Selecciona una opción',
      budget: 'Selecciona un rango (opcional)',
      message: 'Describe brevemente lo que necesitas...',
    },
    projectOptions: [
      ['web', 'Sitio web'],
      ['ecommerce', 'Tienda online'],
      ['app', 'Aplicación web/móvil'],
      ['branding', 'Branding y diseño'],
      ['other', 'Otro'],
    ],
    budgetOptions: [
      ['lt-1m', 'Menos de $1.000.000'],
      ['1m-3m', '$1.000.000 - $3.000.000'],
      ['3m-7m', '$3.000.000 - $7.000.000'],
      ['gt-7m', 'Más de $7.000.000'],
    ],
    submit: 'Enviar solicitud',
    submitting: 'Enviando...',
    sending: 'Estamos enviando tu solicitud...',
    error: 'No pudimos enviar tu solicitud. Inténtalo de nuevo.',
    successTitle: '¡Solicitud enviada!',
    successDescription:
      'Gracias por contactarnos. Te responderemos muy pronto por WhatsApp o correo.',
    close: 'Cerrar',
    whatsappIntro: 'Hola, quiero solicitar una cotización:',
    labels: {
      name: 'Nombre',
      email: 'Correo',
      phone: 'Teléfono',
      projectType: 'Tipo de proyecto',
      budget: 'Presupuesto',
      message: 'Mensaje',
    },
  },
  en: {
    title: 'Request your quote',
    description: 'Tell us about your project and we will get back to you as soon as possible.',
    fields: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      projectType: 'Project type',
      budget: 'Estimated budget',
      message: 'Message',
    },
    placeholders: {
      name: 'Your full name',
      email: 'you@example.com',
      phone: '+57 300 000 0000',
      projectType: 'Select an option',
      budget: 'Select a range (optional)',
      message: 'Briefly describe what you need...',
    },
    projectOptions: [
      ['web', 'Website'],
      ['ecommerce', 'Online store'],
      ['app', 'Web/mobile app'],
      ['branding', 'Branding & design'],
      ['other', 'Other'],
    ],
    budgetOptions: [
      ['lt-1m', 'Less than $1,000,000'],
      ['1m-3m', '$1,000,000 - $3,000,000'],
      ['3m-7m', '$3,000,000 - $7,000,000'],
      ['gt-7m', 'More than $7,000,000'],
    ],
    submit: 'Send request',
    submitting: 'Sending...',
    sending: 'We are sending your request...',
    error: 'We could not send your request. Please try again.',
    successTitle: 'Request sent!',
    successDescription:
      'Thanks for reaching out. We will get back to you very soon via WhatsApp or email.',
    close: 'Close',
    whatsappIntro: 'Hi, I would like to request a quote:',
    labels: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      projectType: 'Project type',
      budget: 'Budget',
      message: 'Message',
    },
  },
};

export async function submitQuoteRequest(formData: FormData, language: Language) {
  const copy = quoteCopy[language];
  const { labels } = copy;

  const value = (key: string) => (formData.get(key)?.toString() ?? '').trim();

  const lines = [
    copy.whatsappIntro,
    '',
    `${labels.name}: ${value('name')}`,
    `${labels.email}: ${value('email')}`,
    `${labels.phone}: ${value('phone') || '-'}`,
    `${labels.projectType}: ${value('project_type')}`,
    `${labels.budget}: ${value('budget') || '-'}`,
    `${labels.message}: ${value('message')}`,
  ];

  const url = buildWhatsAppUrl(lines.join('\n'));
  const opened = window.open(url, '_blank', 'noopener,noreferrer');

  if (!opened) {
    throw new Error('Unable to open WhatsApp');
  }
}
