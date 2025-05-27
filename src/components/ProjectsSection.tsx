import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { X } from "lucide-react";

interface ProjectDetails {
  overview: string;
  technologies: {
    [key: string]: string[];
  };
}

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  details: ProjectDetails;
}

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const projects: Project[] = [
  {
    title: "LudiTeca",
    description: "Sistema de gerenciamento de biblioteca de livros interativos com painel de controle e para a criação dos livros.",
    image: "/images/UniverTeca.png",
    tags: ["React", "Node.js", "Supabase", "Flutter"],
    details: {
      overview: "Sistema de gerenciamento de biblioteca de livros interativos com painel de controle e para a criação dos livros, com foco em usabilidade e design.",
      technologies: {
        frontend: [
          "Flutter é utilizado para criar uma aplicação multiplataforma, garantindo uma experiência consistente tanto em dispositivos móveis quanto na web.",
          "Material-UI fornece uma biblioteca de componentes visuais modernos e coerentes com o design system, facilitando a padronização visual da aplicação.",
          "Redux é responsável pelo gerenciamento centralizado do estado da aplicação, proporcionando previsibilidade e organização no fluxo de dado",
          "React Query é utilizado para otimizar o carregamento, cache e sincronização dos dados entre o frontend e o backend, garantindo atualizações rápidas e confiáveis"
        ],
        backend: [
          "Node.js com Express serve como base para a criação de uma API RESTful robusta, com rotas organizadas e manutenção facilitada",
          "Supabase é empregado como banco de dados NoSQL, oferecendo flexibilidade na modelagem de dados para os livros interativos e seus metadados.",
          "JWT (JSON Web Token) implementa a autenticação de forma segura e eficiente, permitindo controle de acesso baseado em perfis de usuários.",
          "Socket.IO viabiliza comunicação em tempo real entre o servidor e os clientes, ideal para notificações instantâneas e interações dinâmicas no painel de controle"
        ],
        features: [
          "Catálogo digital interativo, com sistema de busca avançada por títulos, autores, gêneros e palavras-chave.",
          "Sistema de empréstimo automatizado",
          "Gestão de usuários e permissões",
          "Relatórios e estatísticas em tempo real"
        ]
      }
    }
  },
  {
    title: "ByClass",
    description: "Rede social educacional que conecta professores e alunos, permitindo compartilhamento de conteúdo, discussões e gerenciamento de atividades acadêmicas.",
    image: "/images/icone.png",
    tags: ["Flutter", "PHP", "Mysql"],
    details: {
      overview: "Plataforma social educacional que revoluciona a interação entre professores e alunos, facilitando o aprendizado colaborativo.",
      technologies: {
        frontend: [
          "Flutter para desenvolvimento multiplataforma",
          "GetX para gerenciamento de estado",
        ],
        backend: [
          "Php para backend",
          "Mysql para banco de dados",
        ],
        features: [
          "Feed de atividades em tempo real",
          "Chat integrado para discussões",
          "Compartilhamento de materiais didáticos",
          "Sistema de avaliação e feedback"
        ]
      }
    }
  },
  {
    title: "ByQuímica",
    description: "Plataforma educacional para ensino de química com experimentos virtuais e exercícios interativos.",
    image: "/images/Icone Byquimica.PNG",
    tags: ["Flutter", "INO" , "Arduino"],
    details: {
      overview: "Aplicativo educacional inovador que transforma o aprendizado de química através de experimentos virtuais e conteúdo interativo.",
      technologies: {
        frontend: [
          "Flutter/Dart para desenvolvimento multiplataforma",
          "GetX para gerenciamento de estado",
          "Flutter Animations para interatividade"
        ],
        backend: [
          "INO para hardware",
          "Arduino para hardware",
          "Arduino IDE para desenvolvimento de hardware",        ],
        features: [
          "Simulador de experimentos químicos",
          "Exercícios interativos com feedback",
          "Biblioteca de conteúdo multimídia",
          "Sistema de progresso e gamificação"
        ]
      }
    }
  },
  {
    title: "Alexandria",
    description: "Biblioteca digital com acervo focado em educação.",
    image: "/images/Alexandria Icone.png",
    tags: ["Flutter", "Dart", "PHP", "Mysql"],
    details: {
      overview: "Plataforma de biblioteca digital inteligente que utiliza machine learning para recomendar conteúdo personalizado aos usuários.",
      technologies: {
        frontend: [
          "Flutter para desenvolvimento multiplataforma",
          "GetX para gerenciamento de estado",
          "Flutter Animations para interatividade"
        ],
        backend: [
          "Php para backend",
          "Mysql para banco de dados",
        ],
        features: [
          "Sistema de recomendação inteligente",
          "Busca semântica avançada",
          "Gestão de acervo digital",
          "Análise de comportamento de leitura"
        ]
      }
    }
  },
  {
    title: "ByGames",
    description: "Site de gerencimanto de jogos educativos para crianças de todas as idades com sistema de administração e gerenciamento de jogos e usuarios.",
    image: "/images/Global-Game-Maker-LOGO.png",
    tags: ["flutter", "Dart", "Php", "Mysql"],
    details: {
      overview: " Site de gerencimanto de jogos educativos para crianças de todas as idades com sistema de administração e gerenciamento de jogos e usuarios.",
      technologies: {
        frontend: [
          "Flutter para desenvolvimento multiplataforma",
          "GetX para gerenciamento de estado",
          "Firebase para autenticação e banco de dados",
          "Flutter Animations para interatividade"
        ],
        backend: [
          "Php para backend",
          "Mysql para banco de dados",
        ],
        features: [
          "Gestão de jogos educativos",
          "Gestão de usuários",
          "Gestão de categorias",
          "Gestão de tags",
          "Gestão de avaliações",
          "Gestão de feedbacks",
        ]
      }
    }
  },
  {
    title: "Galileu",
    description: "Sistema de gestão escolar com módulos de notas, frequência e comunicação.",
    image: "/images/Galileu Logo.png",
    tags: ["React", "Node.js", "PostgreSQL", "TypeScript"],
    details: {
      overview: "Sistema completo de gestão escolar que integra todas as necessidades administrativas e pedagógicas de instituições de ensino.",
      technologies: {
        frontend: [
          "React com TypeScript",
          "Material-UI para interface",
          "Redux Toolkit para estado",
          "React Query para dados"
        ],
        backend: [
          "Node.js com Express",
          "PostgreSQL para dados",
          "Redis para cache",
          "Socket.IO para tempo real"
        ],
        features: [
          "Gestão de notas e frequência",
          "Comunicação escola-família",
          "Portal do aluno e professor",
          "Relatórios e dashboards"
        ]
      }
    }
  }
];

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground">{project.details.overview}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(project.details.technologies).map(([category, items]) => (
                <div key={category} className="space-y-3">
                  <h3 className="text-lg font-semibold text-primary capitalize">
                    {category}
                  </h3>
                  <ul className="space-y-2">
                    {items.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-2 text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export const ProjectsSection = () => {
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
          Projetos em Destaque
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-colors cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-video relative overflow-hidden bg-muted">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                  initial={{ scale: 1.2 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
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
