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
    title: "UniverTeca",
    description: "Sistema de gerenciamento de biblioteca universitária com recursos avançados de catalogação e empréstimo.",
    image: "/images/UniverTeca.png",
    tags: ["React", "Node.js", "MongoDB", "TypeScript"],
    details: {
      overview: "Sistema completo de gestão bibliotecária desenvolvido para universidades, com foco em usabilidade e eficiência.",
      technologies: {
        frontend: [
          "React com TypeScript para interface moderna e tipada",
          "Material-UI para componentes visuais consistentes",
          "Redux para gerenciamento de estado",
          "React Query para cache e sincronização de dados"
        ],
        backend: [
          "Node.js com Express para API RESTful",
          "MongoDB para armazenamento flexível de dados",
          "JWT para autenticação segura",
          "Socket.IO para atualizações em tempo real"
        ],
        features: [
          "Catálogo digital com busca avançada",
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
    tags: ["Flutter", "Firebase", "Node.js", "MongoDB"],
    details: {
      overview: "Plataforma social educacional que revoluciona a interação entre professores e alunos, facilitando o aprendizado colaborativo.",
      technologies: {
        mobile: [
          "Flutter para desenvolvimento multiplataforma",
          "Provider para gerenciamento de estado",
          "Firebase Authentication para login seguro",
          "Cloud Firestore para banco de dados em tempo real"
        ],
        backend: [
          "Node.js com Express para API",
          "MongoDB para armazenamento de dados",
          "Firebase Cloud Functions para automação",
          "Firebase Cloud Storage para arquivos"
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
    tags: ["Flutter", "Firebase", "Dart"],
    details: {
      overview: "Aplicativo educacional inovador que transforma o aprendizado de química através de experimentos virtuais e conteúdo interativo.",
      technologies: {
        mobile: [
          "Flutter/Dart para desenvolvimento multiplataforma",
          "GetX para gerenciamento de estado",
          "Firebase para autenticação e banco de dados",
          "Flutter Animations para interatividade"
        ],
        features: [
          "Simulador de experimentos químicos",
          "Exercícios interativos com feedback",
          "Biblioteca de conteúdo multimídia",
          "Sistema de progresso e gamificação"
        ],
        backend: [
          "Firebase Authentication",
          "Cloud Firestore",
          "Firebase Storage",
          "Cloud Functions"
        ]
      }
    }
  },
  {
    title: "Alexandria",
    description: "Biblioteca digital com sistema de recomendação baseado em machine learning.",
    image: "/images/Alexandria Icone.png",
    tags: ["Python", "TensorFlow", "Flask", "PostgreSQL"],
    details: {
      overview: "Plataforma de biblioteca digital inteligente que utiliza machine learning para recomendar conteúdo personalizado aos usuários.",
      technologies: {
        backend: [
          "Python com Flask para API RESTful",
          "TensorFlow para algoritmos de ML",
          "PostgreSQL para banco de dados",
          "Redis para cache e filas"
        ],
        frontend: [
          "React para interface moderna",
          "Material-UI para componentes",
          "Redux para gerenciamento de estado",
          "Chart.js para visualizações"
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
    title: "Global Game Maker",
    description: "Engine para criação de jogos 2D com interface intuitiva e recursos avançados.",
    image: "/images/Global-Game-Maker-LOGO.png",
    tags: ["C++", "OpenGL", "Python", "Qt"],
    details: {
      overview: "Engine de jogos 2D profissional com foco em usabilidade e performance, permitindo a criação de jogos sem necessidade de conhecimento profundo em programação.",
      technologies: {
        core: [
          "C++ para o motor de jogos",
          "OpenGL para renderização 2D",
          "Box2D para física",
          "SDL para input e áudio"
        ],
        editor: [
          "Qt para interface gráfica",
          "Python para scripting",
          "OpenGL para preview",
          "JSON para serialização"
        ],
        features: [
          "Editor visual intuitivo",
          "Sistema de eventos visual",
          "Exportação multiplataforma",
          "Asset pipeline otimizado"
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
