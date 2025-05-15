import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background/50">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_500px_at_50%_200px,var(--primary),transparent)]"></div>
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,var(--primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--primary)_1px,transparent_1px)]" style={{ backgroundSize: '24px 24px' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Sobre Mim</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Desenvolvedor apaixonado por transformar ideias em experiências digitais eficazes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="glass-card p-6 space-y-4">
              <div className="flex items-center gap-6 mb-6">
                <img
                  src="/images/1730123583060.jpeg"
                  alt="Luis Rodrigo Lima"
                  className="w-32 h-32 rounded-full object-cover border-4 border-primary/20 shadow-lg hover:border-primary/40 transition-colors"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-2">Luis Rodrigo Lima Rodrigues</h3>
                  <p className="text-muted-foreground">Desenvolvedor Júnior</p>
                </div>
              </div>
              <p className="text-foreground/90 leading-relaxed">
                Sou Luis Rodrigo Lima Rodrigues, programador com experiência prática no desenvolvimento de soluções tecnológicas voltadas para a educação e o bem-estar. Atualmente atuo na Globaltec Educacional, onde colaboro em projetos inovadores que integram software, hardware educacional e tecnologias interativas.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Iniciei minha trajetória profissional como estagiário de programação em uma clínica médica, desenvolvendo sistemas internos e ferramentas de melhoria da experiência dos pacientes. Além disso, tive uma passagem significativa como assistente administrativo, o que fortaleceu minha organização, proatividade e habilidades interpessoais.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Sou graduando em Engenharia de Software pela UNDB, com sólida base em linguagens como Dart (Flutter), Python e C++, e conhecimentos em HTML, CSS e JavaScript. Tenho também vivência no desenvolvimento de sistemas com foco em automação, integração de dispositivos IoT, e construção de interfaces interativas.
              </p>
              <div className="pt-4">
                <Button className="btn-primary flex items-center gap-2" onClick={() => window.open('/Luis Rodrigo Lima Rodrigues.pdf', '_blank')}>
                  <Download size={20} />
                  Baixar Currículo
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-primary flex items-center gap-2">
                  Habilidades Técnicas
                </h3>
                <div className="space-y-4">
                  <div className="glass-card p-4 hover:bg-primary/5 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl"></span>
                      <h4 className="font-medium text-primary">Desenvolvimento Mobile</h4>
                    </div>
                    <p className="text-muted-foreground">Flutter/Dart para criação de apps intuitivos e funcionais</p>
                  </div>
                  <div className="glass-card p-4 hover:bg-primary/5 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl"></span>
                      <h4 className="font-medium text-primary">Sistemas Embarcados</h4>
                    </div>
                    <p className="text-muted-foreground">Projetos com microcontroladores, sensores e automação</p>
                  </div>
                  <div className="glass-card p-4 hover:bg-primary/5 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl"></span>
                      <h4 className="font-medium text-primary">Web Development</h4>
                    </div>
                    <p className="text-muted-foreground">HTML, CSS, JavaScript e frameworks modernos</p>
                  </div>
                  <div className="glass-card p-4 hover:bg-primary/5 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl"></span>
                      <h4 className="font-medium text-primary">Integração de Sistemas</h4>
                    </div>
                    <p className="text-muted-foreground">Soluções com IoT e plataformas educacionais</p>
                  </div>
                  <div className="glass-card p-4 hover:bg-primary/5 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl"></span>
                      <h4 className="font-medium text-primary">Depuração e Testes</h4>
                    </div>
                    <p className="text-muted-foreground">Identificação e correção de bugs em software e hardware</p>
                  </div>
                  <div className="glass-card p-4 hover:bg-primary/5 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl"></span>
                      <h4 className="font-medium text-primary">Manutenção de Hardware</h4>
                    </div>
                    <p className="text-muted-foreground">Montagem e diagnóstico de componentes</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
