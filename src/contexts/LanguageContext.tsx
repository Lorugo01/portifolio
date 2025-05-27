import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Hero Section
    'hero.name': 'Luis Rodrigo Lima',
    'hero.title': 'Desenvolvedor de Software | Dart, JavaScript, Python, Java, C++, HTML, CSS',
    'hero.location': 'São Luís, Maranhão, Brasil',
    'hero.institution': 'GlobalTec Educacional | UNDB - Unidade de Ensino Superior Dom Bosco',
    'hero.projects': 'Ver Projetos',
    'hero.contact': 'Vamos Conversar',
    'hero.scroll': 'Scroll',

    // Projects Section
    'projects.title': 'Projetos em Destaque',
    'projects.seeMore': 'Ver Mais',
    'projects.technologies': 'Tecnologias',
    'projects.features': 'Funcionalidades',
    'projects.overview': 'Visão Geral',

    // Services Section
    'services.title': 'Serviços',
    'services.web': 'Desenvolvimento Web',
    'services.mobile': 'Desenvolvimento Mobile',
    'services.backend': 'Desenvolvimento Backend',
    'services.ai': 'Inteligência Artificial',

    // Contact Section
    'contact.title': 'Contato',
    'contact.name': 'Nome',
    'contact.email': 'Email',
    'contact.message': 'Mensagem',
    'contact.send': 'Enviar Mensagem',
    'contact.success': 'Mensagem enviada com sucesso!',
    'contact.error': 'Erro ao enviar mensagem. Tente novamente.',
  },
  en: {
    // Hero Section
    'hero.name': 'Luis Rodrigo Lima',
    'hero.title': 'Software Developer | Dart, JavaScript, Python, Java, C++, HTML, CSS',
    'hero.location': 'São Luís, Maranhão, Brazil',
    'hero.institution': 'GlobalTec Educational | UNDB - Dom Bosco Higher Education Unit',
    'hero.projects': 'View Projects',
    'hero.contact': "Let's Talk",
    'hero.scroll': 'Scroll',

    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.seeMore': 'See More',
    'projects.technologies': 'Technologies',
    'projects.features': 'Features',
    'projects.overview': 'Overview',

    // Services Section
    'services.title': 'Services',
    'services.web': 'Web Development',
    'services.mobile': 'Mobile Development',
    'services.backend': 'Backend Development',
    'services.ai': 'Artificial Intelligence',

    // Contact Section
    'contact.title': 'Contact',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Error sending message. Please try again.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 