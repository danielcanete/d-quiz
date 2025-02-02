import { Button } from '@shared/components/ui/button';
import { cn } from '@shared/lib/utils';
import { Option } from '../../interfaces/quiz.interface';

interface QuizAnswerFeedbackProps {
  selectedAnswer: Option;
  onNext: () => void;
}

export const QuizAnswerFeedback: React.FC<QuizAnswerFeedbackProps> = ({ selectedAnswer, onNext }) => (
  <div className={cn(
    "mt-4 p-4 flex flex-col rounded-3xl gap-y-4",
    selectedAnswer.isCorrect ? "bg-green-100" : "bg-red-100"
  )}>
    <h4 className="text-lg text-center font-semibold">
      {selectedAnswer.isCorrect ? "💪 Correct!" : "💥 You missed!"}
    </h4>
    <Button onClick={onNext} className="w-full rounded-3xl">
      Next
    </Button>
  </div>
);
