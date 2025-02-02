import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { 
  QuizSummaryDialog, 
  QuizSummaryDialogScore, 
  QuizSummaryDialogMistakes, 
  QuizSummaryDialogFooter 
} from './QuizSummaryDialog';

describe('QuizSummaryDialog', () => {
  const TEST_CONTENT = {
    TITLE: 'Quiz Complete! 🎉',
    DESCRIPTION: "Here's your quiz summary and results",
    SCORE_LABEL: 'Correct Answers:',
    MISTAKES_LABEL: 'Mistakes:',
    SCORE: '5',
    MISTAKES: '2',
    BUTTONS: {
      PLAY_AGAIN: 'Play Again',
      BACK_TO_QUIZZES: 'Back to Quizzes'
    }
  } as const;

  const renderQuizSummary = (isOpen: boolean = true) => {
    return render(
      <BrowserRouter>
        <QuizSummaryDialog open={isOpen} onOpenChange={() => {}}>
          <QuizSummaryDialogScore>
            {TEST_CONTENT.SCORE}
          </QuizSummaryDialogScore>
          <QuizSummaryDialogMistakes>
            {TEST_CONTENT.MISTAKES}
          </QuizSummaryDialogMistakes>
          <QuizSummaryDialogFooter>
            <button>{TEST_CONTENT.BUTTONS.PLAY_AGAIN}</button>
            <button>{TEST_CONTENT.BUTTONS.BACK_TO_QUIZZES}</button>
          </QuizSummaryDialogFooter>
        </QuizSummaryDialog>
      </BrowserRouter>
    );
  };

  describe('when dialog is open', () => {
    beforeEach(() => {
      renderQuizSummary(true);
    });

    it('should display header content', () => {
      expect(screen.getByText(TEST_CONTENT.TITLE)).toBeInTheDocument();
      expect(screen.getByText(TEST_CONTENT.DESCRIPTION)).toBeInTheDocument();
    });

    it('should display score information', () => {
      expect(screen.getByText(TEST_CONTENT.SCORE_LABEL)).toBeInTheDocument();
      expect(screen.getByText(TEST_CONTENT.SCORE)).toBeInTheDocument();
    });

    it('should display mistakes information', () => {
      expect(screen.getByText(TEST_CONTENT.MISTAKES_LABEL)).toBeInTheDocument();
      expect(screen.getByText(TEST_CONTENT.MISTAKES)).toBeInTheDocument();
    });

    it('should display action buttons', () => {
      const playAgainButton = screen.getByText(TEST_CONTENT.BUTTONS.PLAY_AGAIN);
      const backButton = screen.getByText(TEST_CONTENT.BUTTONS.BACK_TO_QUIZZES);

      expect(playAgainButton).toBeInTheDocument();
      expect(backButton).toBeInTheDocument();
    });
  });

  describe('when dialog is closed', () => {
    beforeEach(() => {
      renderQuizSummary(false);
    });

    it('should not display any content', () => {
      expect(screen.queryByText(TEST_CONTENT.TITLE)).not.toBeInTheDocument();
    });
  });
});
