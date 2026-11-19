/**
 * Logos oficiais das tecnologias, salvos em public/tech.
 * Fonte: Devicon (devicon@2.16.0) e Simple Icons (simple-icons@13.21.0, arquivos "si-").
 * Itens sem logo próprio (conceitos como SSE ou APIs REST) aparecem só com o nome.
 */
const LOGOS: Record<string, string> = {
  "NestJS": "nestjs.svg",
  "Node.js": "nodejs.svg",
  "TypeScript": "typescript.svg",
  "Prisma": "prisma.svg",
  "PostgreSQL": "postgresql.svg",
  "SQL": "azuresqldatabase.svg",
  "Swagger": "swagger.svg",
  "Meilisearch": "si-meilisearch.svg",
  "React": "react.svg",
  "Next.js": "nextjs.svg",
  "Vite": "vitejs.svg",
  "Tailwind CSS": "tailwindcss.svg",
  "TanStack Query": "si-reactquery.svg",
  "Zod": "si-zod.svg",
  "Dart": "dart.svg",
  "Flutter": "flutter.svg",
  "Python": "python.svg",
  "Java": "java.svg",
  "Kotlin": "kotlin.svg",
  "C++": "cplusplus.svg",
  "JWT": "si-jsonwebtokens.svg",
  "OAuth": "oauth.svg",
  "Docker": "docker.svg",
  "Docker Compose": "docker.svg",
  "Caddy": "si-caddy.svg",
  "Nginx": "nginx.svg",
  "Linux / VPS": "linux.svg",
  "ESP32": "si-espressif.svg",
  "Arduino": "arduino.svg",
  "Git": "git.svg",
  "GitHub": "github.svg",
};

export function techLogo(name: string): string | undefined {
  const file = LOGOS[name];
  return file ? `/tech/${file}` : undefined;
}
