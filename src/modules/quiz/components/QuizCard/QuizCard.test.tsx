import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { QuizCard } from './QuizCard';
import { Quiz } from '../../interfaces/quiz.interface';

describe('QuizCard', () => {
  const MOCK_QUIZ = {
    id: 1,
    slug: 'test-quiz',
    title: 'Test Quiz',
  } as Quiz;

  const renderQuizCard = (quiz: Quiz = MOCK_QUIZ) => {
    return render(
      <BrowserRouter>
        <QuizCard quiz={quiz} />
      </BrowserRouter>
    );
  };

  describe('rendering', () => {
    beforeEach(() => {
      renderQuizCard();
    });

    it('should display the quiz title', () => {
      const title = screen.getByText(MOCK_QUIZ.title);
      expect(title).toBeInTheDocument();
    });

    it('should link to the correct quiz page URL', () => {
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('href', `/quiz/${MOCK_QUIZ.slug}`);
    });
  });
});
