import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useQuizList } from './useQuizList';
import { Quiz } from '../../interfaces/quiz.interface';

describe('useQuizList', () => {
  const MOCK_QUIZ_LIST: Quiz[] = [
    {
      id: 1,
      slug: 'quiz-1',
      title: 'Quiz 1',
      questions: [],
    },
    {
      id: 2,
      slug: 'quiz-2',
      title: 'Quiz 2',
      questions: [],
    },
  ];

  beforeEach(() => {
    global.fetch = vi.fn();
  });

  it('should initialize with default values', () => {
    const { result } = renderHook(() => useQuizList());

    expect(result.current).toEqual({
      quizList: [],
      loading: true,
      error: null,
    });
  });

  it('should fetch quiz list successfully', async () => {
    const mockFetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(MOCK_QUIZ_LIST),
    });
    global.fetch = mockFetch;

    const { result } = renderHook(() => useQuizList());

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(mockFetch).toHaveBeenCalledWith('/data/quiz-list.json');
    expect(result.current.quizList).toEqual(MOCK_QUIZ_LIST);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('should handle fetch error', async () => {
    const mockFetch = vi.fn().mockResolvedValueOnce({
      ok: false,
    });
    global.fetch = mockFetch;

    const { result } = renderHook(() => useQuizList());

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(result.current.quizList).toEqual([]);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toEqual(new Error('Quiz list not found'));
  });

  it('should set loading to false after fetch completes', async () => {
    const mockFetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(MOCK_QUIZ_LIST),
    });
    global.fetch = mockFetch;

    const { result } = renderHook(() => useQuizList());

    expect(result.current.loading).toBe(true);

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(result.current.loading).toBe(false);
  });

  it('should handle network errors', async () => {
    const mockFetch = vi.fn().mockRejectedValueOnce(new Error('Network error'));
    global.fetch = mockFetch;

    const { result } = renderHook(() => useQuizList());

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(result.current.quizList).toEqual([]);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toEqual(new Error('Network error'));
  });
});
