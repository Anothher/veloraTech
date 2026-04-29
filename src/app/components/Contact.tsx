import { useState } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../lib/language';

const copy = {
  es: {
    title: 'Conversemos sobre tu proyecto',
    description: 'Completa el formulario y te responderemos con una ruta clara en menos de 24 horas.',
    alert: 'Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.',
    submit: 'Enviar mensaje',
    fields: {
      name: 'Nombre completo *',
      email: 'Correo electrónico *',
      phone: 'Teléfono',
      projectType: 'Tipo de proyecto *',
      budget: 'Presupuesto aproximado',
      message: 'Cuéntanos sobre tu proyecto *',
    },
    placeholders: {
      name: 'Tu nombre',
      email: 'tu@email.com',
      phone: '+54 9 11 1234-5678',
      projectType: 'Selecciona una opción',
      budget: 'Selecciona un rango',
      message: 'Describe tu proyecto, objetivos y cualquier detalle importante...',
    },
    projectOptions: [
      ['landing', 'Landing page'],
      ['corporate', 'Página web corporativa'],
      ['app', 'App o sistema web'],
      ['ecommerce', 'Tienda online'],
      ['redesign', 'Rediseño de web existente'],
      ['automation', 'Automatización con IA'],
      ['other', 'Otro'],
    ],
    budgetOptions: [
      ['500-1000', '$500 - $1,000 USD'],
      ['1000-2500', '$1,000 - $2,500 USD'],
      ['2500-5000', '$2,500 - $5,000 USD'],
      ['5000+', '$5,000+ USD'],
      ['flexible', 'Flexible'],
    ],
  },
  en: {
    title: 'Let’s talk about your project',
    description: 'Complete the form and we will reply with a clear path in less than 24 hours.',
    alert: 'Thanks for your message. We will contact you soon.',
    submit: 'Send message',
    fields: {
      name: 'Full name *',
      email: 'Email address *',
      phone: 'Phone',
      projectType: 'Project type *',
      budget: 'Estimated budget',
      message: 'Tell us about your project *',
    },
    placeholders: {
      name: 'Your name',
      email: 'you@email.com',
      phone: '+1 555 123 4567',
      projectType: 'Select an option',
      budget: 'Select a range',
      message: 'Describe your project, goals and any important details...',
    },
    projectOptions: [
      ['landing', 'Landing page'],
      ['corporate', 'Business website'],
      ['app', 'App or web system'],
      ['ecommerce', 'Online store'],
      ['redesign', 'Existing website redesign'],
      ['automation', 'AI automation'],
      ['other', 'Other'],
    ],
    budgetOptions: [
      ['500-1000', '$500 - $1,000 USD'],
      ['1000-2500', '$1,000 - $2,500 USD'],
      ['2500-5000', '$2,500 - $5,000 USD'],
      ['5000+', '$5,000+ USD'],
      ['flexible', 'Flexible'],
    ],
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
  });
  const { language } = useLanguage();
  const content = copy[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(content.alert);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-black text-[#111827] md:text-5xl">{content.title}</h2>
          <p className="text-lg leading-8 text-[#6B7280]">{content.description}</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="rounded-lg border border-slate-200 bg-[#F8FAFC] p-6 sm:p-8"
        >
          <div className="mb-6 grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-[#111827]">
                {content.fields.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 transition-colors duration-200 focus:border-[#2563EB] focus:outline-none"
                placeholder={content.placeholders.name}
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-[#111827]">
                {content.fields.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 transition-colors duration-200 focus:border-[#2563EB] focus:outline-none"
                placeholder={content.placeholders.email}
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-[#111827]">
                {content.fields.phone}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 transition-colors duration-200 focus:border-[#2563EB] focus:outline-none"
                placeholder={content.placeholders.phone}
              />
            </div>

            <div>
              <label htmlFor="projectType" className="mb-2 block text-[#111827]">
                {content.fields.projectType}
              </label>
              <select
                id="projectType"
                name="projectType"
                required
                value={formData.projectType}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 transition-colors duration-200 focus:border-[#2563EB] focus:outline-none"
              >
                <option value="">{content.placeholders.projectType}</option>
                {content.projectOptions.map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="budget" className="mb-2 block text-[#111827]">
                {content.fields.budget}
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 transition-colors duration-200 focus:border-[#2563EB] focus:outline-none"
              >
                <option value="">{content.placeholders.budget}</option>
                {content.budgetOptions.map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="mb-2 block text-[#111827]">
              {content.fields.message}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 transition-colors duration-200 focus:border-[#2563EB] focus:outline-none"
              placeholder={content.placeholders.message}
            />
          </div>

          <button
            type="submit"
            className="flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#06B6D4] px-8 py-4 font-bold text-white transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
          >
            <Send className="h-5 w-5" />
            {content.submit}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
