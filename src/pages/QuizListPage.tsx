import { QuizGrid } from '@modules/quiz/components';
import { useQuizList } from '@modules/quiz/hooks';
import { withLoadingAndError } from '@shared/hocs';

export default function QuizListPage() {

  const { quizList, loading, error } = useQuizList();

  const EnhancedQuizGrid = withLoadingAndError(QuizGrid);

  return (
    <main className="min-h-screen flex flex-col">
      <div className="pt-16 px-6 pb-6 container mx-auto bg-primary text-white rounded-b-3xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-white animate-fade-down delay-150">Quiz Game</h1>
      </div>
      <div className="container mx-auto p-4 md:px-0">
        <EnhancedQuizGrid
          quizzes={quizList}
          loading={loading}
          error={error}
        />
      </div>
    </main>
  )
}
