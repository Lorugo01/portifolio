import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { techLogo } from "@/lib/tech-logos";
import { useLanguage } from "../contexts/LanguageContext";
import { SpotlightCard } from "./ui/spotlight-card";

type Service = { title: string; description: string; features: string[] };

const SERVICES: { key: string; logos: string[] }[] = [
  { key: "services.web", logos: ["NestJS", "React", "PostgreSQL"] },
  { key: "services.automation", logos: ["Prisma", "PostgreSQL", "React"] },
  { key: "services.mobile", logos: ["Flutter", "Dart"] },
  { key: "services.education", logos: ["Flutter", "React", "ESP32"] },
  { key: "services.iot", logos: ["ESP32", "Arduino", "C++"] },
  { key: "services.infra", logos: ["Docker", "Caddy", "Nginx", "Linux / VPS"] },
];

export const ServicesSection = () => {
  const { t, tObject, language } = useLanguage();

  return (
    <section id="services" className="relative overflow-hidden py-20 md:py-28">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_700px_at_50%_0px,hsl(var(--primary)/0.12),transparent)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" key={language}>
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title after:left-1/2 after:-translate-x-1/2">{t("services.title")}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{t("services.subtitle")}</p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ key, logos }, index) => {
            const service = tObject(key) as Service;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              >
                <SpotlightCard className="flex h-full flex-col p-7">
                  <div className="mb-5 flex gap-2">
                    {logos.map((name) => (
                      <span
                        key={name}
                        title={name}
                        className="flex h-11 w-11 items-center justify-center rounded-xl bg-white p-2 shadow-md shadow-black/30"
                      >
                        <img src={techLogo(name)} alt={name} className="h-full w-full object-contain" loading="lazy" />
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                  <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground/85">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
