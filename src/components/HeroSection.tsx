import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import { useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { OrbitingCircles } from "./ui/orbiting-circles";
import { techLogo } from "@/lib/tech-logos";

const INNER_ORBIT = ["NestJS", "Prisma", "PostgreSQL", "TypeScript"];
const OUTER_ORBIT = ["React", "Next.js", "Flutter", "Docker", "Node.js", "ESP32"];

const OrbitLogo = ({ name }: { name: string }) => (
  <span
    title={name}
    className="flex h-full w-full items-center justify-center rounded-full border border-white/20 bg-white p-2.5 shadow-lg shadow-black/40"
  >
    <img src={techLogo(name)} alt={name} className="h-full w-full object-contain" />
  </span>
);

export const HeroSection = () => {
  const descriptionRef = useRef<{ start: () => void } | null>(null);
  const { t, language } = useLanguage();

  return (
    <section id="hero" className="pt-24 pb-10 min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background z-0">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_1200px_at_100%_200px,hsl(var(--primary)),transparent)]"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_1200px_at_0%_800px,hsl(var(--secondary)),transparent)]"></div>
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
                <Typewriter
                  key={language}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(t('hero.name'))
                      .callFunction(() => {
                        if (descriptionRef.current) {
                          descriptionRef.current.start();
                        }
                      })
                      .start();
                  }}
                  options={{
                    delay: 75,
                    cursor: '|',
                    wrapperClassName: 'text-primary'
                  }}
                />
              </h1>
              <div className="text-xl md:text-2xl text-muted-foreground/90">
                <Typewriter
                  key={language}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(t('hero.title'))
                      .callFunction(() => {
                        if (descriptionRef.current) {
                          descriptionRef.current.start();
                        }
                      })
                      .start();
                  }}
                  options={{
                    delay: 40,
                    cursor: '|',
                    wrapperClassName: 'text-muted-foreground/90'
                  }}
                />
              </div>
            </div>
            
            <div className="space-y-2 text-muted-foreground/80">
              <Typewriter
                key={language + '-location'}
                onInit={(typewriter) => {
                  typewriter.typeString(t('hero.location')).start();
                }}
                options={{
                  delay: 30,
                  cursor: '|',
                  wrapperClassName: 'text-muted-foreground/80',
                }}
              />
              <Typewriter
                key={language + '-institution'}
                onInit={(typewriter) => {
                  typewriter.typeString(t('hero.institution')).start();
                }}
                options={{
                  delay: 30,
                  cursor: '|',
                  wrapperClassName: 'text-muted-foreground/80',
                }}
              />
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
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={language}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.25 }}
                    >
                      {t('hero.projects')}
                    </motion.span>
                  </AnimatePresence>
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
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={language}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.25 }}
                    >
                      {t('hero.contact')}
                    </motion.span>
                  </AnimatePresence>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Foto com os logos reais da stack em órbita */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto flex h-[340px] w-[340px] items-center justify-center sm:h-[440px] sm:w-[440px] lg:ml-auto lg:mr-0"
          >
            <div aria-hidden className="absolute inset-10 rounded-full bg-primary/25 blur-3xl" />

            <div className="relative z-10">
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-primary via-secondary to-primary opacity-80 blur-md" />
              <img
                src="/images/foto-perfil.webp"
                alt="Luis Rodrigo Lima Rodrigues"
                className="relative h-36 w-36 rounded-full border-4 border-background object-cover sm:h-44 sm:w-44"
              />
            </div>

            <div className="absolute inset-0 origin-center scale-[0.77] sm:scale-100">
              <div className="relative flex h-full w-full items-center justify-center">
                <OrbitingCircles radius={130} duration={28} iconSize={48}>
                  {INNER_ORBIT.map((name) => (
                    <OrbitLogo key={name} name={name} />
                  ))}
                </OrbitingCircles>
                <OrbitingCircles radius={205} duration={40} iconSize={52} reverse>
                  {OUTER_ORBIT.map((name) => (
                    <OrbitLogo key={name} name={name} />
                  ))}
                </OrbitingCircles>
              </div>
            </div>

            {/* Selos flutuantes */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -left-2 top-10 z-20 hidden rounded-xl border border-white/10 bg-card/80 px-3 py-2 shadow-xl backdrop-blur-md sm:block"
            >
              <div className="font-heading text-lg font-bold text-primary">800+</div>
              <div className="text-xs text-muted-foreground">{t('about.highlightsShort.users')}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -right-2 bottom-12 z-20 hidden items-center gap-2 rounded-xl border border-white/10 bg-card/80 px-3 py-2 shadow-xl backdrop-blur-md sm:flex"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-medium text-foreground">{t('hero.badge')}</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="relative z-20 mt-10 hidden flex-col items-center gap-2 self-center text-muted-foreground/60 lg:flex"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={language}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.25 }}
            className="text-sm"
          >
            {t('hero.scroll')}
          </motion.span>
        </AnimatePresence>
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

