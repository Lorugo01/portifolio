import { motion } from "framer-motion";
import { ArrowUpRight, Download, Languages, MapPin, Sparkles } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { Marquee } from "./ui/marquee";
import { SpotlightCard } from "./ui/spotlight-card";
import { cn } from "@/lib/utils";
import { techLogo } from "@/lib/tech-logos";

type Skill = { title: string; description: string };
type Highlight = { value: string; label: string };
type StackGroup = { title: string; items: string[] };
type NowItem = { title: string; detail: string };

const LINKS = [
  { label: "GitHub", value: "github.com/Lorugo01", href: "https://github.com/Lorugo01", logo: "/tech/github.svg" },
  { label: "LinkedIn", value: "in/luisrodrigolima", href: "https://www.linkedin.com/in/luisrodrigolima/", logo: "/tech/linkedin.svg" },
  { label: "MaxRPG", value: "maxrpg.io", href: "https://maxrpg.io", logo: "/images/maxrpg-icon.png" },
];

/** Ordem do bento: o primeiro ocupa duas colunas e as linhas fecham em 3. */
const SKILLS: { key: string; logos: string[]; wide?: boolean }[] = [
  { key: "about.skills.backend", logos: ["NestJS", "Node.js", "TypeScript", "Prisma", "PostgreSQL"], wide: true },
  { key: "about.skills.auth", logos: ["JWT", "OAuth"] },
  { key: "about.skills.devops", logos: ["Docker", "Caddy", "Nginx", "Linux / VPS"] },
  { key: "about.skills.web", logos: ["React", "Next.js", "Tailwind CSS"] },
  { key: "about.skills.mobile", logos: ["Flutter", "Dart"] },
  { key: "about.skills.integration", logos: ["JWT", "ESP32", "PostgreSQL"] },
  { key: "about.skills.embedded", logos: ["ESP32", "Arduino", "C++"] },
  { key: "about.skills.leadership", logos: ["Git", "GitHub"] },
  { key: "about.skills.debugging", logos: ["TypeScript", "Python", "C++"] },
  { key: "about.skills.hardware", logos: ["Linux / VPS", "Docker", "Arduino"], wide: true },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: "easeOut" },
  }),
};

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-10 text-center">
    <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
    {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
  </div>
);

export const AboutSection = () => {
  const { t, tObject, language } = useLanguage();

  const highlights = tObject("about.highlights") as Highlight[];
  const nowItems = tObject("about.now.items") as NowItem[];
  const stackGroups = tObject("about.stack.groups") as StackGroup[];
  const spokenLanguages = tObject("about.languages.list") as string[];
  const softSkills = tObject("about.softSkills.list") as string[];
  const allTech = stackGroups.flatMap((group) => group.items);
  const cvHref =
    language === "en"
      ? "/Luis_Rodrigo_Lima_Rodrigues_-_Resume_EN.pdf"
      : "/Luis_Rodrigo_Lima_Rodrigues_-_Curriculo.pdf";

  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-28">
      {/* Fundo: brilho suave e grade pontilhada */}
      <div aria-hidden className="absolute inset-0 -z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_0px,hsl(var(--primary)/0.15),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" key={language}>
        {/* Título */}
        <motion.div
          className="mb-14 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="section-title after:left-1/2 after:-translate-x-1/2">{t("about.title")}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{t("about.subtitle")}</p>
        </motion.div>

        {/* Perfil + texto */}
        <div className="grid gap-6 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <SpotlightCard className="h-full p-8" contentClassName="flex h-full flex-col">
              <div className="flex items-center gap-5">
                <div className="relative shrink-0">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary to-secondary opacity-70 blur-sm" />
                  <img
                    src="/images/foto-perfil.webp"
                    alt="Luis Rodrigo Lima Rodrigues"
                    className="relative h-24 w-24 rounded-full border-2 border-background object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold leading-tight">Luis Rodrigo Lima Rodrigues</h3>
                  <p className="mt-1 font-medium text-primary">{t("about.role")}</p>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    {t("hero.location")}
                  </p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/10 bg-background/60 p-4"
                  >
                    <div className="font-heading text-2xl font-bold text-primary">{item.value}</div>
                    <div className="mt-1 text-xs leading-snug text-muted-foreground">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground/80">
                  {t("about.now.title")}
                </h4>
                <ul className="space-y-3">
                  {nowItems.map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <span className="relative mt-1.5 flex h-2.5 w-2.5 shrink-0">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      </span>
                      <div>
                        <p className="text-sm font-medium text-foreground">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground/80">
                  {t("about.links.title")}
                </h4>
                <div className="space-y-2">
                  {LINKS.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-3 rounded-xl border border-white/10 bg-background/60 p-2.5 transition-colors hover:border-primary/40 hover:bg-primary/5"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white p-1.5">
                        <img src={link.logo} alt="" className="h-full w-full object-contain" loading="lazy" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-medium text-foreground">{link.label}</span>
                        <span className="block truncate text-xs text-muted-foreground">{link.value}</span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-primary" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="min-h-8 flex-1" />
              <a
                href={cvHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex w-full items-center justify-center gap-2"
              >
                <Download className="h-4 w-4" />
                {t("about.downloadCV")}
              </a>
            </SpotlightCard>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            <SpotlightCard className="h-full p-8">
              <div className="space-y-5 text-[1.05rem] leading-relaxed text-muted-foreground">
                {["about.paragraph1", "about.paragraph2", "about.paragraph3"].map((key) => (
                  <p key={key}>{t(key)}</p>
                ))}
              </div>

              <div className="mt-8 grid gap-6 border-t border-white/10 pt-6 sm:grid-cols-2">
                <div>
                  <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground/80">
                    <Languages className="h-4 w-4 text-primary" />
                    {t("about.languages.title")}
                  </h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {spokenLanguages.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground/80">
                    <Sparkles className="h-4 w-4 text-primary" />
                    {t("about.softSkills.title")}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {softSkills.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-background/60 px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>

        {/* Habilidades em bento grid */}
        <div className="mt-24">
          <SectionHeading title={t("about.skills.title")} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map(({ key, logos, wide }, index) => {
              const skill = tObject(key) as Skill;
              return (
                <motion.div
                  key={key}
                  className={cn(wide && "lg:col-span-2")}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={index % 3}
                >
                  <SpotlightCard className="h-full">
                    <div className="mb-5 flex flex-wrap gap-2">
                      {logos.map((name) => (
                        <TechLogo key={name} name={name} />
                      ))}
                    </div>
                    <h4 className="text-lg font-semibold">{skill.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{skill.description}</p>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Tecnologias */}
        <div className="mt-24">
          <SectionHeading title={t("about.stack.title")} subtitle={t("about.stack.subtitle")} />

          <div className="mb-10 space-y-3">
            <Marquee className="[--duration:45s]">
              {allTech.slice(0, Math.ceil(allTech.length / 2)).map((tech) => (
                <TechPill key={tech} name={tech} />
              ))}
            </Marquee>
            <Marquee reverse className="[--duration:45s]">
              {allTech.slice(Math.ceil(allTech.length / 2)).map((tech) => (
                <TechPill key={tech} name={tech} />
              ))}
            </Marquee>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stackGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={index % 3}
              >
                <SpotlightCard className="h-full">
                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                    {group.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-background/60 py-1.5 pl-1.5 pr-3 text-sm text-foreground/90"
                      >
                        {techLogo(item) ? (
                          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white p-1">
                            <img src={techLogo(item)} alt="" className="h-full w-full object-contain" loading="lazy" />
                          </span>
                        ) : (
                          <span className="ml-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                        )}
                        {item}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TechPill = ({ name }: { name: string }) => {
  const logo = techLogo(name);
  return (
    <span className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-white/10 bg-card/70 py-2 pl-2 pr-4 text-sm font-medium text-foreground/90">
      {logo && (
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white p-1.5">
          <img src={logo} alt="" className="h-full w-full object-contain" loading="lazy" />
        </span>
      )}
      {name}
    </span>
  );
};

/** Logo real em um quadrado branco, para ficar legível no fundo escuro. */
const TechLogo = ({ name }: { name: string }) => {
  const logo = techLogo(name);
  if (!logo) return null;
  return (
    <span
      title={name}
      className="flex h-11 w-11 items-center justify-center rounded-xl bg-white p-2 shadow-md shadow-black/30"
    >
      <img src={logo} alt={name} className="h-full w-full object-contain" loading="lazy" />
    </span>
  );
};
