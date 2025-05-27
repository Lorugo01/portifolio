import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { Languages } from "lucide-react";

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="flex items-center justify-center gap-1.5 px-2.5 py-1.5 md:px-4 md:py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors text-xs md:text-sm"
    >
      <Languages className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={language}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.25 }}
          className="font-medium"
        >
          {language.toUpperCase()}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}; 