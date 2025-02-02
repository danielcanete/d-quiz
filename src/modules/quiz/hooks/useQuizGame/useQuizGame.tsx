import { useState, useEffect } from 'react';
import { Option, Quiz } from '@modules/quiz/interfaces/quiz.interface';

export function useQuizGame(slug: string | undefined) {
  const [quiz, setQuiz] = useState<null | Quiz>();
  const [isStarted, setIsStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<Option | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!slug) return;
    const fetchQuiz = async () => {
      try {
        const response = await fetch(`/data/${slug}.json`);
        if (!response.ok) throw new Error('Quiz not found');
        const data = await response.json();
        setQuiz(data);
      } catch (error) {
        setQuiz(null);
      }
    };

    fetchQuiz();
  }, [slug]);

  useEffect(() => {
    if (!isStarted && quiz) return;
    setCurrentQuestion(0);
    setIsStarted(true);
  }, [isStarted, quiz]);

  const handleAnswer = (answer: Option) => {
    setSelectedAnswer(answer);
    setShowAnswer(true);
    if (answer.isCorrect) {
      setScore(score + 1);
    } else {
      setMistakes(mistakes + 1);
    }
  };

  const nextQuestion = () => {
    if (!quiz?.questions) return;
    if (currentQuestion !== null && currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowAnswer(false);
      setSelectedAnswer(null);
    } else {
      setShowModal(true);
    }
  };

  const restartQuiz = () => {
    setIsStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setMistakes(0);
    setShowAnswer(false);
    setSelectedAnswer(null);
    setShowModal(false);
  };

  return {
    quiz,
    isStarted,
    currentQuestion,
    score,
    mistakes,
    showAnswer,
    selectedAnswer,
    showModal,
    handleAnswer,
    nextQuestion,
    restartQuiz,
    setShowModal
  };
}
