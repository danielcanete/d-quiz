import { Link, useParams } from 'react-router-dom';
import { Button } from '@shared/components/ui/button';
import { appRoutes } from '@shared/constants/routes.constant';
import {
  QuizSummaryDialog,
  QuizSummaryDialogFooter,
  QuizSummaryDialogMistakes,
  QuizSummaryDialogScore,
  QuizBoardGame,
  QuizGameHeader
} from '@modules/quiz/components';
import { useQuizGame } from '@modules/quiz/hooks';
import { withQuizLoading } from '@modules/quiz/hocs';

export default function QuizPage() {
  const { slug } = useParams();
  const {
    quiz,
    currentQuestion,
    score,
    mistakes,
    showAnswer,
    selectedAnswer,
    showModal,
    handleAnswer,
    nextQuestion,
    restartQuiz,
    setShowModal
  } = useQuizGame(slug);

  const EnhancedQuizBoardGame = withQuizLoading(QuizBoardGame);

  return (
    <div className="container mx-auto p-4">
      <QuizGameHeader title={quiz?.title || "Quiz"} />

      <EnhancedQuizBoardGame
        quiz={quiz}
        score={score}
        mistakes={mistakes}
        currentQuestion={currentQuestion}
        showAnswer={showAnswer}
        selectedAnswer={selectedAnswer}
        onAnswerSelect={handleAnswer}
        onNext={nextQuestion}
      />

      <QuizSummaryDialog open={showModal} onOpenChange={setShowModal}>
        <QuizSummaryDialogScore>{score}</QuizSummaryDialogScore>
        <QuizSummaryDialogMistakes>{mistakes}</QuizSummaryDialogMistakes>
        <QuizSummaryDialogFooter>
          <Button onClick={restartQuiz} className="px-6">
            Play Again
          </Button>
          <Button variant="outline" asChild>
            <Link to={appRoutes.listQuiz}>
              Back to Quizzes
            </Link>
          </Button>
        </QuizSummaryDialogFooter>
      </QuizSummaryDialog>
    </div>
  );
}
