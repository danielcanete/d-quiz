import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { QuizAnswerFeedback } from './QuizAnswerFeedback';
import { Option } from '../../interfaces/quiz.interface';


describe('QuizAnswerFeedback', () => {
  type TestOption = Pick<Option, 'isCorrect' | 'text'>;

  const FEEDBACK_MESSAGES = {
    CORRECT: '💪 Correct!',
    INCORRECT: '💥 You missed!'
  } as const;

  const FEEDBACK_STYLES = {
    CORRECT: 'bg-green-100',
    INCORRECT: 'bg-red-100'
  } as const;

  const createTestAnswer = (isCorrect: boolean): TestOption => ({
    isCorrect,
    text: isCorrect ? 'Correct Answer' : 'Incorrect Answer'
  });

  const mockOnNext = vi.fn();

  beforeEach(() => {
    mockOnNext.mockReset();
  });

  const renderQuizFeedback = (isCorrect: boolean) => {
    const answer = createTestAnswer(isCorrect);
    return render(
      <QuizAnswerFeedback 
        selectedAnswer={answer as Option} 
        onNext={mockOnNext} 
      />
    );
  };

  describe('when answer is correct', () => {
    beforeEach(() => {
      renderQuizFeedback(true);
    });

    it('should display success message with correct styling', () => {
      const feedbackElement = screen.getByText(FEEDBACK_MESSAGES.CORRECT);
      expect(feedbackElement).toBeInTheDocument();
      expect(feedbackElement.parentElement).toHaveClass(FEEDBACK_STYLES.CORRECT);
    });

    it('should call onNext when Next button is clicked', () => {
      const nextButton = screen.getByRole('button', { name: /next/i });
      fireEvent.click(nextButton);
      expect(mockOnNext).toHaveBeenCalledTimes(1);
    });
  });

  describe('when answer is incorrect', () => {
    beforeEach(() => {
      renderQuizFeedback(false);
    });

    it('should display error message with incorrect styling', () => {
      const feedbackElement = screen.getByText(FEEDBACK_MESSAGES.INCORRECT);
      expect(feedbackElement).toBeInTheDocument();
      expect(feedbackElement.parentElement).toHaveClass(FEEDBACK_STYLES.INCORRECT);
    });

    it('should call onNext when Next button is clicked', () => {
      const nextButton = screen.getByRole('button', { name: /next/i });
      fireEvent.click(nextButton);
      expect(mockOnNext).toHaveBeenCalledTimes(1);
    });
  });
});
