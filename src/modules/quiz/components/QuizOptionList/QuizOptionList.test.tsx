import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { QuizOptionList } from './QuizOptionList';
import { ValidatedQuiz } from '../../interfaces/quiz.interface';

const TEST_DATA = {
  FIRST_SENTENCE: '... a comparison',
  SECOND_SENTENCE: '... a complaint',
  CORRECT_ANSWER_1: 'make (true)',
  INCORRECT_ANSWER_1: 'do',
};

const MOCK_QUIZ: ValidatedQuiz = {
  id: 1,
  slug: 'test-quiz',
  title: 'Test Quiz',
  questions: [
    {
      id: 1,
      sentence: TEST_DATA.FIRST_SENTENCE,
      explanation: 'make a comparison',
      options: [
        {
          isCorrect: false,
          text: TEST_DATA.INCORRECT_ANSWER_1
        },
        {
          isCorrect: true,
          text: TEST_DATA.CORRECT_ANSWER_1
        }
      ]
    },
    {
      id: 2,
      sentence: TEST_DATA.SECOND_SENTENCE,
      explanation: 'make a complaint',
      options: [
        {
          isCorrect: true,
          text: TEST_DATA.CORRECT_ANSWER_1
        },
        {
          isCorrect: false,
          text: TEST_DATA.INCORRECT_ANSWER_1
        }
      ]
    }
  ]
};

describe('QuizOptionList', () => {
  const renderQuizOptionList = (children: React.ReactNode) => {
    return render(<QuizOptionList>{children}</QuizOptionList>);
  };

  describe('rendering options', () => {
    it('should render quiz options correctly', () => {
      const questionOptions = MOCK_QUIZ.questions[0].options.map((option, index) => (
        <div key={index}>{option.text}</div>
      ));
      
      renderQuizOptionList(<>{questionOptions}</>);
      
      expect(screen.getByText(TEST_DATA.INCORRECT_ANSWER_1)).toBeInTheDocument();
      expect(screen.getByText(TEST_DATA.CORRECT_ANSWER_1)).toBeInTheDocument();
    });

    it('should maintain the correct order of options', () => {
      const questionOptions = MOCK_QUIZ.questions[0].options.map((option, index) => (
        <div key={index}>{option.text}</div>
      ));
      
      renderQuizOptionList(<>{questionOptions}</>);
      
      const options = screen.getAllByText(/do|make/);
      expect(options[0]).toHaveTextContent(TEST_DATA.INCORRECT_ANSWER_1);
      expect(options[1]).toHaveTextContent(TEST_DATA.CORRECT_ANSWER_1);
    });
  });

  describe('edge cases', () => {
    it('should handle empty options list', () => {
      const { container } = renderQuizOptionList(<></>);
      expect(container.firstChild).toBeInTheDocument();
      expect(container.firstChild?.childNodes).toHaveLength(0);
    });

    it('should handle single option', () => {
      const singleOption = <div>{MOCK_QUIZ.questions[0].options[0].text}</div>;
      renderQuizOptionList(singleOption);
      expect(screen.getByText(TEST_DATA.INCORRECT_ANSWER_1)).toBeInTheDocument();
    });
  });
});
