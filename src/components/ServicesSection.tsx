import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

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

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_800px_at_100%_200px,var(--primary),transparent)]"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_800px_at_0%_800px,var(--secondary),transparent)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Serviços</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Soluções tecnológicas especializadas para educação, gestão e inovação
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-card h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-foreground/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
