import { Option } from '@modules/quiz/interfaces/quiz.interface';
import { Button } from '@shared/components/ui/button';
import { cn } from '@shared/lib/utils';

export interface QuizOptionButtonProps {
  option: Option;
  showAnswer: boolean;
  selectedAnswerText: string | null;
  onClick: (option: Option) => void;
}

export const QuizOptionButton: React.FC<QuizOptionButtonProps> = ({
  option,
  showAnswer,
  selectedAnswerText,
  onClick
}) => (
  <Button
    variant="black"
    onClick={() => onClick(option)}
    disabled={showAnswer}
    className={cn(
      "text-lg p-4 rounded-3xl hover:animate-card-hover animate-fade-in delay-150 cursor-pointer hover:scale-105 transition-transform duration-200",
      showAnswer && option.isCorrect && "bg-green-500 hover:bg-green-600",
      showAnswer && !option.isCorrect && "bg-red-500 hover:bg-red-600",
      showAnswer && selectedAnswerText === option.text && !option.isCorrect && "animate-shake animate-twice animate-ease-linear",
      showAnswer && selectedAnswerText === option.text && option.isCorrect && "animate-rotate-y animate-once",
    )}
  >
    {option.text}
  </Button>
);
