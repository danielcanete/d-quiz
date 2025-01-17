import { Quiz, ValidatedQuiz } from '@modules/quiz/interfaces/quiz.interface';

interface WithQuizLoadingProps {
  quiz: Quiz | null | undefined;
  currentQuestion: number | null;
}

type WithoutLoading<T> = Omit<T, 'quiz' | 'currentQuestion'>;

export function withQuizLoading<P extends { quiz: ValidatedQuiz, currentQuestion: number }>(
  WrappedComponent: React.ComponentType<P>
) {
  return function WithQuizLoadingComponent(
    props: WithoutLoading<P> & WithQuizLoadingProps
  ) {
    const { quiz, currentQuestion, ...rest } = props;

    if (typeof quiz === 'undefined') {
      return <div>Loading...</div>;
    }

    if (currentQuestion === null) {
      return <div>Loading...</div>;
    }

    if (quiz === null || !quiz.questions) {
      return <div>Quiz not found</div>;
    }

    const validatedQuiz = quiz as ValidatedQuiz;

    const componentProps = {
      ...rest,
      quiz: validatedQuiz,
      currentQuestion
    } as P;

    return <WrappedComponent {...componentProps} />;
  };
}
