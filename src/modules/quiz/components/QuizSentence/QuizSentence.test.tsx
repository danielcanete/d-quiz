import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { QuizSentence } from './QuizSentence';

describe('QuizSentence', () => {
  const TEST_DATA = {
    SENTENCE: 'This is a sample sentence.',
  };

  const renderComponent = (children: React.ReactNode) => {
    return render(<QuizSentence>{children}</QuizSentence>);
  };

  it('renders the children correctly', () => {
    const sentence = TEST_DATA.SENTENCE;
    renderComponent(sentence);
    expect(screen.getByText(sentence)).toBeInTheDocument();
  });
});
