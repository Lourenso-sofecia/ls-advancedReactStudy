// src/data/studyWeeks.ts
export interface Task {
  day: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  link?: string;
}

export interface StudyWeek {
  id: string;
  title: string;
  tasks: Task[];
  relatedProjects?: Project[];
}

export const studyWeeks: StudyWeek[] = [
  {
    id: "week-1-fundamentos-react",
    title: "Semana 1 – Fundamentos do React",
    tasks: [
      {
        day: "Seg",
        description:
          "Introdução ao React, JSX, create-react-app, estrutura de arquivos",
      },
      { day: "Ter", description: "Props, useState, renderização condicional" },
      { day: "Qua", description: "Eventos, listas, key prop" },
      { day: "Qui", description: "Pequeno projeto: To-do List" },
      { day: "Sex", description: "Revisar projeto, refatorar com useState" },
      {
        day: "Sáb",
        description: "Revisão geral + flashcards (Anki ou Notion)",
      },
      { day: "Dom", description: "Descanso ou rever vídeos Rocketseat" },
    ],
    relatedProjects: [
      {
        id: "todo-list",
        title: "Projeto To-do List",
        description: "Pequeno projeto para praticar useState e listas.",
        link: "/study-schedule/week-1-fundamentos-react/todo-list",
      },
    ],
  },
  {
    id: "week-2-hooks-avancados",
    title: "Semana 2 – Hooks Avançados e Context API",
    tasks: [
      { day: "Seg", description: "useEffect, cleanup, dependências" },
      { day: "Ter", description: "useContext e Context API" },
      { day: "Qua", description: "Custom hooks e reutilização" },
      { day: "Qui", description: "useReducer para estados complexos" },
      { day: "Sex", description: "Projeto: contador com Context e hooks" },
      { day: "Sáb", description: "Revisão + desafios práticos" },
      { day: "Dom", description: "Estudo livre ou descanso" },
    ],
    relatedProjects: [
      {
        id: "Simular API com Loading (useEffect + useState)",
        title: "Simular API com Loading (useEffect + useState)",
        description:
          "Mini app com Simulação de API, loading useEffect e useState.",
        link: "https://github.com/seuusuario/theme-redux-app",
      },
    ],
  },
  {
    id: "week-3-gerenciamento-estado",
    title: "Semana 3 – Gerenciamento de Estado Global",
    tasks: [
      { day: "Seg", description: "Context API + exemplo de tema ou idioma" },
      {
        day: "Ter",
        description: "Redux Toolkit: slice, store, dispatch, selector",
      },
      { day: "Qua", description: "Redux: async thunk, chamada API" },
      { day: "Qui", description: "Zustand: instalação, store, persistência" },
      { day: "Sex", description: "Comparativo Context x Redux x Zustand" },
      { day: "Sáb", description: "Mini projeto: App com tema, login e Redux" },
      { day: "Dom", description: "Descanso ou revisão" },
    ],
    relatedProjects: [
      {
        id: "theme-login-redux-app",
        title: "App com Tema e Login (Redux)",
        description:
          "Mini app com troca de tema e autenticação com Redux Toolkit.",
        link: "https://github.com/seuusuario/theme-redux-app",
      },
    ],
  },
  {
    id: "week-4-performance-lazy-loading",
    title: "Semana 4 – Performance e Lazy Loading",
    tasks: [
      { day: "Seg", description: "React.memo + useCallback em profundidade" },
      { day: "Ter", description: "useMemo para listas pesadas" },
      { day: "Qua", description: "React.lazy, Suspense, split de rotas" },
      { day: "Qui", description: "Refatorar app para usar lazy loading" },
      { day: "Sex", description: "Teste de performance com DevTools" },
      { day: "Sáb", description: "Projeto: App com tabs otimizadas" },
      { day: "Dom", description: "Descanso" },
    ],
    relatedProjects: [
      {
        id: "tabs-performatic-app",
        title: "App com Tabs Otimizadas",
        description:
          "Projeto focado em performance com lazy loading e memoização.",
      },
    ],
  },
  {
    id: "week-5-tailwind-css",
    title: "Semana 5 – Tailwind CSS",
    tasks: [
      { day: "Seg", description: "Instalação, classes utilitárias básicas" },
      { day: "Ter", description: "Layouts flex/grid, responsividade" },
      { day: "Qua", description: "Componentes: botões, cards, inputs" },
      { day: "Qui", description: "Dark mode e variantes" },
      { day: "Sex", description: "Tailwind + animações e transições" },
      { day: "Sáb", description: "Recriar login + dashboard com Tailwind" },
      { day: "Dom", description: "Descanso" },
    ],
    relatedProjects: [
      {
        id: "tailwind-login-dashboard",
        title: "UI com Tailwind",
        description:
          "Tela de login e dashboard com Tailwind responsivo e dark mode.",
      },
    ],
  },
  {
    id: "week-6-react-hook-form",
    title: "Semana 6 – Formulários com React Hook Form",
    tasks: [
      { day: "Seg", description: "Conceitos e exemplos básicos" },
      { day: "Ter", description: "Integração com API (axios ou fetch)" },
      { day: "Qua", description: "Validação com Zod/Yup" },
      { day: "Qui", description: "Form multi-etapas" },
      { day: "Sex", description: "Controle de erros e feedback visual" },
      { day: "Sáb", description: "Projeto: cadastro completo com validação" },
      { day: "Dom", description: "Descanso" },
    ],
    relatedProjects: [
      {
        id: "form-cadastro-validado",
        title: "Formulário com Validação",
        description: "Cadastro com validação via react-hook-form + Zod.",
      },
    ],
  },
  {
    id: "week-7-testes",
    title: "Semana 7 – Testes com Jest + RTL + Cypress",
    tasks: [
      { day: "Seg", description: "Testes unitários com Jest" },
      {
        day: "Ter",
        description: "Teste de componentes com React Testing Library",
      },
      { day: "Qua", description: "Mock de hooks, props e chamadas" },
      { day: "Qui", description: "E2E com Cypress: setup e primeiros testes" },
      { day: "Sex", description: "Fluxo completo de teste (login, dashboard)" },
      { day: "Sáb", description: "Desafio: Teste 100% de um mini app" },
      { day: "Dom", description: "Descanso" },
    ],
    relatedProjects: [
      {
        id: "testes-mini-app",
        title: "Testes Automatizados",
        description: "Mini app 100% testado com Jest, RTL e Cypress.",
      },
    ],
  },
  {
    id: "week-8-projeto-final",
    title: "Semana 8 – Projeto Final + Deploy",
    tasks: [
      { day: "Seg", description: "Planejar o projeto: escopo, wireframe" },
      { day: "Ter", description: "Estrutura base: rotas, tema, layout" },
      { day: "Qua", description: "Estado + formulários + API" },
      { day: "Qui", description: "Tailwind + lazy loading + performance" },
      { day: "Sex", description: "Testes + melhorias finais" },
      { day: "Sáb", description: "Deploy no Vercel ou Netlify" },
      { day: "Dom", description: "Compartilhar no GitHub + LinkedIn ✅" },
    ],
    relatedProjects: [
      {
        id: "final-project",
        title: "Projeto Final",
        description: "App completo com tudo aprendido e deploy realizado.",
      },
    ],
  },
];
