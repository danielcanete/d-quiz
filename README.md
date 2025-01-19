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

## Tech Stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Bun](https://bun.sh/) - JavaScript runtime & package manager

## Project Structure

```
d-quiz
├─ .eslintrc.cjs
├─ .gitignore
├─ README.md
├─ bun.lockb
├─ components.json
├─ index.html
├─ lib
│  └─ utils.ts
├─ netlify.toml
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ data
│  │  ├─ do-or-make.json
│  │  ├─ quiz-list.json
│  │  ├─ regular-or-irregular-verbs.json
│  │  └─ test.json
│  └─ vite.svg
├─ src
│  ├─ App.tsx
│  ├─ main.tsx
│  ├─ modules
│  │  └─ quiz
│  │     ├─ components
│  │     │  ├─ QuizBoardGame
│  │     │  │  ├─ QuizBoardGame.tsx
│  │     │  │  └─ index.ts
│  │     │  ├─ QuizCard
│  │     │  │  ├─ QuizCard.tsx
│  │     │  │  └─ index.ts
│  │     │  ├─ QuizGameHeader
│  │     │  │  ├─ QuizGameHeader.tsx
│  │     │  │  └─ index.ts
│  │     │  ├─ QuizGrid
│  │     │  │  ├─ QuizGrid.tsx
│  │     │  │  └─ index.ts
│  │     │  ├─ QuizQuestion
│  │     │  │  ├─ QuizQuestion.tsx
│  │     │  │  └─ index.ts
│  │     │  ├─ QuizSummaryDialog
│  │     │  │  ├─ QuizSummaryDialog.tsx
│  │     │  │  └─ index.ts
│  │     │  └─ index.ts
│  │     ├─ hocs
│  │     │  ├─ index.ts
│  │     │  └─ withQuizLoading
│  │     │     ├─ index.ts
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
│  │  │     ├─ dialog.tsx
│  │  │     ├─ separator.tsx
│  │  │     └─ sonner.tsx
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

2. Run development server:

```bash
git clone https://github.com/danielcanete/quiz-game.git
cd d-quiz
```

3. Build for production:

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
