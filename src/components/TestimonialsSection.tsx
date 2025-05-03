
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  image: string;
}

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Carlos Mendes",
      role: "CEO",
      company: "TechSolutions",
      text: "Trabalhar com esta profissional foi uma experiência incrível. Ela entendeu perfeitamente nossa visão e entregou um site que superou nossas expectativas. O tráfego e as conversões aumentaram significativamente desde o lançamento.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
      id: 2,
      name: "Juliana Costa",
      role: "Diretora de Marketing",
      company: "EcoVerde",
      text: "O redesign da nossa identidade visual transformou completamente a percepção da nossa marca. O processo foi colaborativo do início ao fim, com comunicação clara e entregas pontuais. Recomendo fortemente!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    },
    {
      id: 3,
      name: "Ricardo Alves",
      role: "Fundador",
      company: "StartupConnect",
      text: "Contratamos o desenvolvimento de nosso aplicativo e ficamos impressionados com a qualidade do código e a experiência do usuário. A atenção aos detalhes e o compromisso com a excelência são evidentes em cada aspecto do projeto.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    },
  ];

  // Autoplay functionality
  useEffect(() => {
    let interval: number | undefined;
    
    if (autoplay) {
      interval = window.setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, testimonials.length]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    // Temporarily pause autoplay when manually navigating
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 5000);
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container-section max-w-5xl">
        <h2 className="section-title text-center mx-auto mb-16 after:left-1/2 after:-translate-x-1/2">
          Depoimentos
        </h2>
        
        <div className="relative">
          {/* Testimonial cards */}
          <div className="overflow-hidden relative min-h-[400px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="absolute w-full"
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: index === activeIndex ? 1 : 0,
                  x: index === activeIndex ? 0 : 100,
                  zIndex: index === activeIndex ? 1 : 0,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="bg-card rounded-lg p-8 shadow-lg">
                  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                    <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-primary/20 mb-4">
                        <path d="M11.3 2.3c-.2-.2-.5-.3-.7-.3s-.6.1-.7.3L3.8 7.8c-.5.4-.8 1-.8 1.7v7c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-7c0-.7-.3-1.3-.8-1.7L16 2.3c-.2-.2-.5-.3-.8-.3s-.5.1-.7.3L12 4.8 9.5 2.3Z"></path>
                      </svg>
                      
                      <p className="text-muted-foreground italic mb-6">{testimonial.text}</p>
                      
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-primary w-8" : "bg-primary/30"
                }`}
                aria-label={`Depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
