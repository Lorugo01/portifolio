import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { Languages } from "lucide-react";

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors"
    >
      <Languages className="w-4 h-4 text-primary" />
      <span className="text-sm font-medium">
        {language.toUpperCase()}
      </span>
    </motion.button>
  );
}; 