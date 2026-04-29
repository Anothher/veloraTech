import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Services from './components/Services';
import ForWhom from './components/ForWhom';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Technologies from './components/Technologies';
import SEOSection from './components/SEOSection';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CookieBanner from './components/CookieBanner';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookiePolicy from './components/CookiePolicy';
import TermsConditions from './components/TermsConditions';
import { LanguageProvider, useLanguage } from './lib/language';

const seoCopy = {
  es: {
    title: 'Velora Tech | Desarrollo de apps y páginas web para negocios',
    description:
      'Creamos páginas web, aplicaciones, ecommerce y automatizaciones con IA para negocios que quieren vender más, captar clientes y crecer online.',
    keywords:
      'desarrollo web, diseño web, apps para negocios, ecommerce, landing pages, SEO, automatización con IA, Velora Tech',
  },
  en: {
    title: 'Velora Tech | Apps and websites for growing businesses',
    description:
      'We build websites, apps, ecommerce platforms and AI automations for businesses that want more leads, sales and digital growth.',
    keywords:
      'web development, web design, business apps, ecommerce, landing pages, SEO, AI automation, Velora Tech',
  },
};

function updateMetaTag(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
}

function Site() {
  const [currentPage, setCurrentPage] = useState('home');
  const { language } = useLanguage();

  useEffect(() => {
    const copy = seoCopy[language];
    const canonicalUrl = `${window.location.origin}${window.location.pathname}`;

    document.title = copy.title;
    updateMetaTag('description', copy.description);
    updateMetaTag('keywords', copy.keywords);
    updateMetaTag('og:title', copy.title, 'property');
    updateMetaTag('og:description', copy.description, 'property');
    updateMetaTag('og:type', 'website', 'property');
    updateMetaTag('og:url', canonicalUrl, 'property');
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', copy.title);
    updateMetaTag('twitter:description', copy.description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [language]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'privacy' || hash === 'cookies' || hash === 'terms') {
        setCurrentPage(hash);
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentPage === 'privacy') {
    return (
      <div className="min-h-screen bg-[#F8FAFC]">
        <Header />
        <PrivacyPolicy />
        <Footer />
      </div>
    );
  }

  if (currentPage === 'cookies') {
    return (
      <div className="min-h-screen bg-[#F8FAFC]">
        <Header />
        <CookiePolicy />
        <Footer />
      </div>
    );
  }

  if (currentPage === 'terms') {
    return (
      <div className="min-h-screen bg-[#F8FAFC]">
        <Header />
        <TermsConditions />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <ForWhom />
        <Process />
        <Portfolio />
        <Technologies />
        <SEOSection />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Site />
    </LanguageProvider>
  );
}
