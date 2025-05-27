import { FormEvent, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../contexts/LanguageContext';

// Variants para animações
const formVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
};

const inputVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3
    }
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2
    }
  },
  focus: {
    scale: 1.02,
    boxShadow: "0 0 0 2px var(--primary)",
    transition: {
      duration: 0.2
    }
  }
};

const contactInfoVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
};

const contactItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3
    }
  },
  hover: {
    scale: 1.03,
    x: 5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

const socialIconVariants = {
  hover: {
    scale: 1.2,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: {
    scale: 0.95
  }
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: {
    scale: 0.95
  }
};

const ContactSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
    loading: boolean;
  }>({
    submitted: false,
    success: false,
    message: '',
    loading: false
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Por favor, preencha todos os campos.',
        loading: false
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Por favor, forneça um email válido.',
        loading: false
      });
      return;
    }

    try {
      setFormStatus(prev => ({ ...prev, loading: true }));
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'lluisrodrigo2@gmail.com'
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
        loading: false
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Erro ao enviar mensagem. Por favor, tente novamente.',
        loading: false
      });
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      title: t('contact.phone'),
      info: "+55 (98) 98555-5475",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
      ),
      title: t('contact.email'),
      info: "lluisrodrigo2@gmail.com",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      title: t('contact.address'),
      info: "São Luis, MA - Brasil",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container-section">
        <motion.h2 
          className="section-title text-center mx-auto mb-16 after:left-1/2 after:-translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t('contact.title')}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-card rounded-lg p-8 shadow-md backdrop-blur-sm"
          >
            <motion.h3 
              className="text-xl font-semibold mb-6 text-primary"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {t('contact.sendMessage')}
            </motion.h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div variants={inputVariants}>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-primary/80">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-md border border-input bg-background/50 backdrop-blur-sm transition-all duration-300 focus:ring-2 focus:ring-primary focus:border-primary hover:scale-105"
                  placeholder={t('contact.placeholderName')}
                />
              </motion.div>
              
              <motion.div variants={inputVariants}>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-primary/80">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-md border border-input bg-background/50 backdrop-blur-sm transition-all duration-300 focus:ring-2 focus:ring-primary focus:border-primary hover:scale-105"
                  placeholder={t('contact.placeholderEmail')}
                />
              </motion.div>
              
              <motion.div variants={inputVariants}>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-primary/80">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-md border border-input bg-background/50 backdrop-blur-sm transition-all duration-300 min-h-[120px] focus:ring-2 focus:ring-primary focus:border-primary hover:scale-105"
                  placeholder={t('contact.placeholderMessage')}
                />
              </motion.div>
              
              <AnimatePresence>
              {formStatus.submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-3 rounded-md ${
                      formStatus.success 
                        ? 'bg-green-100/80 text-green-800 backdrop-blur-sm' 
                        : 'bg-red-100/80 text-red-800 backdrop-blur-sm'
                    }`}
                  >
                    {t(formStatus.message)}
                  </motion.div>
              )}
              </AnimatePresence>
              
              <motion.button 
                type="submit" 
                className="btn-primary w-full relative overflow-hidden group"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                disabled={formStatus.loading}
              >
                <motion.span
                  className="absolute inset-0 bg-primary/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10">
                {formStatus.loading ? t('contact.sending') : t('contact.send')}
                </span>
              </motion.button>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            variants={contactInfoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-xl font-semibold mb-6 text-primary"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {t('contact.infoTitle')}
            </motion.h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  variants={contactItemVariants}
                  whileHover="hover"
                  className="flex items-start space-x-4 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <motion.div 
                    className="bg-primary/10 p-3 rounded-lg"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      backgroundColor: "var(--primary)",
                      color: "white"
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <h4 className="font-medium text-primary/90">{item.title}</h4>
                    <p className="text-muted-foreground">{item.info}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div>
              <motion.h4 
                className="font-medium mb-4 text-primary/90"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {t('contact.socialTitle')}
              </motion.h4>
              <div className="flex space-x-4">
                {[
                  {
                    href: "https://www.linkedin.com/in/luisrodrigolima/",
                    label: "LinkedIn",
                    icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                    )
                  },
                  {
                    href: "https://github.com/Lorugo01",
                    label: "GitHub",
                    icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3.5 1.5a13.25 13.25 0 0 0-7 0C5 2 4 2 4 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 3 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.5 2-5-2-7-2"></path>
                  </svg>
                    )
                  },
                  {
                    href: "https://www.instagram.com/lorugolabs/",
                    label: "Instagram",
                    icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                    )
                  }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary/10 hover:bg-primary/20 text-primary w-10 h-10 rounded-full flex items-center justify-center transition-colors relative overflow-hidden group"
                    aria-label={social.label}
                    variants={socialIconVariants}
                    whileHover="hover"
                    whileTap="tap"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-primary/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="relative z-10">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
