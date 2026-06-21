<h1 align="center">
  <img width="64" alt="Logo do DevLinks" src="src/app/icon.png" />
  <br />
  <p>DevLinks</p>
  <p>
    <img src="https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js 16">
    <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript 5">
    <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4">
  </p>
</h1>

**DevLinks** é uma página pessoal de links desenvolvida com **Next.js**, **React**, **TypeScript** e **Tailwind CSS**. A aplicação centraliza o acesso ao portfólio, currículo, contato e redes sociais em uma interface responsiva com temas claro e escuro.

---

## 📸 Visualização do projeto

<p align="center">
  <img
    alt="Preview do Daniel Verissimo DevLinks"
    src="public/Thumbnail.png"
    width="900"
  />
</p>

---

## 🚀 Funcionalidades

| Funcionalidade | Descrição |
| --- | --- |
| 🌓 **Tema claro e escuro** | Alternância de tema com atualização das cores, avatar e imagem de fundo |
| 🔗 **Links profissionais** | Acesso rápido ao portfólio, LinkedIn e contato por e-mail |
| 📄 **Download do currículo** | Download direto do currículo em PDF |
| 🌐 **Redes sociais** | Links externos para GitHub, Instagram e LinkedIn |
| 📱 **Layout responsivo** | Interface adaptada para dispositivos móveis e desktops |
| ♿ **Acessibilidade** | Rótulos descritivos e estilos de foco para navegação por teclado |

---

## 🛠️ Tecnologias utilizadas

<div align="center">
  <img src="https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/TypeScript_5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/ESLint_9-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint">
</div>

---

## 📚 Conceitos aplicados

- Next.js com App Router
- Componentização com React
- TypeScript para tipagem dos componentes
- Tailwind CSS com tokens personalizados
- Tema claro e escuro com estado local
- Layout responsivo para mobile e desktop
- Otimização de imagens com `next/image`
- Assets estáticos servidos pela pasta `public`
- Links externos seguros com `noopener noreferrer`
- Download de arquivo PDF pelo navegador

---

## ▶️ Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) 20 ou superior
- npm

### Instalação

```bash
# Clone o repositório
git clone [URL_DO_REPOSITORIO](https://github.com/DanielVerissimo1/devLinks.git)

# Entre na pasta do projeto
cd devLinks

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Outros comandos

```bash
# Verificar o código com ESLint
npm run lint

# Verificar os tipos do TypeScript
npm run typecheck

# Gerar o build de produção
npm run build

# Executar o build de produção
npm start
```

---

## 📁 Arquitetura do projeto

```text
devLinks/
├── public/
│   ├── assets/
│   │   ├── figma/                   # Avatares e fundos dos temas
│   │   └── icons/                   # Ícones das redes sociais
│   ├── Daniel Verissimo - Font-End.pdf
│   └── Thumbnail.png                # Preview da aplicação
│
├── src/
│   ├── app/
│   │   ├── globals.css              # Estilos globais e tokens do tema
│   │   ├── icon.png                 # Ícone da aplicação
│   │   ├── layout.tsx               # Layout raiz e metadados
│   │   └── page.tsx                 # Página inicial
│   │
│   ├── components/
│   │   ├── sections/
│   │   │   ├── links-section.tsx
│   │   │   ├── profile-section.tsx
│   │   │   └── social-links-section.tsx
│   │   ├── ui/                      # Componentes reutilizáveis
│   │   └── devlinks-page.tsx        # Composição principal da página
│   │
│   ├── lib/
│   │   └── cn.ts                    # Utilitário para classes CSS
│   └── types/
│       └── theme.ts                 # Tipagem dos temas
│
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

---

## 👨‍💻 Autor

<p align="center">
  <img src="public/profile.jpg" width="100" alt="Daniel Verissimo" />
  <br />
  <strong>Daniel Verissimo</strong>
  <br />
  Desenvolvedor Front-End
</p>

<p align="center">
  <a href="https://linkedin.com/in/daniel-verissimo">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
  <a href="https://github.com/DanielVerissimo1">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
  <a href="https://daniel-verissimodev.vercel.app/">
    <img src="https://img.shields.io/badge/Portfólio-6366F1?style=for-the-badge&logo=vercel&logoColor=white" alt="Portfólio">
  </a>
  <a href="mailto:danielsantoss1300@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail">
  </a>
</p>

---

<p align="center">Feito por <strong>Daniel Verissimo</strong></p>
