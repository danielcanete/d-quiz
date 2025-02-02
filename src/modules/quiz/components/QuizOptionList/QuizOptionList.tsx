interface QuizOptionListProps {
  children: React.ReactNode;
}

export const QuizOptionList: React.FC<QuizOptionListProps> = ({
  children,
}) => (
  <div data-test-id="quiz-option-list" className="grid grid-cols-2 gap-4">
    {children}
  </div>
);
