import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { SpotlightCard } from "./ui/spotlight-card";

type Text = { pt: string; en: string };

interface Role {
  title: Text;
  period: Text;
  current?: boolean;
  bullets: { pt: string[]; en: string[] };
}

interface Entry {
  kind: "work" | "education";
  org: string;
  place: Text;
  period: Text;
  roles: Role[];
}

/** Conteúdo do currículo (PT e EN), do mais recente ao mais antigo. */
const ENTRIES: Entry[] = [
  {
    kind: "work",
    org: "Globaltec Educacional",
    place: { pt: "São Luís - MA", en: "São Luís, Brazil" },
    period: { pt: "fev 2024 - atual", en: "Feb 2024 - present" },
    roles: [
      {
        title: { pt: "Supervisor de Departamento", en: "Department Supervisor" },
        period: { pt: "nov 2025 - atual", en: "Nov 2025 - present" },
        current: true,
        bullets: {
          pt: [
            "Liderança das equipes de aplicações: arquitetura, boas práticas, testes e deploy.",
            "ERP Globaltec (NestJS, Prisma, PostgreSQL e React) com 12 módulos e redução estimada de esforço de 62% em RH e ponto, 54% em relatórios e 52% em compras e estoque.",
            "Login único (SSO) para 7 aplicações com JWT RS256 e JWKS, e plataforma Global One integrada ao ERP.",
            "Assistente de IA com voz (Teca.ia, Flutter) e IoT com ESP32 nos armários inteligentes BYLAB.",
            "Máquinas virtuais, servidores e deploy com Docker, Caddy e Nginx.",
          ],
          en: [
            "Lead the applications teams: architecture, best practices, testing, deployment.",
            "Globaltec ERP (NestJS, Prisma, PostgreSQL, React) with 12 modules and an estimated effort reduction of 62% in HR and time tracking, 54% in reporting and 52% in purchasing and inventory.",
            "Single sign-on (SSO) for 7 applications with JWT RS256 and JWKS, plus the Global One platform integrated with the ERP.",
            "Voice AI assistant (Teca.ia, Flutter) and ESP32 IoT for the BYLAB smart lockers.",
            "Virtual machines, servers and deployment with Docker, Caddy and Nginx.",
          ],
        },
      },
      {
        title: { pt: "Auxiliar de Programação", en: "Programming Assistant" },
        period: { pt: "out 2024 - nov 2025", en: "Oct 2024 - Nov 2025" },
        bullets: {
          pt: [
            "Aplicativos educacionais em Flutter: gestão de turmas, desempenho acadêmico e comunicação entre professores, alunos e gestores.",
            "Dashboards analíticos, monitoramento em tempo real e aplicações gamificadas.",
            "Hardware educacional: kits de robótica, dispositivos interativos e ferramentas baseadas em IoT.",
          ],
          en: [
            "Educational Flutter apps: class management, academic performance and communication between teachers, students and staff.",
            "Analytics dashboards, real-time monitoring and gamified applications.",
            "Educational hardware: robotics kits, interactive devices and IoT-based tools.",
          ],
        },
      },
      {
        title: { pt: "Estagiário de TI", en: "IT Intern" },
        period: { pt: "fev 2024 - set 2024", en: "Feb 2024 - Sep 2024" },
        bullets: {
          pt: ["Desenvolvimento de software e aplicações em Dart/Flutter."],
          en: ["Software and application development in Dart/Flutter."],
        },
      },
    ],
  },
  {
    kind: "work",
    org: "Instituto Ruy Palhano",
    place: { pt: "São Luís - MA", en: "São Luís, Brazil" },
    period: { pt: "fev 2023 - jan 2024", en: "Feb 2023 - Jan 2024" },
    roles: [
      {
        title: { pt: "Estagiário de TI", en: "IT Intern" },
        period: { pt: "fev 2023 - jan 2024", en: "Feb 2023 - Jan 2024" },
        bullets: {
          pt: [
            "Sistemas internos para gestão de pacientes, consultas e prontuários eletrônicos.",
            "Ferramentas de agendamento online e check-in digital para pacientes.",
          ],
          en: [
            "Internal systems for patients, appointments and electronic health records.",
            "Online scheduling and digital patient check-in tools.",
          ],
        },
      },
    ],
  },
  {
    kind: "work",
    org: "Gelo Cristal",
    place: { pt: "São Luís - MA", en: "São Luís, Brazil" },
    period: { pt: "set 2020 - jun 2022", en: "Sep 2020 - Jun 2022" },
    roles: [
      {
        title: { pt: "Auxiliar Administrativo", en: "Administrative Assistant" },
        period: { pt: "set 2020 - jun 2022", en: "Sep 2020 - Jun 2022" },
        bullets: { pt: [], en: [] },
      },
    ],
  },
  {
    kind: "education",
    org: "UNDB",
    place: { pt: "concluído em julho de 2026", en: "completed July 2026" },
    period: { pt: "2021 - 2026", en: "2021 - 2026" },
    roles: [
      {
        title: { pt: "Bacharelado em Engenharia de Software", en: "B.Sc. in Software Engineering" },
        period: { pt: "2021 - 2026", en: "2021 - 2026" },
        bullets: { pt: [], en: [] },
      },
    ],
  },
];

export const ExperienceSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="experience" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title after:left-1/2 after:-translate-x-1/2">{t("experience.title")}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t("experience.subtitle")}</p>
        </motion.div>

        <ol className="relative space-y-8 border-l border-white/10 pl-8 md:pl-12" key={language}>
          {/* Linha com degradê por cima da borda */}
          <span
            aria-hidden
            className="absolute -left-px top-0 h-full w-px bg-gradient-to-b from-primary via-primary/40 to-transparent"
          />
          {ENTRIES.map((entry, index) => {
            const Icon = entry.kind === "education" ? GraduationCap : Briefcase;
            const isCurrent = entry.roles.some((role) => role.current);
            return (
              <motion.li
                key={entry.org}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <span
                  className="absolute -left-[3.05rem] md:-left-[4.05rem] top-5 flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 bg-background text-primary shadow-[0_0_20px_hsl(var(--primary)/0.35)]"
                >
                  <Icon className="h-4 w-4" />
                </span>

                <SpotlightCard>
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold">{entry.org}</h3>
                      <p className="text-sm text-muted-foreground">{entry.place[language]}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {isCurrent && (
                        <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-medium text-emerald-400 ring-1 ring-emerald-500/30">
                          {t("experience.current")}
                        </span>
                      )}
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {entry.period[language]}
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 space-y-5">
                    {entry.roles.map((role) => (
                      <div key={role.title.pt + role.period.pt}>
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                          <h4 className="font-semibold text-primary">{role.title[language]}</h4>
                          {entry.roles.length > 1 && (
                            <span className="text-xs text-muted-foreground">{role.period[language]}</span>
                          )}
                        </div>
                        {role.bullets[language].length > 0 && (
                          <ul className="mt-2 space-y-1.5">
                            {role.bullets[language].map((bullet) => (
                              <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
