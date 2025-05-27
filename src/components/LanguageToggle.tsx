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
      className="ml-4 flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors"
    >
      <Languages className="w-4 h-4 text-primary" />
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={language}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.25 }}
          className="text-sm font-medium"
        >
          {language.toUpperCase()}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}; 