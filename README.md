# Portfólio Profissional

## 📋 Sobre o Projeto

Este é um portfólio profissional moderno e responsivo, desenvolvido com React, TypeScript e Tailwind CSS. O projeto apresenta uma interface elegante e interativa para exibir projetos, habilidades e informações de contato.

## ✨ Funcionalidades

- Design responsivo e moderno
- Animações suaves com Framer Motion
- Formulário de contato integrado com EmailJS
- Seções para projetos, habilidades e informações de contato
- Links para redes sociais
- Versões em português e inglês (PT/EN)
- Otimizado para SEO

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [EmailJS](https://www.emailjs.com/)
- [Vite](https://vitejs.dev/)

## 🛠️ Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Conta no EmailJS (para o formulário de contato)

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Lorugo01/portifolio.git
cd portifolio
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto
   - Copie o conteúdo do arquivo `.env.example` (`cp .env.example .env`)
   - Preencha as variáveis com suas credenciais do EmailJS:
```env
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_EMAILJS_PUBLIC_KEY=sua_public_key
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

O projeto estará disponível em `http://localhost:8080`

## 📦 Build

Para criar uma versão de produção:

```bash
npm run build
# ou
yarn build
```

Os arquivos otimizados serão gerados na pasta `dist`

## 🔧 Configuração do EmailJS

1. Crie uma conta em [EmailJS](https://www.emailjs.com/)
2. Configure um serviço de email (Gmail, Outlook, etc)
3. Crie um template de email
4. Copie as credenciais (Service ID, Template ID e Public Key)
5. Adicione as credenciais no arquivo `.env`
6. O template deve usar as variáveis `{{name}}`, `{{email}}`, `{{message}}` e `{{title}}`

## 📱 Responsividade

O projeto é totalmente responsivo e otimizado para:
- Desktop
- Tablet
- Mobile

## 🎨 Personalização

Você pode personalizar:
- Cores no arquivo `tailwind.config.js` e nas variáveis de `src/index.css`
- Textos (PT/EN) em `src/contexts/LanguageContext.tsx`
- Projetos em `src/components/ProjectsSection.tsx`
- Conteúdo nas seções do portfólio
- Imagens e ícones
- Animações
- Estilos

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Luis Rodrigo Lima Rodrigues
- LinkedIn: [luisrodrigolima](https://www.linkedin.com/in/luisrodrigolima/)
- GitHub: [Lorugo01](https://github.com/Lorugo01)
- Instagram: [lorugolabs](https://www.instagram.com/lorugolabs/)

## 🙏 Agradecimentos

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [EmailJS](https://www.emailjs.com/)
- [Vite](https://vitejs.dev/)
