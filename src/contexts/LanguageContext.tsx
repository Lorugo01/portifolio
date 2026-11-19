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
    'hero.title': 'Desenvolvedor Backend Pleno | NestJS, Prisma, PostgreSQL, TypeScript, React, Flutter',
    'hero.location': 'São Luis, Maranhão, Brasil',
    'hero.institution': 'Supervisor de Departamento @ Globaltec Educacional | Engenharia de Software - UNDB',
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
    'services.subtitle': 'Sistemas de ponta a ponta para educação, gestão e inovação: do banco de dados ao deploy',
    'services.mobile': {
      title: 'Desenvolvimento Mobile',
      description: 'Criação de aplicativos móveis modernos utilizando Flutter/Dart, como ERPs mobile com API própria e assistentes de IA com voz, com foco em experiência do usuário e performance.',
      features: [
        'Apps multiplataforma com Flutter',
        'Interfaces interativas e animadas',
        'Integração com APIs e serviços',
        'Desenvolvimento nativo Android/iOS'
      ]
    },
    'services.education': {
      title: 'Sistemas Educacionais',
      description: 'Desenvolvimento de soluções tecnológicas para educação na Globaltec Educacional, combinando software e hardware para criar experiências de aprendizado inovadoras.',
      features: [
        'Plataformas de gestão educacional',
        'Sistemas de biblioteca digital',
        'Conteúdo interativo e multimídia',
        'Integração com dispositivos IoT'
      ]
    },
    'services.iot': {
      title: 'IoT e Sistemas Embarcados',
      description: 'Implementação de soluções IoT e sistemas embarcados com ESP32 e C++, como os armários inteligentes de laboratório BYLAB, integrando hardware e software para automação e coleta de dados.',
      features: [
        'Firmware para microcontroladores (ESP32)',
        'Sensores e atuadores',
        'Protocolos de comunicação',
        'Visualização de dados em tempo real'
      ]
    },
    'services.web': {
      title: 'Desenvolvimento Web',
      description: 'Criação de sistemas web completos: modelagem do banco, APIs, autenticação, tempo real e deploy em servidor próprio.',
      features: [
        'Frontend com React e Next.js',
        'Backend com NestJS, Prisma e TypeScript',
        'Bancos de dados PostgreSQL e SQL',
        'APIs REST, login único (SSO) e tempo real (SSE)'
      ]
    },
    'services.automation': {
      title: 'Automação e Sistemas Internos',
      description: 'Desenvolvimento de ERPs e sistemas internos para otimização de processos, como o ERP Globaltec com 12 módulos e redução estimada de 62% no esforço de RH e ponto.',
      features: [
        'Automação de processos',
        'ERPs: RH e ponto, estoque, compras e financeiro',
        'Integração entre sistemas',
        'Otimização de fluxos de trabalho'
      ]
    },
    'services.support': {
      title: 'Suporte Técnico Especializado',
      description: 'Serviços de suporte técnico, manutenção, diagnóstico e infraestrutura (VMs, VPS, Docker, Caddy e Nginx), garantindo o funcionamento adequado dos sistemas.',
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
    'contact.phoneNumber': '+55 (98) 98555-5475',
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
    'about.subtitle': 'Desenvolvedor backend que constrói sistemas de ponta a ponta, do banco de dados ao deploy',
    'about.role': 'Desenvolvedor Backend',
    'about.paragraph1': 'Sou Luis Rodrigo Lima Rodrigues, desenvolvedor backend pleno e Supervisor de Departamento na Globaltec Educacional, onde lidero as equipes de aplicações. Construo sistemas de ponta a ponta (modelagem do banco, APIs, autenticação, tempo real e deploy em servidor próprio), com foco em NestJS, Prisma, PostgreSQL e TypeScript.',
    'about.paragraph2': 'Na Globaltec passei de estagiário de TI e auxiliar de programação à supervisão, atuando em projetos como o ERP Globaltec (12 módulos), o login único (SSO) usado por 7 aplicações e os armários inteligentes BYLAB com ESP32. Antes, fui estagiário de TI no Instituto Ruy Palhano, desenvolvendo sistemas internos e ferramentas para melhorar a experiência dos pacientes, e assistente administrativo, o que fortaleceu minha organização, proatividade e habilidades interpessoais.',
    'about.paragraph3': 'Sou bacharel em Engenharia de Software pela UNDB (2026) e criador do MaxRPG (maxrpg.io), plataforma de fichas digitais de D&D 5e com mesas em tempo real e mais de 800 usuários. Também trabalho com React/Next.js, Flutter/Dart, Python, C++ e IoT com ESP32, além de infraestrutura com Docker, VPS, Caddy e Nginx.',
    'about.downloadCV': 'Baixar Currículo',
    'about.skills.title': 'Habilidades Técnicas',
    'about.skills.mobile': {
      title: 'Desenvolvimento Mobile',
      description: 'Flutter/Dart para apps multiplataforma, como ERP mobile e assistente de IA com voz'
    },
    'about.skills.embedded': {
      title: 'Sistemas Embarcados',
      description: 'Firmware em C++ com ESP32, sensores e automação de laboratórios'
    },
    'about.skills.web': {
      title: 'Desenvolvimento Web',
      description: 'NestJS, Prisma e PostgreSQL no backend; React e Next.js no frontend'
    },
    'about.skills.integration': {
      title: 'Integração de Sistemas',
      description: 'SSO com JWT RS256/JWKS, tempo real via SSE, IoT e plataformas educacionais'
    },
    'about.skills.debugging': {
      title: 'Depuração e Testes',
      description: 'Code review, identificação e correção de bugs em software e hardware'
    },
    'about.skills.hardware': {
      title: 'Manutenção de Hardware',
      description: 'Montagem e diagnóstico de componentes, VMs, VPS e Docker'
    },
    'about.skills.backend': {
      title: 'Desenvolvimento Backend',
      description: 'APIs em NestJS e Node.js com TypeScript, Prisma, PostgreSQL e documentação com Swagger'
    },
    'about.skills.auth': {
      title: 'Autenticação e Tempo Real',
      description: 'JWT com refresh token, login com Google (OAuth), SSO com JWKS e eventos em tempo real via SSE'
    },
    'about.skills.devops': {
      title: 'Infraestrutura e Deploy',
      description: 'Docker Compose, Caddy e Nginx em VPS Linux e máquinas virtuais, com scripts de backup e restauração'
    },
    'about.skills.leadership': {
      title: 'Liderança e Metodologias Ágeis',
      description: 'Liderança das equipes de aplicações, arquitetura, code review e sprints com Kanban'
    },
    'about.stack.title': 'Tecnologias e Ferramentas',
    'about.languages.title': 'Idiomas',
    'about.languages.list': ['Português: nativo', 'Inglês: avançado', 'Espanhol: básico'],
    'about.softSkills.title': 'Habilidades interpessoais',
    'about.softSkills.list': ['Liderança', 'Trabalho em equipe', 'Pensamento analítico', 'Resolução de problemas', 'Boa comunicação', 'Organização', 'Adaptabilidade'],
    'projects.visit': 'Acessar projeto',
    'projects.private': 'Código privado',

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
    'hero.title': 'Mid-level Backend Developer | NestJS, Prisma, PostgreSQL, TypeScript, React, Flutter',
    'hero.location': 'São Luís, Maranhão, Brazil',
    'hero.institution': 'Department Supervisor @ Globaltec Educacional | Software Engineering - UNDB',
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
    'services.subtitle': 'End-to-end systems for education, management, and innovation: from database to deploy',
    'services.mobile': {
      title: 'Mobile Development',
      description: 'Creation of modern mobile applications using Flutter/Dart, such as mobile ERPs with their own API and voice-enabled AI assistants, focusing on user experience and performance.',
      features: [
        'Cross-platform apps with Flutter',
        'Interactive and animated interfaces',
        'API and service integration',
        'Native Android/iOS development'
      ]
    },
    'services.education': {
      title: 'Educational Systems',
      description: 'Development of technological solutions for education at Globaltec Educacional, combining software and hardware to create innovative learning experiences.',
      features: [
        'Educational management platforms',
        'Digital library systems',
        'Interactive and multimedia content',
        'IoT device integration'
      ]
    },
    'services.iot': {
      title: 'IoT and Embedded Systems',
      description: 'Implementation of IoT solutions and embedded systems with ESP32 and C++, such as the BYLAB smart lockers, integrating hardware and software for automation and data collection.',
      features: [
        'Microcontroller firmware (ESP32)',
        'Sensors and actuators',
        'Communication protocols',
        'Real-time data visualization'
      ]
    },
    'services.web': {
      title: 'Web Development',
      description: 'Creation of complete web systems: database modeling, APIs, authentication, real time, and self-hosted deployment.',
      features: [
        'Frontend with React and Next.js',
        'Backend with NestJS, Prisma, and TypeScript',
        'PostgreSQL and SQL databases',
        'REST APIs, single sign-on (SSO), and real time (SSE)'
      ]
    },
    'services.automation': {
      title: 'Automation and Internal Systems',
      description: 'Development of ERPs and internal systems for process optimization, such as the 12-module Globaltec ERP, with an estimated 62% reduction in HR and timekeeping effort.',
      features: [
        'Process automation',
        'ERPs: HR and timekeeping, inventory, purchasing, and finance',
        'System integration',
        'Workflow optimization'
      ]
    },
    'services.support': {
      title: 'Specialized Technical Support',
      description: 'Technical support, maintenance, diagnostics, and infrastructure (VMs, VPS, Docker, Caddy, and Nginx), ensuring proper system operation.',
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
    'contact.phoneNumber': '+55 (98) 98555-5475',
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
    'about.subtitle': 'Backend developer who builds end-to-end systems, from database to deploy',
    'about.role': 'Backend Developer',
    'about.paragraph1': 'I am Luis Rodrigo Lima Rodrigues, a mid-level backend developer and Department Supervisor at Globaltec Educacional, where I lead the applications teams. I build end-to-end systems (database modeling, APIs, authentication, real time, and self-hosted deployment), focusing on NestJS, Prisma, PostgreSQL, and TypeScript.',
    'about.paragraph2': 'At Globaltec I went from IT intern and programming assistant to supervisor, working on projects such as the Globaltec ERP (12 modules), the single sign-on (SSO) used by 7 applications, and the BYLAB smart lockers with ESP32. Before that, I was an IT intern at Instituto Ruy Palhano, building internal systems and tools to improve patient experience, and an administrative assistant, which strengthened my organization, proactivity, and interpersonal skills.',
    'about.paragraph3': 'I hold a bachelor\'s degree in Software Engineering from UNDB (2026) and created MaxRPG (maxrpg.io), a D&D 5e digital character sheet platform with real-time tables and over 800 users. I also work with React/Next.js, Flutter/Dart, Python, C++, and IoT with ESP32, plus infrastructure with Docker, VPS, Caddy, and Nginx.',
    'about.downloadCV': 'Download CV',
    'about.skills.title': 'Technical Skills',
    'about.skills.mobile': {
      title: 'Mobile Development',
      description: 'Flutter/Dart for cross-platform apps, such as a mobile ERP and a voice AI assistant'
    },
    'about.skills.embedded': {
      title: 'Embedded Systems',
      description: 'C++ firmware with ESP32, sensors, and lab automation'
    },
    'about.skills.web': {
      title: 'Web Development',
      description: 'NestJS, Prisma, and PostgreSQL on the backend; React and Next.js on the frontend'
    },
    'about.skills.integration': {
      title: 'System Integration',
      description: 'SSO with JWT RS256/JWKS, real time via SSE, IoT, and educational platforms'
    },
    'about.skills.debugging': {
      title: 'Debugging and Testing',
      description: 'Code review, identifying and fixing bugs in software and hardware'
    },
    'about.skills.hardware': {
      title: 'Hardware Maintenance',
      description: 'Assembly and component diagnostics, VMs, VPS, and Docker'
    },
    'about.skills.backend': {
      title: 'Backend Development',
      description: 'NestJS and Node.js APIs with TypeScript, Prisma, PostgreSQL, and Swagger documentation'
    },
    'about.skills.auth': {
      title: 'Authentication and Real Time',
      description: 'JWT with refresh tokens, Google sign-in (OAuth), SSO with JWKS, and real-time events via SSE'
    },
    'about.skills.devops': {
      title: 'Infrastructure and Deploy',
      description: 'Docker Compose, Caddy, and Nginx on Linux VPS and virtual machines, with backup and restore scripts'
    },
    'about.skills.leadership': {
      title: 'Leadership and Agile',
      description: 'Leading the applications teams: architecture, code review, and Kanban sprints'
    },
    'about.stack.title': 'Technologies and Tools',
    'about.languages.title': 'Languages',
    'about.languages.list': ['Portuguese: native', 'English: advanced', 'Spanish: basic'],
    'about.softSkills.title': 'Soft skills',
    'about.softSkills.list': ['Leadership', 'Teamwork', 'Analytical thinking', 'Problem solving', 'Communication', 'Organization', 'Adaptability'],
    'projects.visit': 'Open project',
    'projects.private': 'Private code',

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