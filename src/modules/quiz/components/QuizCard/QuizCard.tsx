import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle } from '@shared/components/ui/card';
import { Quiz } from '@modules/quiz/interfaces/quiz.interface';
import { appRoutes } from '@shared/constants/routes.constant';

interface QuizCardProps {
  quiz: Quiz;
}

export const QuizCard: React.FC<QuizCardProps> = ({ quiz }) => (
  <Link to={appRoutes.quiz.replace(':slug', quiz.slug)}>
    <Card className="bg-white p-6 rounded-3xl shadow-lg hover:animate-card-hover w-full animate-fade-in delay-150 cursor-pointer hover:scale-105 transition-transform duration-200">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl xl:text-2xl text-primary">{quiz.title}</CardTitle>
      </CardHeader>
    </Card>
  </Link>
);
