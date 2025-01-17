import { QuizGrid } from '@modules/quiz/components';
import { useQuizList } from '@modules/quiz/hooks';
import { withLoadingAndError } from '@shared/hocs';

export default function QuizListPage() {
  
  const { quizList, loading, error } = useQuizList();
  
  const EnhancedQuizGrid = withLoadingAndError(QuizGrid);

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary animate-wiggle animate-once">Quiz Game</h1>
      <EnhancedQuizGrid 
        quizzes={quizList} 
        loading={loading} 
        error={error} 
      />
    </main>
  )
}
