import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle } from '@shared/components/ui/card';
import { Quiz } from '@modules/quiz/interfaces/quiz.interface';
import { appRoutes } from '@shared/constants/routes.constant';

interface QuizCardProps {
  quiz: Quiz;
}

export const QuizCard: React.FC<QuizCardProps> = ({ quiz }) => (
  <Link to={appRoutes.quiz.replace(':slug', quiz.slug)}>
    <Card className="hover:scale-105 transition-transform duration-200 cursor-pointer bg-secondary">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">{quiz.title}</CardTitle>
      </CardHeader>
    </Card>
  </Link>
);
