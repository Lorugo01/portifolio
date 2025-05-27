import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { X } from "lucide-react";
import { useLanguage } from '../contexts/LanguageContext';

interface ProjectDetails {
  overview: {
    pt: string;
    en: string;
  };
  technologies: {
    frontend: { pt: string[]; en: string[] };
    backend: { pt: string[]; en: string[] };
    features: { pt: string[]; en: string[] };
  };
}

interface Project {
  title: { pt: string; en: string };
  description: { pt: string; en: string };
  image: string;
  tags: { pt: string[]; en: string[] };
  details: ProjectDetails;
}

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const projects: Project[] = [
  {
    title: { pt: "LudiTeca", en: "LudiTeca" },
    description: {
      pt: "Sistema de gerenciamento de biblioteca de livros interativos com painel de controle e para a criação dos livros.",
      en: "Interactive book library management system with control panel and book creation."
    },
    image: "/images/UniverTeca.png",
    tags: {
      pt: ["React", "Node.js", "Supabase", "Flutter"],
      en: ["React", "Node.js", "Supabase", "Flutter"]
    },
    details: {
      overview: {
        pt: "Sistema de gerenciamento de biblioteca de livros interativos com painel de controle e para a criação dos livros, com foco em usabilidade e design.",
        en: "Interactive book library management system with control panel and book creation, focused on usability and design."
      },
      technologies: {
        frontend: {
          pt: [
          "Flutter é utilizado para criar uma aplicação multiplataforma, garantindo uma experiência consistente tanto em dispositivos móveis quanto na web.",
          "Material-UI fornece uma biblioteca de componentes visuais modernos e coerentes com o design system, facilitando a padronização visual da aplicação.",
          "Redux é responsável pelo gerenciamento centralizado do estado da aplicação, proporcionando previsibilidade e organização no fluxo de dado",
          "React Query é utilizado para otimizar o carregamento, cache e sincronização dos dados entre o frontend e o backend, garantindo atualizações rápidas e confiáveis"
        ],
          en: [
            "Flutter is used to create a multiplatform application, ensuring a consistent experience on both mobile devices and the web.",
            "Material-UI provides a library of modern visual components consistent with the design system, facilitating visual standardization of the application.",
            "Redux is responsible for centralized state management, providing predictability and organization in the data flow.",
            "React Query is used to optimize loading, caching, and synchronization of data between frontend and backend, ensuring fast and reliable updates."
          ]
        },
        backend: {
          pt: [
          "Node.js com Express serve como base para a criação de uma API RESTful robusta, com rotas organizadas e manutenção facilitada",
          "Supabase é empregado como banco de dados NoSQL, oferecendo flexibilidade na modelagem de dados para os livros interativos e seus metadados.",
          "JWT (JSON Web Token) implementa a autenticação de forma segura e eficiente, permitindo controle de acesso baseado em perfis de usuários.",
          "Socket.IO viabiliza comunicação em tempo real entre o servidor e os clientes, ideal para notificações instantâneas e interações dinâmicas no painel de controle"
        ],
          en: [
            "Node.js with Express serves as the base for creating a robust RESTful API, with organized routes and easy maintenance.",
            "Supabase is used as a NoSQL database, offering flexibility in modeling data for interactive books and their metadata.",
            "JWT (JSON Web Token) implements authentication securely and efficiently, allowing access control based on user profiles.",
            "Socket.IO enables real-time communication between the server and clients, ideal for instant notifications and dynamic interactions in the control panel."
          ]
        },
        features: {
          pt: [
          "Catálogo digital interativo, com sistema de busca avançada por títulos, autores, gêneros e palavras-chave.",
          "Sistema de empréstimo automatizado",
          "Gestão de usuários e permissões",
          "Relatórios e estatísticas em tempo real"
          ],
          en: [
            "Interactive digital catalog, with advanced search system by titles, authors, genres, and keywords.",
            "Automated loan system",
            "User and permission management",
            "Real-time reports and statistics"
          ]
        }
      }
    }
  },
  {
    title: { pt: "ByClass", en: "ByClass" },
    description: {
      pt: "Rede social educacional que conecta professores e alunos, permitindo compartilhamento de conteúdo, discussões e gerenciamento de atividades acadêmicas.",
      en: "Educational social network that connects teachers and students, allowing content sharing, discussions, and management of academic activities."
    },
    image: "/images/icone.png",
    tags: {
      pt: ["Flutter", "PHP", "Mysql"],
      en: ["Flutter", "PHP", "Mysql"]
    },
    details: {
      overview: {
        pt: "O ByClass é uma rede social acadêmica desenvolvida para instituições de ensino e ambientes EAD. Permite que professores e alunos interajam em tempo real por meio de um feed dinâmico, chat, compartilhamento de conteúdos, avaliações e feedbacks personalizados. A plataforma foi construída com foco em usabilidade, segurança e escalabilidade.",
        en: "ByClass is an academic social network developed for educational institutions and distance learning environments. It allows teachers and students to interact in real time through a dynamic feed, chat, content sharing, assessments, and personalized feedback. The platform was built with a focus on usability, security, and scalability."
      },
      technologies: {
        frontend: {
          pt: [
          "Flutter para desenvolvimento multiplataforma (Android/iOS)",
          "GetX para gerenciamento de estado, rotas e injeção de dependência",
          "Componentes customizados com Material Design adaptados à identidade visual educacional",
          "Responsividade completa com adaptação a tablets e celulares",
          "Consumo de REST APIs para autenticação, feed e conteúdos",
          "Integração com Firebase Messaging para notificações push"
        ],
          en: [
            "Flutter for multiplatform development (Android/iOS)",
            "GetX for state management, routing, and dependency injection",
            "Custom components with Material Design adapted to the educational visual identity",
            "Full responsiveness with adaptation to tablets and phones",
            "Consumption of REST APIs for authentication, feed, and content",
            "Integration with Firebase Messaging for push notifications"
          ]
        },
        backend: {
          pt: [
          "PHP com arquitetura RESTful para a camada de serviços e controle de rotas",
          "MySQL com modelagem relacional eficiente e normalização de dados",
          "Validação de requisições via middleware (autenticação por token)",
          "Sistema de permissões baseado em papéis (professor/aluno)",
          "Firebase Authentication para login seguro com e-mail e senha",
          "Controle de versão com Git, GitHub Actions para CI/CD",
          "Hospedagem em servidor Apache com HTTPS e rotas seguras"
        ],
          en: [
            "PHP with RESTful architecture for the service layer and route control",
            "MySQL with efficient relational modeling and data normalization",
            "Request validation via middleware (token authentication)",
            "Role-based permission system (teacher/student)",
            "Firebase Authentication for secure login with email and password",
            "Version control with Git, GitHub Actions for CI/CD",
            "Hosting on Apache server with HTTPS and secure routes"
          ]
        },
        features: {
          pt: [
          "Feed de atividades com atualização assíncrona e organização cronológica",
          "Chat privado e em grupo com suporte a mídia (imagens, documentos)",
          "Upload e gerenciamento de materiais didáticos (PDF, vídeo, links externos)",
          "Sistema de avaliações personalizadas com notas, feedback textual e visualização gráfica",
          "Perfis personalizados com foto, bio, disciplinas e histórico de participação",
          "Notificações push via Firebase para eventos importantes (mensagens, avaliações, uploads)",
            "Painel administrativo para professores com controle de turmas e conteúdos"
          ],
          en: [
            "Activity feed with asynchronous updates and chronological organization",
            "Private and group chat with media support (images, documents)",
            "Upload and management of didactic materials (PDF, video, external links)",
            "Personalized assessment system with grades, textual feedback, and graphical visualization",
            "Personalized profiles with photo, bio, subjects, and participation history",
            "Push notifications via Firebase for important events (messages, assessments, uploads)",
            "Admin panel for teachers with class and content control"
          ]
        }
      }
    }
  },
  {
    title: { pt: "ByQuímica", en: "ByQuímica" },
    description: {
      pt: "Plataforma educacional para ensino de química com experimentos virtuais e exercícios interativos.",
      en: "Educational platform for chemistry teaching with virtual experiments and interactive exercises."
    },
    image: "/images/Icone Byquimica.PNG",
    tags: {
      pt: ["Flutter", "INO" , "Arduino"],
      en: ["Flutter", "INO" , "Arduino"]
    },
    details: {
      overview: {
        pt: "ByQuímica é um aplicativo educacional inovador que visa facilitar o aprendizado de Química por meio de experimentos virtuais realistas, desafios interativos e conteúdos ilustrados. Desenvolvido com foco em acessibilidade, engajamento e apoio ao ensino formal, o app também oferece integração com sensores físicos via Arduino, promovendo uma aprendizagem prática e contextualizada.",
        en: "ByQuímica is an innovative educational app designed to facilitate chemistry learning through realistic virtual experiments, interactive challenges, and illustrated content. Developed with a focus on accessibility, engagement, and support for formal teaching, the app also offers integration with physical sensors via Arduino, promoting practical and contextual learning."
      },
      technologies: {
        frontend: {
          pt: [
          "Flutter e Dart para desenvolvimento multiplataforma (Android/iOS)",
          "GetX para gerenciamento de estado, rotas e dependências",
          "Custom Widgets com Flutter Animations para reforçar conceitos visuais de química",
          "Design responsivo para tablets escolares e celulares",
        ],
          en: [
            "Flutter and Dart for multiplatform development (Android/iOS)",
            "GetX for state management, routing, and dependencies",
            "Custom Widgets with Flutter Animations to reinforce chemistry visual concepts",
            "Responsive design for school tablets and phones",
          ]
        },
        backend: {
          pt: [
          "Arduino UNO integrado via comunicação serial e Bluetooth para controle de sensores e simulação física de experimentos (ex: acidez, condutividade)",
          "Arduino IDE para desenvolvimento e upload dos firmwares personalizados",
          "Leitura de sensores (como pH, temperatura, condutividade) conectados à plataforma",
              ],
          en: [
            "Arduino UNO integrated via serial communication and Bluetooth for sensor control and physical experiment simulation (e.g., acidity, conductivity)",
            "Arduino IDE for development and upload of personalized firmwares",
            "Sensor reading (like pH, temperature, conductivity) connected to the platform",
          ]
        },
        features: {
          pt: [
          "Simulador visual de experimentos químicos com etapas guiadas",
          "Módulo de conexão com hardware físico para experimentos reais via sensores",
          "Funcionalidades offline para escolas com baixa conectividade",
          ],
          en: [
            "Visual experiment simulator with guided steps",
            "Hardware connection module for real experiments via sensors",
            "Offline functionalities for schools with low connectivity",
        ]
        }
      }
    }
  },
  {
    title: { pt: "Alexandria", en: "Alexandria" },
    description: {
      pt: "Biblioteca digital com acervo focado em educação.",
      en: "Digital library with focus on education."
    },
    image: "/images/Alexandria Icone.png",
    tags: {
      pt: ["Flutter", "Dart", "PHP", "Mysql"],
      en: ["Flutter", "Dart", "PHP", "Mysql"]
    },
    details: {
      overview: {
        pt: "Alexandria é uma plataforma de biblioteca digital desenvolvida para facilitar o acesso a materiais educacionais organizados por categorias, autores e palavras-chave. Ideal para escolas e instituições que desejam digitalizar seu acervo, oferece recursos como pesquisa semântica, histórico de leitura e categorização automatizada de conteúdos.",
        en: "Alexandria is a digital library platform developed to facilitate access to educational materials organized by categories, authors, and keywords. Ideal for schools and institutions that want to digitalize their collection, offering resources such as semantic search, reading history, and automated content categorization."
      },
      technologies: {
        frontend: {
          pt: [
          "Flutter com Dart para desenvolvimento de aplicativo multiplataforma (Android/iOS)",
          "GetX para gerenciamento eficiente de estado, rotas e dependências",
          "Design responsivo com navegação intuitiva e fluida",
          "Widgets personalizados para exibição de acervo, filtros e histórico de leitura",
          "Sistema de autenticação com Flutter Secure Storage",
        ],
          en: [
            "Flutter and Dart for multiplatform application development (Android/iOS)",
            "GetX for efficient state management, routing, and dependencies",
            "Responsive design with intuitive and fluid navigation",
            "Custom widgets for collection display, filtering, and reading history",
            "Secure authentication system with Flutter Secure Storage",
          ]
        },
        backend: {
          pt: [
          "PHP com estrutura modular para criação de rotas RESTful",
          "MySQL para gerenciamento e indexação de acervo digital",
          "Endpoints seguros com autenticação baseada em token",
          "Sistema de tags e categorias para organização do conteúdo",
          "Painel administrativo para controle de usuários, uploads dos livros",
        ],
          en: [
            "PHP with modular structure for creating RESTful routes",
            "MySQL for digital collection management and indexing",
            "Secure endpoints with token-based authentication",
            "Tag and category system for content organization",
            "Admin panel for user control, book uploads",
          ]
        },
        features: {
          pt: [
          "Busca avançada com filtros por autor, tema, data e tipo de mídia",
          "Organização por categorias personalizáveis e tags atribuídas manualmente ou por padrão",
          "Perfil do usuário com histórico de leitura e favoritos",
          "Painel de administração com upload de arquivos, controle de categorias e visualização de acessos",
          "Modo offline para leitura de conteúdos previamente baixados",
          "Suporte a múltiplos formatos: PDF, ePub, vídeo-aula, artigo HTML",
          "Acesso controlado por perfil (aluno, professor, gestor)"
          ],
          en: [
            "Advanced search with filters by author, theme, date, and media type",
            "Personalizable category organization and manually or default assigned tags",
            "User profile with reading history and favorites",
            "Admin panel with file upload, category control, and access visualization",
            "Offline mode for reading previously downloaded contents",
            "Support for multiple formats: PDF, ePub, video lesson, HTML article",
            "Access controlled by profile (student, teacher, manager)"
          ]
        }
      }
    }
  },
  {
    title: { pt: "ByGames", en: "ByGames" },
    description: {
      pt: "Site de gerencimanto de jogos educativos para crianças de todas as idades com sistema de administração e gerenciamento de jogos e usuarios.",
      en: "Educational games management site for children of all ages with administration and management system."
    },
    image: "/images/Global-Game-Maker-LOGO.png",
    tags: {
      pt: ["flutter", "Dart", "Php", "Mysql"],
      en: ["flutter", "Dart", "Php", "Mysql"]
    },
    details: {
      overview: {
        pt: "ByGames é uma plataforma digital voltada para instituições educacionais, desenvolvedores e professores, que permite o gerenciamento centralizado de jogos educativos. Com recursos voltados à organização de conteúdos por categorias, perfis de usuários e sistema de avaliações, oferece uma interface acessível tanto para administradores quanto para crianças em idade escolar. Ideal para escolas que querem organizar experiências lúdicas no ensino fundamental e infantil.",
        en: "ByGames is a digital platform aimed at educational institutions, developers, and teachers, allowing centralized management of educational games. With resources focused on content organization by categories, user profiles, and assessment system, it offers an accessible interface for both administrators and children in elementary and early childhood education. Ideal for schools that want to organize fun educational experiences."
      },
      technologies: {
        frontend: {
          pt: [
          "Flutter e Dart para desenvolvimento multiplataforma (web/mobile)",
          "GetX para gerenciamento de estado e navegação entre telas",
          "Flutter Animations para elementos interativos e lúdicos",
          "Design responsivo adaptado para tablets e dispositivos escolares",
        ],
          en: [
            "Flutter and Dart for multiplatform development (web/mobile)",
            "GetX for state management and screen navigation",
            "Flutter Animations for interactive and playful elements",
            "Responsive design adapted for school tablets and devices",
          ]
        },
        backend: {
          pt: [
          "PHP com arquitetura RESTful para APIs administrativas",
          "MySQL com modelagem relacional para gerenciamento de entidades (jogos, usuários, categorias, avaliações)",
          "Controle de permissões por perfil (admin, professor, aluno)",
          "Rotas seguras com validação de token",
          "Painel de controle para cadastro, edição e remoção de conteúdos"
        ],
          en: [
            "PHP with RESTful architecture for administrative APIs",
            "MySQL with relational modeling for entity management (games, users, categories, assessments)",
            "Profile-based permission control (admin, teacher, student)",
            "Secure routes with token validation",
            "Control panel for content registration, editing, and removal"
          ]
        },
        features: {
          pt: [
          "Cadastro, organização e visualização de jogos educativos com imagens, descrições e links de execução",
          "Gestão completa de usuários com perfis diferenciados (aluno, professor, administrador)",
          "Classificação de jogos por categorias temáticas e faixas etárias",
          "Sistema de avaliação dos jogos com notas, comentários e indicadores de usabilidade",
          "Módulo de feedbacks para que alunos e professores compartilhem suas impressões",
          "Relatórios administrativos com estatísticas de acesso e uso por usuário ou jogo",
          "Ambiente lúdico e colorido, projetado para acessibilidade e usabilidade por crianças",
          "Suporte a uso offline para visualização de jogos previamente carregados"
          ],
          en: [
            "Game registration, organization, and visualization with images, descriptions, and execution links",
            "Complete user management with differentiated profiles (student, teacher, administrator)",
            "Game classification by thematic categories and age ranges",
            "Game assessment system with grades, comments, and usability indicators",
            "Feedback module for students and teachers to share their impressions",
            "Administrative reports with access and usage statistics by user or game",
            "Lively and colorful environment designed for accessibility and usability by children",
            "Offline support for previously loaded game visualization"
          ]
        }
      }
    }
  },
  {
    title: { pt: "Galileu", en: "Galileu" },
    description: {
      pt: "Sistema de gestão educacional voltado ao apoio pedagógico de professores, com funcionalidades para organização de conteúdos, acompanhamento de turmas e administração de informações acadêmicas.",
      en: "Educational management system focused on teacher pedagogical support, with functionalities for content organization, class monitoring, and academic information management."
    },
    image: "/images/Galileu Logo.png",
    tags: {
      pt: ["Flutter", "Dart", "PHP", "MySQL"],
      en: ["Flutter", "Dart", "PHP", "MySQL"]
    },
    details: {
      overview: {
        pt: "Galileu é uma plataforma desenvolvida para facilitar o trabalho dos professores em instituições de ensino, oferecendo ferramentas para registro de atividades, acompanhamento de desempenho dos alunos, compartilhamento de conteúdos didáticos e organização de planejamentos pedagógicos. Focado na otimização da rotina docente, o sistema centraliza dados escolares em um ambiente digital acessível e seguro.",
        en: "Galileu is a platform developed to facilitate teachers' work in educational institutions, offering tools for activity registration, student performance monitoring, sharing educational content, and organizing pedagogical plans. Focused on optimizing the teacher's routine, the system centralizes school data in a digital accessible and secure environment."
      },
      technologies: {
        frontend: {
          pt: [
          "Flutter com Dart para criação de interface multiplataforma (web e mobile)",
          "GetX para gerenciamento de estado e navegação eficiente",
          "Widgets personalizados para visualização de turmas, alunos e cronogramas",
          "Design responsivo otimizado para uso em celulares e tablets educacionais",
          "Integração com APIs REST para sincronização de dados educacionais"
        ],
          en: [
            "Flutter and Dart for multiplatform interface creation (web and mobile)",
            "GetX for efficient state management and navigation",
            "Custom widgets for class, student, and schedule visualization",
            "Optimized responsive design for educational tablets and phones",
            "Integration with REST APIs for educational data synchronization"
          ]
        },
        backend: {
          pt: [
          "PHP com rotas RESTful para CRUD de dados acadêmicos e administrativos",
          "MySQL para estruturação de banco de dados relacional (professores, turmas, conteúdos, atividades)",
          "Sistema de autenticação com níveis de acesso (professor, coordenador, gestor)",
          "Implementação de logs de acesso e alteração de dados para rastreabilidade",
          "Painel de controle para gestão escolar: turmas, disciplinas, calendários e relatórios"
        ],
          en: [
            "PHP with RESTful routes for CRUD of academic and administrative data",
            "MySQL for relational database structure (teachers, classes, contents, activities)",
            "Authentication system with access levels (teacher, coordinator, manager)",
            "Implementation of access and data change logs for traceability",
            "Educational management panel: classes, subjects, schedules, and reports"
          ]
        },
        features: {
          pt: [
          "Cadastro e gerenciamento de turmas, disciplinas e horários",
          "Lançamento e acompanhamento de atividades e avaliações por aluno",
          "Envio de materiais didáticos e planos de aula por disciplina",
          "Visualização de relatórios de desempenho individual e por turma",
          "Agenda integrada com cronograma letivo, eventos e prazos importantes",
          "Sistema de anotações pedagógicas e comunicados internos entre professores",
          "Exportação de dados para planilhas e PDFs",
          "Ambiente seguro com autenticação e permissões baseadas em perfil"
          ],
          en: [
            "Class registration and management",
            "Launch and follow-up of activities and assessments by student",
            "Sending educational materials and lesson plans by subject",
            "Visualization of individual and class performance reports",
            "Integrated agenda with school schedule, events, and important deadlines",
            "Pedagogical notes and internal communications between teachers",
            "Data export to spreadsheets and PDFs",
            "Secure environment with profile-based authentication and permissions"
          ]
        }
      }
    }
  }  
];

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const { t, language } = useLanguage();
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={language + '-modal-title'}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25 }}
              >
                {project.title[language]}
              </motion.span>
            </AnimatePresence>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="relative aspect-video rounded-lg overflow-hidden bg-black flex items-center justify-center">
            <motion.img
              src={project.image}
              alt={project.title[language]}
              className="object-contain w-full h-full drop-shadow-md"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={language + '-modal-overview'}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  {project.details.overview[language]}
                </motion.span>
              </AnimatePresence>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(project.details.technologies).map(([category, items]) => (
                <div key={category} className="space-y-3">
                  <h3 className="text-lg font-semibold text-primary capitalize">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={language + '-modal-category-' + category}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.25 }}
                      >
                        {t(`projects.${category}`)}
                      </motion.span>
                    </AnimatePresence>
                  </h3>
                  <ul className="space-y-2">
                    {items[language].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-2 text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                        <AnimatePresence mode="wait" initial={false}>
                          <motion.span
                            key={language + '-modal-item-' + category + '-' + index}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.25 }}
                          >
                            {item}
                          </motion.span>
                        </AnimatePresence>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {project.tags[language].map((tag, idx) => (
                <AnimatePresence mode="wait" initial={false}>
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    <motion.span
                      key={language + '-modal-tag-' + idx}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.25 }}
                    >
                      {tag}
                    </motion.span>
                  </span>
                </AnimatePresence>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export const ProjectsSection = () => {
  const { t, language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={language + '-section-title'}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.25 }}
            >
              {t('projects.title')}
            </motion.span>
          </AnimatePresence>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title[language]}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-colors cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-video relative overflow-hidden bg-black flex items-center justify-center">
                <motion.img
                  src={project.image}
                  alt={project.title[language]}
                  className="object-contain w-full h-full drop-shadow-md"
                  initial={{ scale: 1.05 }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-primary">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={language + '-card-title-' + index}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.25 }}
                    >
                      {project.title[language]}
                    </motion.span>
                  </AnimatePresence>
                </h3>
                <p className="text-muted-foreground text-sm">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={language + '-card-desc-' + index}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.25 }}
                    >
                      {project.description[language]}
                    </motion.span>
                  </AnimatePresence>
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags[language].map((tag, idx) => (
                    <AnimatePresence mode="wait" initial={false}>
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                      >
                        <motion.span
                          key={language + '-card-tag-' + index + '-' + idx}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.25 }}
                        >
                          {tag}
                        </motion.span>
                      </span>
                    </AnimatePresence>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              isOpen={!!selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
