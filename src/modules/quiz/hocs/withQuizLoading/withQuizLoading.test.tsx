import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { withQuizLoading } from './withQuizLoading';
import type { Quiz, ValidatedQuiz } from '@modules/quiz/interfaces/quiz.interface';

describe('withQuizLoading HOC', () => {
  const MOCK_QUIZ = {
    id: 3,
    slug: "application-test",
    title: "Application test",
    questions: [
      {
        id: 1,
        sentence: "... a comparison",
        explanation: "make a comparison",
        options: [
          {
            isCorrect: false,
            text: "do"
          },
          {
            isCorrect: true,
            text: "make (true)"
          }
        ]
      },
      {
        id: 2,
        sentence: "... a complaint",
        explanation: "make a complaint",
        options: [
          {
            isCorrect: true,
            text: "make (true)"
          },
          {
            isCorrect: false,
            text: "do"
          }
        ]
      }
    ]
  } as ValidatedQuiz;

  const TEST_DATA = {
    MOCK_QUIZ,
    CURRENT_QUESTION: 1,
    ERROR_MESSAGE: 'Quiz not found'
  } as const;

  const MockComponent = ({ quiz, currentQuestion }: {
    quiz: ValidatedQuiz;
    currentQuestion: number;
  }) => (
    <div>
      <span>Quiz Title: {quiz.title}</span>
      <span>Current Question: {currentQuestion}</span>
    </div>
  );

  const WrappedComponent = withQuizLoading(MockComponent);

  const isLoadingComponentVisible = () => {
    expect(screen.getByTestId('loading-container')).toBeInTheDocument();
  };

  describe('when quiz is undefined (initial loading state)', () => {
    beforeEach(() => {
      render(
        <WrappedComponent
          quiz={undefined}
          currentQuestion={TEST_DATA.CURRENT_QUESTION}
        />
      );
    });

    it('should render loading component with correct structure', () => {
      isLoadingComponentVisible();
    });
  });

  describe('when currentQuestion is null', () => {
    beforeEach(() => {
      render(
        <WrappedComponent
          quiz={TEST_DATA.MOCK_QUIZ}
          currentQuestion={null}
        />
      );
    });

    it('should render loading component with correct structure', () => {
      isLoadingComponentVisible();
    });
  });

  describe('when quiz is null or invalid', () => {
    it('should render error message when quiz is null', () => {
      render(
        <WrappedComponent
          quiz={null}
          currentQuestion={TEST_DATA.CURRENT_QUESTION}
        />
      );

      expect(screen.getByText(TEST_DATA.ERROR_MESSAGE)).toBeInTheDocument();
    });

    it('should render error message when quiz has no questions', () => {
      const invalidQuiz: Quiz = {
        id: 1,
        slug: "application-test",
        title: 'Invalid Quiz',
        questions: undefined
      };

      render(
        <WrappedComponent
          quiz={invalidQuiz}
          currentQuestion={TEST_DATA.CURRENT_QUESTION}
        />
      );

      expect(screen.getByText(TEST_DATA.ERROR_MESSAGE)).toBeInTheDocument();
    });
  });

  describe('when quiz and currentQuestion are valid', () => {
    beforeEach(() => {
      render(
        <WrappedComponent
          quiz={TEST_DATA.MOCK_QUIZ}
          currentQuestion={TEST_DATA.CURRENT_QUESTION}
        />
      );
    });

    it('should render wrapped component with correct props', () => {
      expect(screen.getByText(`Quiz Title: ${TEST_DATA.MOCK_QUIZ.title}`)).toBeInTheDocument();
      expect(screen.getByText(`Current Question: ${TEST_DATA.CURRENT_QUESTION}`)).toBeInTheDocument();
    });

    it('should not render loading component', () => {
      const loadingContainer = screen.queryByTestId('loading-container');
      expect(loadingContainer).not.toBeInTheDocument();
    });
  });
});
