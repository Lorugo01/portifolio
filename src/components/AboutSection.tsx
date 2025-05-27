import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const skillCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  }),
  hover: {
    scale: 1.02,
    backgroundColor: "rgba(var(--primary), 0.1)",
    transition: {
      duration: 0.2
    }
  }
};

const imageVariants = {
  hover: {
    scale: 1.05,
    rotate: 5,
    borderColor: "rgba(var(--primary), 0.4)",
    transition: {
      duration: 0.3
    }
  }
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 300
    }
  },
  tap: {
    scale: 0.95
  }
};

const textHoverVariants = {
  hover: {
    color: "var(--primary)",
    x: 5,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

const paragraphHoverVariants = {
  initial: {
    backgroundSize: "0% 2px",
    backgroundPosition: "0 100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: "linear-gradient(to right, var(--primary), var(--primary))",
  },
  hover: {
    backgroundSize: "100% 2px",
    transition: {
      duration: 0.3
    }
  }
};

const descriptionHoverVariants = {
  hover: {
    color: "var(--foreground)",
    scale: 1.01,
    transition: {
      duration: 0.2
    }
  }
};

export const AboutSection = () => {
  const { t, tObject } = useLanguage();

  const skills = [
    tObject('about.skills.mobile') as { title: string; description: string },
    tObject('about.skills.embedded') as { title: string; description: string },
    tObject('about.skills.web') as { title: string; description: string },
    tObject('about.skills.integration') as { title: string; description: string },
    tObject('about.skills.debugging') as { title: string; description: string },
    tObject('about.skills.hardware') as { title: string; description: string },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements com animação */}
      <div className="absolute inset-0 bg-background/50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,var(--primary),transparent)]"
        />
        <motion.div
          initial={{ opacity: 0, backgroundPosition: "0px 0px" }}
          animate={{ opacity: 0.2, backgroundPosition: "24px 24px" }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-[linear-gradient(to_right,var(--primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--primary)_1px,transparent_1px)]"
          style={{ backgroundSize: '24px 24px' }}
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
            {t('about.title')}
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
            {t('about.subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <motion.div 
              className="glass-card p-6 space-y-4"
              whileHover={{ boxShadow: "0 10px 30px -15px rgba(0,0,0,0.2)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-6 mb-6">
                <motion.img
                  src="/images/1730123583060.jpeg"
                  alt="Luis Rodrigo Lima"
                  className="w-32 h-32 rounded-full object-cover border-4 border-primary/20 shadow-lg"
                  variants={imageVariants}
                  whileHover="hover"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <motion.h3 
                    className="text-2xl font-semibold text-primary mb-2 cursor-pointer"
                    whileHover={{
                      scale: 1.02,
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    Luis Rodrigo Lima Rodrigues
                  </motion.h3>
                  <motion.p 
                    className="text-muted-foreground cursor-pointer"
                    variants={textHoverVariants}
                    whileHover="hover"
                  >
                    {t('about.role')}
                  </motion.p>
                </motion.div>
              </div>
              {[
                t('about.paragraph1'),
                t('about.paragraph2'),
                t('about.paragraph3')
              ].map((text, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10, ...paragraphHoverVariants.initial }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover="hover"
                  variants={paragraphHoverVariants}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="text-foreground/90 leading-relaxed cursor-pointer"
                >
                  {text}
                </motion.p>
              ))}
              <motion.div 
                className="pt-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button 
                    className="btn-primary flex items-center gap-2" 
                    onClick={() => window.open('/Luis Rodrigo Lima Rodrigues.pdf', '_blank')}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <Download size={20} />
                    </motion.div>
                    {t('about.downloadCV')}
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="glass-card">
              <CardContent className="p-6">
                <motion.h3 
                  className="text-xl font-semibold mb-6 text-primary flex items-center gap-2 cursor-pointer"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{
                    scale: 1.05,
                    x: 5,
                    transition: { duration: 0.2 }
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {t('about.skills.title')}
                </motion.h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="glass-card p-4 cursor-pointer"
                      variants={skillCardVariants}
                      initial="hidden"
                      whileInView="visible"
                      whileHover="hover"
                      custom={index}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <motion.span 
                          className="w-2 h-2 rounded-full bg-primary"
                          whileHover={{ scale: 1.5 }}
                        />
                        <motion.h4 
                          className="font-medium text-primary"
                          variants={textHoverVariants}
                          whileHover="hover"
                        >
                          {skill.title}
                        </motion.h4>
                      </div>
                      <motion.p 
                        className="text-muted-foreground"
                        variants={descriptionHoverVariants}
                        whileHover="hover"
                      >
                        {skill.description}
                      </motion.p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
