import { useState, type FormEvent } from 'react';
import type { Language } from '../lib/language';
import { quoteCopy, submitQuoteRequest, type SubmitStatus } from '../models/quoteRequest';

export function useQuoteRequest(language: Language) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const content = quoteCopy[language];

  const resetStatus = () => {
    setSubmitStatus('idle');
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    resetStatus();

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await submitQuoteRequest(formData, language);
      form.reset();
      setSubmitStatus('success');
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    content,
    handleSubmit,
    isSubmitting,
    resetStatus,
    submitStatus,
  };
}
