# Quiz Game Application

A React-based interactive quiz application that allows users to test their knowledge through various quiz categories.

Demo: https://unrivaled-moxie-9baed1.netlify.app/

## Features

- 🎯 Multiple quiz categories
- ✨ Interactive UI with animations
- 📱 Responsive design
- 🎮 Score tracking
- 🔄 Play again functionality
- 🌐 SPA (Single Page Application)
- 🎨 Modern UI using shadcn/ui components
- 🎭 Tailwind CSS for styling

## Tech stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Bun](https://bun.sh/) - JavaScript runtime & package manager

## Project summary structure

```
d-quiz
├─ .eslintrc.cjs
├─ ...
├─ cypress
│  ├─ e2e
│  │  └─ quizFlow.cy.ts
│  └─ support
│     ├─ commands.ts
│     └─ e2e.ts
├─ cypress.config.ts
├─ index.html
├─ netlify.toml
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ data
│  │  ├─ application-test.json 
│  │  ├─ main.json
│  │  └─ quiz-list.json
│  └─ images
│     ├─ bg.avif
│     └─ d-quiz_logo.svg
├─ scripts
│  ├─ generateQuizzes.ts
│  └─ removeQuizzes.ts
├─ src
│  ├─ App.tsx
│  ├─ main.tsx
│  ├─ modules
│  │  └─ quiz
│  │     ├─ components
│  │     │  ├─ QuizAnswerFeedback
│  │     │  │  ├─ QuizAnswerFeedback.test.tsx
│  │     │  │  ├─ QuizAnswerFeedback.tsx
│  │     │  │  └─ index.ts
│  │     │  ├─ QuizBoardGame
│  │     │  │  ├─ QuizBoardGame.tsx
│  │     │  │  └─ index.ts
│  │     │  ├─ QuizCard
│  │     │  │  ├─ QuizCard.test.tsx
│  │     │  │  ├─ QuizCard.tsx
│  │     │  │  └─ index.ts
│  │     │  ├─ QuizGameHeader
│  │     │  │  ├─ QuizGameHeader.test.tsx
│  │     │  │  ├─ QuizGameHeader.tsx
│  │     │  │  └─ index.ts
│  │     │  ├─ QuizOptionButton
│  │     │  │  ├─ QuizOptionButton.test.tsx
│  │     │  │  ├─ QuizOptionButton.tsx
│  │     │  │  └─ index.ts
│  │     │  ├─ ...
│  │     │  └─ index.ts
│  │     ├─ hocs
│  │     │  ├─ index.ts
│  │     │  └─ withQuizLoading
│  │     │     ├─ index.ts
│  │     │     ├─ withQuizLoading.test.tsx
│  │     │     └─ withQuizLoading.tsx
│  │     ├─ hooks
│  │     │  ├─ index.ts
│  │     │  ├─ useQuizGame
│  │     │  │  ├─ index.ts
│  │     │  │  └─ useQuizGame.tsx
│  │     │  └─ useQuizList
│  │     │     ├─ index.ts
│  │     │     └─ useQuizList.ts
│  │     └─ interfaces
│  │        └─ quiz.interface.ts
│  ├─ pages
│  │  ├─ QuizListPage.tsx
│  │  └─ QuizPage.tsx
│  ├─ shared
│  │  ├─ components
│  │  │  ├─ FullPageLoading
│  │  │  │  ├─ FullPageLoading.tsx
│  │  │  │  └─ index.ts
│  │  │  └─ ui
│  │  │     ├─ button.tsx
│  │  │     ├─ card.tsx
│  │  │     ├─ ...
│  │  ├─ constants
│  │  │  └─ routes.constant.ts
│  │  ├─ hocs
│  │  │  ├─ index.ts
│  │  │  └─ withLoadingAndError
│  │  │     ├─ index.ts
│  │  │     └─ withLoadingAndError.tsx
│  │  ├─ layouts
│  │  │  └─ MainLayout.tsx
│  │  ├─ lib
│  │  │  └─ utils.ts
│  │  ├─ routes
│  │  │  ├─ AppRoutes
│  │  │  │  ├─ AppRoutes.tsx
│  │  │  │  └─ index.ts
│  │  │  └─ index.ts
│  │  └─ styles
│  │     └─ index.css
│  ├─ test
│  │  └─ setup.ts
│  └─ vite-env.d.ts
├─ tailwind.config.js
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts
```

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your system
- Node.js 18+ (for certain dependencies)

### Installation

1. Clone the repository
```bash
git clone https://github.com/danielcanete/quiz-game.git
cd d-quiz
```

### Deployment
This project is configured for deployment on Netlify. The netlify.toml file includes the necessary configuration.

Available Scripts

`bun dev` - Start development server

`bun run build` - Build for production

`bun run lint` - Run ESLint

### Scripts

- **dev**: Start the application in development mode  
- **build**: Compile TypeScript and build the application for production  
- **lint**: Run ESLint to check for code style issues  
- **preview**: Preview the built application  
- **vitest:single**: Run tests once  
- **vitest:watch**: Run tests in watch mode  
- **vitest:open**: Open Vitest’s interactive UI  
- **cy:open**: Open Cypress’s interactive UI  
- **cy:2t2**: Run Cypress tests in headless mode  
- **quizzes:generate**: Generate quizzes using "generateQuizzes.ts"  
- **quizzes:remove**: Remove generated quizzes with "removeQuizzes.ts"
