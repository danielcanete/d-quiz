import { useEffect, useState } from 'react';
import { Quiz } from '@modules/quiz/interfaces/quiz.interface';

interface UseQuizListReturn {
  quizList: Quiz[];
  loading: boolean;
  error: Error | null;
}

export function useQuizList(): UseQuizListReturn {
  const [quizList, setQuizList] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchQuizList = async () => {
      try {
        const response = await fetch('/data/quiz-list.json');
        if (!response.ok) throw new Error('Quiz list not found');
        const data = await response.json();
        setQuizList(data);
      } catch (error) {
        setError(error as Error);
        setQuizList([]);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizList();
  }, []);

  return { quizList, loading, error };
}
