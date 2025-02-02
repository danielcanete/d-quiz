import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { QuizGameHeader } from './QuizGameHeader';
import { appRoutes } from '@shared/constants/routes.constant';
import { Quiz } from '../../interfaces/quiz.interface';

describe('QuizGameHeader', () => {
  const MOCK_QUIZ = {
      id: 1,
      slug: 'test-quiz',
      title: 'Test Quiz',
    } as Quiz;

  const TEST_DATA = {
    MOCK_QUIZ,
    BACK_LINK_TEXT: /back to list/i
  } as const;

  const renderQuizHeader = (title: string) => {
    return render(
      <BrowserRouter>
        <QuizGameHeader title={title} />
      </BrowserRouter>
    );
  };

  describe('when rendered', () => {
    beforeEach(() => {
      renderQuizHeader(TEST_DATA.MOCK_QUIZ.title);
    });

    it('should display the quiz title correctly', () => {
      const titleElement = screen.getByText(TEST_DATA.MOCK_QUIZ.title);
      expect(titleElement).toBeInTheDocument();
    });

    it('should render back button with correct route', () => {
      const backLink = screen.getByRole('link', {
        name: TEST_DATA.BACK_LINK_TEXT
      });

      expect(backLink).toBeInTheDocument();
      expect(backLink).toHaveAttribute('href', appRoutes.listQuiz);
    });
  });
});
