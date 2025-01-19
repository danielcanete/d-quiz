import React, { createContext, useContext } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@shared/components/ui/dialog';

const QuizSummaryDialogContext = createContext<{
  open: boolean;
  onOpenChange: (open: boolean) => void;
} | null>(null);

const useQuizSummaryDialog = () => {
  const context = useContext(QuizSummaryDialogContext);
  if (!context) {
    throw new Error('QuizSummaryDialog components must be used within QuizSummaryDialog');
  }
  return context;
};

// Main component
const QuizSummaryDialog: React.FC<{
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}> = ({ children, open, onOpenChange }) => {
  return (
    <QuizSummaryDialogContext.Provider value={{ open, onOpenChange }}>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent
          className="bg-white p-6 rounded-xl"
          onPointerDownOutside={(e) => e.preventDefault()}
        >
          <DialogHeader>
            <DialogTitle className="text-3xl text-center mb-4">
              Quiz Complete! 🎉
            </DialogTitle>
            <DialogDescription className="text-center text-gray-600">
              Here's your quiz summary and results
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            {children}
          </div>
        </DialogContent>
      </Dialog>
    </QuizSummaryDialogContext.Provider>
  );
};

// Score component
const QuizSummaryDialogScore: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  useQuizSummaryDialog();
  return (
    <div className="text-center space-y-4">
      <p className="text-xl">
        Correct Answers:{" "}
        <span className="font-bold text-green-600">{children}</span>
      </p>
    </div>
  );
};

// Mistakes component
const QuizSummaryDialogMistakes: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  useQuizSummaryDialog();
  return (
    <div className="text-center space-y-4">
      <p className="text-xl">
        Mistakes:{" "}
        <span className="font-bold text-red-600">{children}</span>
      </p>
    </div>
  );
};

// Footer component
const QuizSummaryDialogFooter: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  useQuizSummaryDialog();
  return (
    <div className="flex justify-center space-x-4">
      {children}
    </div>
  );
};

export {
  QuizSummaryDialog,
  QuizSummaryDialogScore,
  QuizSummaryDialogMistakes,
  QuizSummaryDialogFooter,
};
