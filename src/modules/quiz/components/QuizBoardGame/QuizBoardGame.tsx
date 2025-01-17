import { Option, ValidatedQuiz } from '@modules/quiz/interfaces/quiz.interface';
import { Card, CardContent, CardHeader } from '@shared/components/ui/card';
import { QuizQuestion } from '../QuizQuestion';

interface QuizBoardGameProps {
  quiz: ValidatedQuiz;
  currentQuestion: number;
  score: number;
  mistakes: number;
  showAnswer: boolean;
  selectedAnswer: Option | null;
  onAnswerSelect: (option: Option) => void;
  onNext: () => void;
}

export const QuizBoardGame: React.FC<QuizBoardGameProps> = ({
  quiz,
  score,
  mistakes,
  showAnswer,
  currentQuestion,
  selectedAnswer,
  onAnswerSelect,
  onNext
}) => (
  <Card className="max-w-2xl mx-auto">
    <CardHeader>
      <div className="flex justify-between text-lg">
        <span>Score: {score}</span>
        <span>Mistakes: {mistakes}</span>
      </div>
    </CardHeader>
    <CardContent>
      <QuizQuestion
        question={quiz.questions[currentQuestion]}
        showAnswer={showAnswer}
        selectedAnswer={selectedAnswer}
        onAnswerSelect={onAnswerSelect}
        onNext={onNext}
      />
    </CardContent>
  </Card>
);
