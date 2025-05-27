import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { AnimatePresence } from "framer-motion";

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
  const { t, tObject } = useLanguage();

  const services = [
    tObject('services.mobile'),
    tObject('services.education'),
    tObject('services.iot'),
    tObject('services.web'),
    tObject('services.automation'),
    tObject('services.support'),
  ] as Array<{
    title: string;
    description: string;
    features: string[];
  }>;

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
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
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={t('services.title')}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25 }}
              >
                {t('services.title')}
              </motion.span>
            </AnimatePresence>
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
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={t('services.subtitle')}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25 }}
              >
                {t('services.subtitle')}
              </motion.span>
            </AnimatePresence>
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
                            <AnimatePresence mode="wait" initial={false}>
                              <motion.span
                                key={service.title}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.25 }}
                              >
                                {service.title}
                              </motion.span>
                            </AnimatePresence>
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
                            <AnimatePresence mode="wait" initial={false}>
                              <motion.span
                                key={service.description}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.25 }}
                              >
                                {service.description}
                              </motion.span>
                            </AnimatePresence>
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
                                <AnimatePresence mode="wait" initial={false}>
                                  <motion.span
                                    key={feature}
                                    variants={textVariants}
                                    whileHover="hover"
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ duration: 0.25 }}
                                  >
                                    {feature}
                                  </motion.span>
                                </AnimatePresence>
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
