import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useQuizGame } from './useQuizGame';
import { ValidatedQuiz } from '../../interfaces/quiz.interface';

describe('useQuizGame', () => {
  const MOCK_QUIZ: ValidatedQuiz = {
    id: 3,
    slug: 'application-test',
    title: 'Application test',
    questions: [
      {
        id: 1,
        sentence: '... a comparison',
        explanation: 'make a comparison',
        options: [
          { isCorrect: false, text: 'do' },
          { isCorrect: true, text: 'make (true)' },
        ],
      },
      {
        id: 2,
        sentence: '... a complaint',
        explanation: 'make a complaint',
        options: [
          { isCorrect: true, text: 'make (true)' },
          { isCorrect: false, text: 'do' },
        ],
      },
    ],
  };

  beforeEach(() => {
    global.fetch = vi.fn();
  });

  it('should fetch quiz data when a slug is provided', async () => {
    const mockFetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(MOCK_QUIZ),
    });
    global.fetch = mockFetch;

    const { result } = renderHook(() => useQuizGame('application-test'));

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(mockFetch).toHaveBeenCalledWith('/data/application-test.json');
    expect(result.current.quiz).toEqual(MOCK_QUIZ);
    expect(result.current.isStarted).toBe(true);
    expect(result.current.currentQuestion).toBe(0);
  });

  it('should handle fetch error when quiz is not found', async () => {
    const mockFetch = vi.fn().mockResolvedValueOnce({
      ok: false,
    });
    global.fetch = mockFetch;

    const { result } = renderHook(() => useQuizGame('invalid-slug'));

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(result.current.quiz).toBeNull();
  });

  it('should handle a correct answer', async () => {
    const mockFetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(MOCK_QUIZ),
    });
    global.fetch = mockFetch;

    const { result } = renderHook(() => useQuizGame('application-test'));

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    const correctAnswer = MOCK_QUIZ.questions[0].options[1]; // "make (true)"

    await act(() => {
      result.current.handleAnswer(correctAnswer);
    });

    expect(result.current.score).toBe(1);
    expect(result.current.mistakes).toBe(0);
    expect(result.current.showAnswer).toBe(true);
    expect(result.current.selectedAnswer).toEqual(correctAnswer);
  });

  it('should handle an incorrect answer', async () => {
    const mockFetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(MOCK_QUIZ),
    });
    global.fetch = mockFetch;

    const { result } = renderHook(() => useQuizGame('application-test'));

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    const incorrectAnswer = MOCK_QUIZ.questions[0].options[0]; // "do"

    await act(() => {
      result.current.handleAnswer(incorrectAnswer);
    });

    expect(result.current.score).toBe(0);
    expect(result.current.mistakes).toBe(1);
    expect(result.current.showAnswer).toBe(true);
    expect(result.current.selectedAnswer).toEqual(incorrectAnswer);
  });

  it('should move to the next question', async () => {
    const mockFetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(MOCK_QUIZ),
    });
    global.fetch = mockFetch;

    const { result } = renderHook(() => useQuizGame('application-test'));

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    await act(() => {
      result.current.nextQuestion();
    });

    expect(result.current.currentQuestion).toBe(1);
    expect(result.current.showAnswer).toBe(false);
    expect(result.current.selectedAnswer).toBeNull();
  });

  it('should show the modal when the last question is answered', async () => {
    const mockFetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(MOCK_QUIZ),
    });
    global.fetch = mockFetch;

    const { result } = renderHook(() => useQuizGame('application-test'));

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    await act(() => {
      result.current.nextQuestion();
    });

    await act(() => {
      result.current.handleAnswer(MOCK_QUIZ.questions[1].options[0]); // "make (true)"
    });

    await act(() => {
      result.current.nextQuestion();
    });

    expect(result.current.showModal).toBe(true);
  });

  it('should restart the quiz correctly', async () => {
    const mockFetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(MOCK_QUIZ),
    });
    global.fetch = mockFetch;

    const { result } = renderHook(() => useQuizGame('application-test'));

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    await act(() => {
      result.current.handleAnswer(MOCK_QUIZ.questions[0].options[1]); // Correct answer
      result.current.nextQuestion();
      result.current.handleAnswer(MOCK_QUIZ.questions[1].options[1]); // Incorrect answer
      result.current.nextQuestion();
    });

    await act(() => {
      result.current.restartQuiz();
    });

    expect(result.current).toEqual({
      quiz: MOCK_QUIZ,
      isStarted: true,
      currentQuestion: 0,
      score: 0,
      mistakes: 0,
      showAnswer: false,
      selectedAnswer: null,
      showModal: false,
      handleAnswer: expect.any(Function),
      nextQuestion: expect.any(Function),
      restartQuiz: expect.any(Function),
      setShowModal: expect.any(Function),
    });
  });
});
