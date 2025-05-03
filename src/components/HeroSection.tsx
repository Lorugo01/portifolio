import { motion } from "framer-motion";
import { Monitor, Code2, Cpu, Settings2, Terminal, Laptop } from "lucide-react";
import { Link } from "react-scroll";

export const HeroSection = () => {
  return (
    <section id="hero" className="pt-24 min-h-screen flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background z-0">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_1200px_at_100%_200px,var(--primary),transparent)]"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_1200px_at_0%_800px,var(--secondary),transparent)]"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Luis Rodrigo Lima{" "}
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="inline-block text-primary"
                >
                  ✓
                </motion.span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground/90">
                Desenvolvedor de Software | Dart, JavaScript, Python, Java,
                C++, HTML, CSS
              </p>
            </div>
            
            <div className="space-y-2 text-muted-foreground/80">
              <p>São Luís, Maranhão, Brasil</p>
              <p>GlobalTec Educacional | UNDB - Unidade de Ensino Superior Dom Bosco</p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-6 py-2 shadow-lg cursor-pointer"
                >
                  Ver Projetos
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input/20 bg-background/50 hover:bg-accent hover:text-accent-foreground h-11 px-6 py-2 backdrop-blur-sm cursor-pointer"
                >
                  Vamos Conversar
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Animated Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full max-w-2xl mx-auto lg:ml-auto"
          >
            <div className="aspect-square relative bg-black/5 backdrop-blur-sm rounded-xl p-8 flex items-center justify-center">
              {/* Central Monitor */}
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute flex items-center justify-center"
              >
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <Monitor className="w-full h-full text-primary" strokeWidth={1.5} />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    className="absolute"
                  >
                    <Code2 className="w-16 h-16 text-primary/70" strokeWidth={1.5} />
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Terminal */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-8 left-8"
              >
                <Terminal className="w-10 h-10 text-primary/60" strokeWidth={1.5} />
              </motion.div>

              {/* Rotating Notebook */}
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute bottom-10 right-10"
              >
                <Laptop className="w-12 h-12 text-primary/40" strokeWidth={1.5} />
              </motion.div>

              {/* Rotating Gears */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute top-12 right-24"
              >
                <Settings2 className="w-16 h-16 text-primary/80" strokeWidth={1.5} />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-12 left-24"
              >
                <Settings2 className="w-20 h-20 text-primary/60" strokeWidth={1.5} />
              </motion.div>

              {/* CPU Icon */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 transform -translate-y-1/2 left-16"
              >
                <Cpu className="w-12 h-12 text-primary/70" strokeWidth={1.5} />
              </motion.div>

              {/* Pulsing Dots */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 right-6 w-2 h-2 rounded-full bg-primary"
              />
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-6 right-12 w-2 h-2 rounded-full bg-primary"
              />
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-6 right-18 w-2 h-2 rounded-full bg-primary"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/60 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-sm">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-5"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
};

