import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

type TranslationValue = string | string[] | { [key: string]: TranslationValue };

interface Translations {
  [key: string]: TranslationValue;
}

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  tObject: (key: string) => TranslationValue;
}

const translations: Record<Language, Translations> = {
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    'nav.services': 'Serviços',
    'nav.contact': 'Contato',
    'nav.logo.first': 'Luis ',
    'nav.logo.second': 'Rodrigo',

    // Hero Section
    'hero.name': 'Luis Rodrigo Lima Rodrigues',
    'hero.title': 'Desenvolvedor de Software | Dart, JavaScript, Python, Java, C++, HTML, CSS',
    'hero.location': 'São Luis, Maranhão, Brasil',
    'hero.institution': 'GlobalTec Educacional | UNDB - Unidade de Ensino Superior Dom Bosco',
    'hero.projects': 'Ver Projetos',
    'hero.contact': 'Vamos Conversar',
    'hero.scroll': 'Role para baixo',

    // Projects Section
    'projects.title': 'Projetos em Destaque',
    'projects.seeMore': 'Ver Mais',
    'projects.technologies': 'Tecnologias',
    'projects.frontend': 'Frontend',
    'projects.backend': 'Backend',
    'projects.features': 'Funcionalidades',
    'projects.overview': 'Visão Geral',

    // Services Section
    'services.title': 'Serviços',
    'services.subtitle': 'Soluções tecnológicas especializadas para educação, gestão e inovação',
    'services.mobile': {
      title: 'Desenvolvimento Mobile',
      description: 'Criação de aplicativos móveis modernos e responsivos utilizando Flutter/Dart, com foco em experiência do usuário e performance.',
      features: [
        'Apps multiplataforma com Flutter',
        'Interfaces interativas e animadas',
        'Integração com APIs e serviços',
        'Desenvolvimento nativo Android/iOS'
      ]
    },
    'services.education': {
      title: 'Sistemas Educacionais',
      description: 'Desenvolvimento de soluções tecnológicas para educação, combinando software e hardware para criar experiências de aprendizado inovadoras.',
      features: [
        'Plataformas de gestão educacional',
        'Sistemas de biblioteca digital',
        'Conteúdo interativo e multimídia',
        'Integração com dispositivos IoT'
      ]
    },
    'services.iot': {
      title: 'IoT e Sistemas Embarcados',
      description: 'Implementação de soluções IoT e sistemas embarcados, integrando hardware e software para automação e coleta de dados.',
      features: [
        'Programação de microcontroladores',
        'Sensores e atuadores',
        'Protocolos de comunicação',
        'Visualização de dados em tempo real'
      ]
    },
    'services.web': {
      title: 'Desenvolvimento Web',
      description: 'Criação de aplicações web modernas e responsivas, utilizando as mais recentes tecnologias e frameworks do mercado.',
      features: [
        'Frontend com React e Vue.js',
        'Backend com Node.js e Python',
        'Bancos de dados SQL e NoSQL',
        'APIs RESTful e GraphQL'
      ]
    },
    'services.automation': {
      title: 'Automação e Sistemas Internos',
      description: 'Desenvolvimento de soluções automatizadas e sistemas internos para otimização de processos e melhoria da eficiência operacional.',
      features: [
        'Automação de processos',
        'Sistemas de gestão interna',
        'Integração entre sistemas',
        'Otimização de fluxos de trabalho'
      ]
    },
    'services.support': {
      title: 'Suporte Técnico Especializado',
      description: 'Serviços de suporte técnico, manutenção e diagnóstico para hardware e software, garantindo o funcionamento adequado dos sistemas.',
      features: [
        'Manutenção de hardware',
        'Diagnóstico de sistemas',
        'Resolução de problemas técnicos',
        'Documentação e treinamento'
      ]
    },

    // Contact Section
    'contact.title': 'Contato',
    'contact.name': 'Nome',
    'contact.email': 'Email',
    'contact.emailNumber': 'lluisrodrigo2@gmail.com',
    'contact.message': 'Mensagem',
    'contact.send': 'Enviar Mensagem',
    'contact.success': 'Mensagem enviada com sucesso!',
    'contact.error': 'Erro ao enviar mensagem. Tente novamente.',
    'contact.phone': 'Telefone',
    'contact.phoneNumber': '+55 (98) 989855-5475',
    'contact.address': 'Endereço',
    'contact.addressCity': 'São Luis, Maranhão, Brasil',
    'contact.sendMessage': 'Envie uma mensagem',
    'contact.placeholderName': 'Seu nome',
    'contact.placeholderEmail': 'Seu email',
    'contact.placeholderMessage': 'Como posso ajudar?',
    'contact.infoTitle': 'Informações de contato',
    'contact.socialTitle': 'Me siga nas redes sociais',
    'contact.sending': 'Enviando...',

    // About Section
    'about.title': 'Sobre Mim',
    'about.subtitle': 'Desenvolvedor apaixonado por transformar ideias em experiências digitais eficazes',
    'about.role': 'Desenvolvedor Júnior',
    'about.paragraph1': 'Sou Luis Rodrigo Lima Rodrigues, programador com experiência prática no desenvolvimento de soluções tecnológicas voltadas para a educação e o bem-estar. Atualmente atuo na Globaltec Educacional, onde colaboro em projetos inovadores que integram software, hardware educacional e tecnologias interativas.',
    'about.paragraph2': 'Iniciei minha trajetória profissional como estagiário de programação em uma clínica médica, desenvolvendo sistemas internos e ferramentas de melhoria da experiência dos pacientes. Além disso, tive uma passagem significativa como assistente administrativo, o que fortaleceu minha organização, proatividade e habilidades interpessoais.',
    'about.paragraph3': 'Sou graduando em Engenharia de Software pela UNDB, com sólida base em linguagens como Dart (Flutter), Python e C++, e conhecimentos em HTML, CSS e JavaScript. Tenho também vivência no desenvolvimento de sistemas com foco em automação, integração de dispositivos IoT, e construção de interfaces interativas.',
    'about.downloadCV': 'Baixar Currículo',
    'about.skills.title': 'Habilidades Técnicas',
    'about.skills.mobile': {
      title: 'Desenvolvimento Mobile',
      description: 'Flutter/Dart para criação de apps intuitivos e funcionais'
    },
    'about.skills.embedded': {
      title: 'Sistemas Embarcados',
      description: 'Projetos com microcontroladores, sensores e automação'
    },
    'about.skills.web': {
      title: 'Desenvolvimento Web',
      description: 'HTML, CSS, JavaScript e frameworks modernos'
    },
    'about.skills.integration': {
      title: 'Integração de Sistemas',
      description: 'Soluções com IoT e plataformas educacionais'
    },
    'about.skills.debugging': {
      title: 'Depuração e Testes',
      description: 'Identificação e correção de bugs em software e hardware'
    },
    'about.skills.hardware': {
      title: 'Manutenção de Hardware',
      description: 'Montagem e diagnóstico de componentes'
    },

    // Footer
    'footer.description': 'Transformando ideias em experiências digitais através de design e desenvolvimento de qualidade.',
    'footer.quickLinks': 'Links Rápidos',
    'footer.contactTitle': 'Contato',
    'footer.copyright': '© {year} Luis Rodrigo. Todos os direitos reservados.',
    'footer.designBy': 'Design e Desenvolvimento por',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.logo.first': 'Luis ',
    'nav.logo.second': 'Rodrigo',

    // Hero Section
    'hero.name': 'Luis Rodrigo Lima Rodrigues',
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
    'projects.frontend': 'Frontend',
    'projects.backend': 'Backend',
    'projects.features': 'Features',
    'projects.overview': 'Overview',

    // Services Section
    'services.title': 'Services',
    'services.subtitle': 'Specialized technological solutions for education, management, and innovation',
    'services.mobile': {
      title: 'Mobile Development',
      description: 'Creation of modern and responsive mobile applications using Flutter/Dart, focusing on user experience and performance.',
      features: [
        'Cross-platform apps with Flutter',
        'Interactive and animated interfaces',
        'API and service integration',
        'Native Android/iOS development'
      ]
    },
    'services.education': {
      title: 'Educational Systems',
      description: 'Development of technological solutions for education, combining software and hardware to create innovative learning experiences.',
      features: [
        'Educational management platforms',
        'Digital library systems',
        'Interactive and multimedia content',
        'IoT device integration'
      ]
    },
    'services.iot': {
      title: 'IoT and Embedded Systems',
      description: 'Implementation of IoT solutions and embedded systems, integrating hardware and software for automation and data collection.',
      features: [
        'Microcontroller programming',
        'Sensors and actuators',
        'Communication protocols',
        'Real-time data visualization'
      ]
    },
    'services.web': {
      title: 'Web Development',
      description: 'Creation of modern and responsive web applications using the latest technologies and frameworks in the market.',
      features: [
        'Frontend with React and Vue.js',
        'Backend with Node.js and Python',
        'SQL and NoSQL databases',
        'RESTful and GraphQL APIs'
      ]
    },
    'services.automation': {
      title: 'Automation and Internal Systems',
      description: 'Development of automated solutions and internal systems for process optimization and operational efficiency improvement.',
      features: [
        'Process automation',
        'Internal management systems',
        'System integration',
        'Workflow optimization'
      ]
    },
    'services.support': {
      title: 'Specialized Technical Support',
      description: 'Technical support, maintenance, and diagnostic services for hardware and software, ensuring proper system operation.',
      features: [
        'Hardware maintenance',
        'System diagnostics',
        'Technical problem resolution',
        'Documentation and training'
      ]
    },

    // Contact Section
    'contact.title': 'Contact',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.emailNumber': 'lluisrodrigo2@gmail.com',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Error sending message. Please try again.',
    'contact.phone': 'Phone',
    'contact.phoneNumber': '+55 (98) 989855-5475',
    'contact.address': 'Address',
    'contact.addressCity': 'Sao Luis, Maranhão, Brazil',
    'contact.sendMessage': 'Send a message',
    'contact.placeholderName': 'Your name',
    'contact.placeholderEmail': 'Your email',
    'contact.placeholderMessage': 'How can I help?',
    'contact.infoTitle': 'Contact Information',
    'contact.socialTitle': 'Follow me on social media',
    'contact.sending': 'Sending...',

    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'Developer passionate about transforming ideas into effective digital experiences',
    'about.role': 'Junior Developer',
    'about.paragraph1': 'I am Luis Rodrigo Lima Rodrigues, a programmer with practical experience in developing technological solutions focused on education and well-being. I currently work at Globaltec Educacional, where I collaborate on innovative projects that integrate software, educational hardware, and interactive technologies.',
    'about.paragraph2': 'I started my professional journey as a programming intern at a medical clinic, developing internal systems and tools to improve patient experience. Additionally, I had a significant experience as an administrative assistant, which strengthened my organization, proactivity, and interpersonal skills.',
    'about.paragraph3': 'I am an undergraduate in Software Engineering at UNDB, with a solid foundation in languages such as Dart (Flutter), Python, and C++, and knowledge in HTML, CSS, and JavaScript. I also have experience in developing systems focused on automation, IoT device integration, and building interactive interfaces.',
    'about.downloadCV': 'Download CV',
    'about.skills.title': 'Technical Skills',
    'about.skills.mobile': {
      title: 'Mobile Development',
      description: 'Flutter/Dart for creating intuitive and functional apps'
    },
    'about.skills.embedded': {
      title: 'Embedded Systems',
      description: 'Projects with microcontrollers, sensors, and automation'
    },
    'about.skills.web': {
      title: 'Web Development',
      description: 'HTML, CSS, JavaScript, and modern frameworks'
    },
    'about.skills.integration': {
      title: 'System Integration',
      description: 'IoT solutions and educational platforms'
    },
    'about.skills.debugging': {
      title: 'Debugging and Testing',
      description: 'Identifying and fixing bugs in software and hardware'
    },
    'about.skills.hardware': {
      title: 'Hardware Maintenance',
      description: 'Assembly and component diagnostics'
    },

    // Footer
    'footer.description': 'Transforming ideas into digital experiences through quality design and development.',
    'footer.quickLinks': 'Quick Links',
    'footer.contactTitle': 'Contact',
    'footer.copyright': '© {year} Luis Rodrigo. All rights reserved.',
    'footer.designBy': 'Design and Development by',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('language') : null;
    return (saved === 'pt' || saved === 'en') ? saved : 'pt';
  });

  const toggleLanguage = () => {
    setLanguage(prev => {
      const next = prev === 'pt' ? 'en' : 'pt';
      if (typeof window !== 'undefined') {
        localStorage.setItem('language', next);
      }
      return next;
    });
  };

  const t = (key: string): string => {
    const value = translations[language][key as keyof typeof translations[typeof language]];
    if (typeof value === 'string') {
      return value;
    }
    return key;
  };

  const tObject = (key: string): TranslationValue => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, tObject }}>
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