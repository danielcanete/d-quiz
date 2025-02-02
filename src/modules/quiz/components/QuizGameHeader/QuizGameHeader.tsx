import { Button } from '@shared/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { appRoutes } from '@shared/constants/routes.constant';

interface QuizHeaderProps {
  title: string;
}

export const QuizGameHeader: React.FC<QuizHeaderProps> = ({ title }) => (
  <div className="flex items-center justify-between mb-6 max-w-2xl mx-auto">
    <h1 className="text-2xl font-bold">{title}</h1>
    <Button variant="ghost" className="flex items-center gap-2" asChild>
      <Link to={appRoutes.listQuiz}>
        <ChevronLeft className="w-4 h-4" />
        Back to List
      </Link>
    </Button>
  </div>
);
