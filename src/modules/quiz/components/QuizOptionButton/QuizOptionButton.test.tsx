import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { QuizOptionButton, QuizOptionButtonProps } from './QuizOptionButton';
import { Option } from '@modules/quiz/interfaces/quiz.interface';


describe('QuizOptionButton', () => {
  const TEST_DATA = {
    CORRECT_ANSWER: 'Option 1',
    INCORRECT_ANSWER: 'Option 2'
  };

  const MOCK_QUIZ = {
    CORRECT_OPTION: {
      text: TEST_DATA.CORRECT_ANSWER,
      isCorrect: true,
    } as Option,
    INCORRECT_OPTION: {
      text: TEST_DATA.INCORRECT_ANSWER,
      isCorrect: false,
    } as Option,
  };

  const renderQuizOption = (props: Partial<QuizOptionButtonProps> = {}) => {
    const defaultProps: QuizOptionButtonProps = {
      option: MOCK_QUIZ.CORRECT_OPTION,
      showAnswer: false,
      selectedAnswerText: null,
      onClick: vi.fn(),
      ...props,
    };
    return render(<QuizOptionButton {...defaultProps} />);
  };

  describe('basic rendering', () => {
    it('should render the option text correctly', () => {
      renderQuizOption();
      expect(screen.getByText(TEST_DATA.CORRECT_ANSWER)).toBeInTheDocument();
    });

    it('should call onClick when clicked', () => {
      const onClick = vi.fn();
      renderQuizOption({ onClick });
      fireEvent.click(screen.getByText(TEST_DATA.CORRECT_ANSWER));
      expect(onClick).toHaveBeenCalledWith(MOCK_QUIZ.CORRECT_OPTION);
    });

    it('should be disabled when showAnswer is true', () => {
      renderQuizOption({ showAnswer: true });
      expect(screen.getByText(TEST_DATA.CORRECT_ANSWER)).toBeDisabled();
    });
  });

  describe('styling', () => {
    it('should apply correct success styles when answer is correct', () => {
      renderQuizOption({ showAnswer: true });
      const button = screen.getByText(TEST_DATA.CORRECT_ANSWER);
      expect(button).toHaveClass('bg-green-500', 'hover:bg-green-600');
    });

    it('should apply correct error styles when answer is incorrect', () => {
      renderQuizOption({
        showAnswer: true,
        option: MOCK_QUIZ.INCORRECT_OPTION
      });
      const button = screen.getByText(TEST_DATA.INCORRECT_ANSWER);
      expect(button).toHaveClass('bg-red-500', 'hover:bg-red-600');
    });
  });

  describe('animations', () => {
    it('should apply shake animation for incorrect selected answer', () => {
      renderQuizOption({
        showAnswer: true,
        selectedAnswerText: TEST_DATA.INCORRECT_ANSWER,
        option: MOCK_QUIZ.INCORRECT_OPTION
      });
      const button = screen.getByText(TEST_DATA.INCORRECT_ANSWER);
      expect(button).toHaveClass('animate-shake', 'animate-twice', 'animate-ease-linear');
    });

    it('should apply rotate animation for correct selected answer', () => {
      renderQuizOption({
        showAnswer: true,
        selectedAnswerText: TEST_DATA.CORRECT_ANSWER,
        option: MOCK_QUIZ.CORRECT_OPTION
      });
      const button = screen.getByText(TEST_DATA.CORRECT_ANSWER);
      expect(button).toHaveClass('animate-rotate-y', 'animate-once');
    });
  });
});
