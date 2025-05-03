import { motion } from "framer-motion";

const projects = [
  {
    title: "UniverTeca",
    description: "Sistema de gerenciamento de biblioteca universitária com recursos avançados de catalogação e empréstimo.",
    image: "/images/UniverTeca.png",
    tags: ["React", "Node.js", "MongoDB", "TypeScript"]
  },
  {
    title: "ByClass",
    description: "Rede social educacional que conecta professores e alunos, permitindo compartilhamento de conteúdo, discussões e gerenciamento de atividades acadêmicas.",
    image: "/images/icone.png",
    tags: ["Flutter", "Firebase", "Node.js", "MongoDB"]
  },
  {
    title: "ByQuímica",
    description: "Plataforma educacional para ensino de química com experimentos virtuais e exercícios interativos.",
    image: "/images/Icone Byquimica.PNG",
    tags: ["Flutter", "Firebase", "Dart"]
  },
  {
    title: "Alexandria",
    description: "Biblioteca digital com sistema de recomendação baseado em machine learning.",
    image: "/images/Alexandria Icone.png",
    tags: ["Python", "TensorFlow", "Flask", "PostgreSQL"]
  },
  {
    title: "Global Game Maker",
    description: "Engine para criação de jogos 2D com interface intuitiva e recursos avançados.",
    image: "/images/Global-Game-Maker-LOGO.png",
    tags: ["C++", "OpenGL", "Python", "Qt"]
  },
  {
    title: "Galileu",
    description: "Sistema de gestão escolar com módulos de notas, frequência e comunicação.",
    image: "/images/Galileu Logo.png",
    tags: ["React", "Node.js", "PostgreSQL", "TypeScript"]
  }
];

export const ProjectsSection = () => {
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
              className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-colors"
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
                <h3 className="text-xl font-semibold">{project.title}</h3>
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
      </div>
    </section>
  );
};
