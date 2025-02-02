import { Quiz } from '@modules/quiz/interfaces/quiz.interface';
import { QuizCard } from '../QuizCard';

interface QuizGridProps {
  quizzes: Quiz[];
}

export const QuizGrid: React.FC<QuizGridProps> = ({ quizzes }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {quizzes.map((quiz) => <QuizCard key={quiz.id} quiz={quiz} />)}
  </div>
);
