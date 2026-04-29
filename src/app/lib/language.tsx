import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type Language = 'es' | 'en';

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const isLanguage = (value: string | null): value is Language => value === 'es' || value === 'en';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'es';

    const storedLanguage = window.localStorage.getItem('velora-language');
    if (isLanguage(storedLanguage)) return storedLanguage;

    return window.navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es';
  });

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
  };

  const toggleLanguage = () => {
    setLanguageState((currentLanguage) => (currentLanguage === 'es' ? 'en' : 'es'));
  };

  useEffect(() => {
    window.localStorage.setItem('velora-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
}
