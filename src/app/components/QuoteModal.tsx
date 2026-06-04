import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react';
import type { Language } from '../lib/language';
import { useQuoteRequest } from '../controllers/useQuoteRequest';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

type QuoteModalProps = {
  language: Language;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const fieldClass =
  'min-h-12 rounded-lg border border-slate-200 bg-[#F8FAFC] px-4 text-[#111827] shadow-sm outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/15 disabled:cursor-not-allowed disabled:opacity-70';

export default function QuoteModal({ language, open, onOpenChange }: QuoteModalProps) {
  const { content, handleSubmit, isSubmitting, resetStatus, submitStatus } = useQuoteRequest(language);

  const handleOpenChange = (nextOpen: boolean) => {
    if (nextOpen) resetStatus();
    onOpenChange(nextOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-h-[calc(100vh-2rem)] overflow-y-auto border-white/70 bg-white p-0 shadow-2xl sm:max-w-2xl">
        <div className="bg-gradient-to-r from-[#171A3A] via-[#2563EB] to-[#06B6D4] px-6 py-6 text-white sm:px-8">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black tracking-normal sm:text-3xl">{content.title}</DialogTitle>
            <DialogDescription className="text-white/82">{content.description}</DialogDescription>
          </DialogHeader>
        </div>

        {submitStatus === 'success' ? (
          <div className="grid justify-items-center gap-5 px-6 pb-8 pt-8 text-center sm:px-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-8 ring-emerald-50/70">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-[#171A3A]">{content.successTitle}</h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">{content.successDescription}</p>
            </div>
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="mt-1 inline-flex min-h-12 items-center justify-center rounded-full bg-[#171A3A] px-8 font-bold text-white shadow-lg shadow-[#171A3A]/15 transition-transform duration-200 hover:-translate-y-0.5"
            >
              {content.close}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-5 px-6 pb-6 pt-2 sm:px-8 sm:pb-8">
            {isSubmitting && (
              <div className="flex items-center gap-3 rounded-lg border border-[#2563EB]/15 bg-[#EEF2FF] px-4 py-3 text-sm font-semibold text-[#1D4ED8]" role="status">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>{content.sending}</span>
              </div>
            )}

            <fieldset disabled={isSubmitting} className="grid gap-5">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-[#171A3A]">
                  {content.fields.name}
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder={content.placeholders.name}
                    className={fieldClass}
                  />
                </label>

                <label className="grid gap-2 text-sm font-semibold text-[#171A3A]">
                  {content.fields.email}
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder={content.placeholders.email}
                    className={fieldClass}
                  />
                </label>

                <label className="grid gap-2 text-sm font-semibold text-[#171A3A]">
                  {content.fields.phone}
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    placeholder={content.placeholders.phone}
                    className={fieldClass}
                  />
                </label>

                <label className="grid gap-2 text-sm font-semibold text-[#171A3A]">
                  {content.fields.projectType}
                  <select
                    name="project_type"
                    required
                    defaultValue=""
                    className={fieldClass}
                  >
                    <option value="" disabled>
                      {content.placeholders.projectType}
                    </option>
                    {content.projectOptions.map(([value, label]) => (
                      <option key={value} value={label}>
                        {label}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="grid gap-2 text-sm font-semibold text-[#171A3A] md:col-span-2">
                  {content.fields.budget}
                  <select
                    name="budget"
                    defaultValue=""
                    className={fieldClass}
                  >
                    <option value="">{content.placeholders.budget}</option>
                    {content.budgetOptions.map(([value, label]) => (
                      <option key={value} value={label}>
                        {label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="grid gap-2 text-sm font-semibold text-[#171A3A]">
                {content.fields.message}
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder={content.placeholders.message}
                  className={`${fieldClass} resize-none py-3`}
                />
              </label>
            </fieldset>

            {submitStatus === 'error' && (
              <div className="flex items-start gap-3 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700" role="status">
                <AlertCircle className="mt-0.5 h-4 w-4" />
                <span>{content.error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#06B6D4] px-8 py-4 font-bold text-white shadow-lg shadow-[#2563EB]/20 transition-transform duration-200 hover:-translate-y-0.5 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-80 sm:w-auto"
            >
              {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
              {isSubmitting ? content.submitting : content.submit}
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
