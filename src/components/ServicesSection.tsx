import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { ChevronDown } from "lucide-react";

const services = [
  {
    title: "Desenvolvimento Mobile",
    description: "Criação de aplicativos móveis modernos e responsivos utilizando Flutter/Dart, com foco em experiência do usuário e performance.",
    features: [
      "Apps multiplataforma com Flutter",
      "Interfaces interativas e animadas",
      "Integração com APIs e serviços",
      "Desenvolvimento nativo Android/iOS"
    ]
  },
  {
    title: "Sistemas Educacionais",
    description: "Desenvolvimento de soluções tecnológicas para educação, combinando software e hardware para criar experiências de aprendizado inovadoras.",
    features: [
      "Plataformas de gestão educacional",
      "Sistemas de biblioteca digital",
      "Conteúdo interativo e multimídia",
      "Integração com dispositivos IoT"
    ]
  },
  {
    title: "IoT e Sistemas Embarcados",
    description: "Implementação de soluções IoT e sistemas embarcados, integrando hardware e software para automação e coleta de dados.",
    features: [
      "Programação de microcontroladores",
      "Sensores e atuadores",
      "Protocolos de comunicação",
      "Visualização de dados em tempo real"
    ]
  },
  {
    title: "Desenvolvimento Web",
    description: "Criação de aplicações web modernas e responsivas, utilizando as mais recentes tecnologias e frameworks do mercado.",
    features: [
      "Frontend com React e Vue.js",
      "Backend com Node.js e Python",
      "Bancos de dados SQL e NoSQL",
      "APIs RESTful e GraphQL"
    ]
  },
  {
    title: "Automação e Sistemas Internos",
    description: "Desenvolvimento de soluções automatizadas e sistemas internos para otimização de processos e melhoria da eficiência operacional.",
    features: [
      "Automação de processos",
      "Sistemas de gestão interna",
      "Integração entre sistemas",
      "Otimização de fluxos de trabalho"
    ]
  },
  {
    title: "Suporte Técnico Especializado",
    description: "Serviços de suporte técnico, manutenção e diagnóstico para hardware e software, garantindo o funcionamento adequado dos sistemas.",
    features: [
      "Manutenção de hardware",
      "Diagnóstico de sistemas",
      "Resolução de problemas técnicos",
      "Documentação e treinamento"
    ]
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.02,
    boxShadow: "0 10px 30px -15px rgba(0,0,0,0.2)",
    transition: {
      duration: 0.2
    }
  }
};

const featureVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3
    }
  })
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut"
    }
  }),
  hover: {
    scale: 1.02,
    color: "var(--primary)",
    x: 5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

const bulletVariants = {
  hover: {
    scale: 1.5,
    backgroundColor: "var(--primary)",
    boxShadow: "0 0 10px var(--primary)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const descriptionTextVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.01,
    color: "var(--foreground)",
    x: 3,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

const titleVariants = {
  hover: {
    scale: 1.02,
    color: "var(--primary)",
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 300
    }
  }
};

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Elements com animação */}
      <div className="absolute inset-0 bg-background">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,var(--primary),transparent)]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          className="absolute inset-0 bg-[radial-gradient(circle_800px_at_0%_800px,var(--secondary),transparent)]"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="section-title cursor-pointer"
            whileInView={{
              backgroundSize: ["100% 0%", "100% 100%"],
              transition: { duration: 1, ease: "easeOut" }
            }}
            whileHover={{
              scale: 1.02,
              color: "var(--primary)",
              transition: { duration: 0.2 }
            }}
            style={{
              backgroundImage: "linear-gradient(transparent 60%, var(--primary-foreground) 40%)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "0 0",
            }}
          >
            Serviços
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto text-lg cursor-pointer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.01,
              color: "var(--primary)",
              transition: { duration: 0.2 }
            }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Soluções tecnológicas especializadas para educação, gestão e inovação
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-card h-full backdrop-blur-sm bg-background/80 border border-primary/10">
                <CardContent className="p-6">
                  <Accordion type="single" collapsible>
                    <AccordionItem value={`item-${index}`} className="border-none">
                      <motion.div whileHover={{ scale: 1.01 }} className="w-full">
                        <AccordionTrigger className="hover:no-underline group">
                          <motion.h3 
                            variants={titleVariants}
                            whileHover="hover"
                            className="text-xl font-semibold text-primary text-left group-hover:text-primary/80 cursor-pointer"
                          >
                            {service.title}
                          </motion.h3>
                        </AccordionTrigger>
                      </motion.div>
                      <AccordionContent>
                        <motion.div 
                          className="space-y-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.p 
                            className="text-muted-foreground cursor-pointer"
                            variants={descriptionTextVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            custom={0}
                          >
                            {service.description}
                          </motion.p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                              <motion.li
                                key={featureIndex}
                                variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                whileHover="hover"
                                custom={featureIndex}
                                className="flex items-center gap-2 text-foreground/80 cursor-pointer group"
                              >
                                <motion.span 
                                  className="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover:bg-primary"
                                  variants={bulletVariants}
                                  whileHover="hover"
                                />
                                <motion.span
                                  variants={textVariants}
                                  whileHover="hover"
                                >
                        {feature}
                                </motion.span>
                              </motion.li>
                    ))}
                  </ul>
                        </motion.div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
