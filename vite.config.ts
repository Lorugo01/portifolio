import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

/**
 * Em desenvolvimento, atende /api/contact com a mesma função usada em produção
 * (api/contact.ts), para testar o formulário sem precisar do `vercel dev`.
 */
function devApi(): Plugin {
  return {
    name: "dev-api",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/api/contact", async (req, res) => {
        let raw = "";
        for await (const chunk of req) raw += chunk;
        const request = Object.assign(req, { body: raw });
        const mod = await server.ssrLoadModule("/api/contact.ts");
        await mod.default(request, res);
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Variáveis do .env sem prefixo VITE_ (SMTP_*) ficam só no servidor.
  Object.assign(process.env, loadEnv(mode, process.cwd(), ""), process.env);

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), devApi()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash][extname]'
        }
      }
    }
  };
});
