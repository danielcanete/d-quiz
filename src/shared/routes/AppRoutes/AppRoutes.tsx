import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { appRoutes } from "@shared/constants/routes.constant";
import { FullPageLoading } from "@shared/components/FullPageLoading";

// Layouts
const MainLayout = lazy(() => import('@shared/layouts/MainLayout'));
// Pages
const QuizListPage = lazy(() => import('@pages/QuizListPage'));
const QuizPage = lazy(() => import('@pages/QuizPage'));

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<FullPageLoading />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path={appRoutes.listQuiz} element={<QuizListPage />} />
            <Route path={appRoutes.quiz} element={<QuizPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
