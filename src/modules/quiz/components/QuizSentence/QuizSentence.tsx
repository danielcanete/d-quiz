interface QuizSentenceProps {
  children: React.ReactNode;
}

export const QuizSentence: React.FC<QuizSentenceProps> = ({
  children,
}) => (
  <h2 className="text-2xl mb-4 rounded-2xl p-4 border-2">
    {children}
  </h2>
);
