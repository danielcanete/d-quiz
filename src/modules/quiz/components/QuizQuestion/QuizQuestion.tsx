import { Option, Question } from '@modules/quiz/interfaces/quiz.interface';
import { Button } from '@shared/components/ui/button';
import { cn } from '@shared/lib/utils';

interface QuizQuestionProps {
  question: Question;
  showAnswer: boolean;
  selectedAnswer: Option | null;
  onAnswerSelect: (option: Option) => void;
  onNext: () => void;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  showAnswer,
  selectedAnswer,
  onAnswerSelect,
  onNext
}) => (
  <>
    <h2 className="text-2xl mb-4 rounded-md p-4 border-2">{question.sentence}</h2>
    <div className="grid grid-cols-2 gap-4">
      {question.options.map((option, index) => (
        <Button
          key={index}
          onClick={() => onAnswerSelect(option)}
          disabled={showAnswer}
          className={cn(
            "text-lg p-4",
            showAnswer && option.isCorrect && "bg-green-500 hover:bg-green-600",
            showAnswer && !option.isCorrect && "bg-red-500 hover:bg-red-600",
            showAnswer && selectedAnswer?.text === option.text && !option.isCorrect && "animate-shake animate-twice animate-ease-linear",
            showAnswer && selectedAnswer?.text === option.text && option.isCorrect && "animate-rotate-y animate-once",
          )}
        >
          {option.text}
        </Button>
      ))}
    </div>
    {showAnswer && (
      <div className={`mt-4 p-4 flex flex-col rounded-md gap-y-4 ${selectedAnswer?.isCorrect ? "bg-green-100" : "bg-red-100"}`}>
        <h4 className="text-lg text-center font-semibold">
          {selectedAnswer?.isCorrect ? "💪 Correct!" : "💥 You missed!"}
        </h4>
        <Button onClick={onNext} className="w-full">
          Next
        </Button>
      </div>
    )}
  </>
);
