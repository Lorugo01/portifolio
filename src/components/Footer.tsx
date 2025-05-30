import { Link } from 'react-scroll';
import { useLanguage } from '../contexts/LanguageContext';
import { AnimatePresence, motion } from 'framer-motion';

const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: t('nav.home'), to: 'hero' },
    { name: t('nav.about'), to: 'about' },
    { name: t('nav.projects'), to: 'projects' },
    { name: t('nav.services'), to: 'services' },
    { name: t('nav.contact'), to: 'contact' },
  ];
  
  const socialLinks = [
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/luisrodrigolima/' },
    { name: 'GitHub', icon: 'github', url: 'https://github.com/Lorugo01' },
    { name: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/lorugolabs/' },
  ];

  return (
    <footer className="bg-card py-12">
      <div className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Logo and description */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-primary">Luis </span>
              <span>Rodrigo</span>
            </div>
            <p className="text-muted-foreground mb-6">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={language + '-footer-description'}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  {t('footer.description')}
                </motion.span>
              </AnimatePresence>
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-${link.icon}`}>
                    {link.icon === 'linkedin' && (
                      <>
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </>
                    )}
                    {link.icon === 'github' && (
                      <>
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3.5 1.5a13.25 13.25 0 0 0-7 0C5 2 4 2 4 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 3 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.5 2-5-2-7-2"></path>
                      </>
                    )}
                    {link.icon === 'instagram' && (
                      <>
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </>
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={language + '-footer-quickLinks'}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  {t('footer.quickLinks')}
                </motion.span>
              </AnimatePresence>
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="text-muted-foreground hover:text-primary cursor-pointer transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={language + '-footer-contactTitle'}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  {t('footer.contactTitle')}
                </motion.span>
              </AnimatePresence>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-0.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="text-muted-foreground font-medium">{t('contact.phone')}:</span>
                <span className="text-muted-foreground">+55 (98) 98555-5475</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-0.5">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span className="text-muted-foreground font-medium">{t('contact.email')}:</span>
                <span className="text-muted-foreground">luisrodrigo2@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-0.5">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-muted-foreground font-medium">{t('contact.address')}:</span>
                <span className="text-muted-foreground">São Luis, MA - Brasil</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={language + '-footer-copyright'}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25 }}
              >
                {t('footer.copyright').replace('{year}', currentYear.toString())}
              </motion.span>
            </AnimatePresence>
          </p>
          <p className="text-muted-foreground text-sm mt-2 sm:mt-0">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={language + '-footer-designBy'}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25 }}
              >
                {t('footer.designBy')}
              </motion.span>
            </AnimatePresence>
            <span className="text-primary"> Luis Rodrigo</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
