import { Option, ValidatedQuiz } from '@modules/quiz/interfaces/quiz.interface';
import { Card, CardContent, CardHeader } from '@shared/components/ui/card';
import { QuizSentence } from '../QuizSentence';
import { QuizOptionList } from '../QuizOptionList';
import { QuizAnswerFeedback } from '../QuizAnswerFeedback';
import { QuizOptionButton } from '../QuizOptionButton';

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
  <Card className="max-w-2xl mx-auto rounded-3xl">
    <CardHeader>
      <div className="flex justify-between text-lg">
        <span>Score: {score}</span>
        <span>Mistakes: {mistakes}</span>
      </div>
    </CardHeader>
    <CardContent>
      <QuizSentence>
        {quiz.questions[currentQuestion].sentence}
      </QuizSentence>
      <QuizOptionList>
        {quiz.questions[currentQuestion].options.map((option, index) => (
          <QuizOptionButton
            key={index}
            option={option}
            showAnswer={showAnswer}
            selectedAnswerText={selectedAnswer?.text || null}
            onClick={onAnswerSelect}
          />
        ))}
      </QuizOptionList>
      {selectedAnswer && <QuizAnswerFeedback selectedAnswer={selectedAnswer} onNext={onNext} />}
    </CardContent>
  </Card>
);
