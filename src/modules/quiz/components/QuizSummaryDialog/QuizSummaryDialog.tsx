import React, { createContext, useContext } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@shared/components/ui/dialog';

interface QuizSummaryDialogContextType {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface QuizSummaryDialogProps extends QuizSummaryDialogContextType {
  children: React.ReactNode;
}

interface QuizSummaryDialogScoreProps {
  children: React.ReactNode;
}

interface QuizSummaryDialogMistakesProps {
  children: React.ReactNode;
}

interface QuizSummaryDialogFooterProps {
  children: React.ReactNode;
}

const QuizSummaryDialogContext = createContext<QuizSummaryDialogContextType | null>(null);

const useQuizSummaryDialog = () => {
  const context = useContext(QuizSummaryDialogContext);
  if (!context) {
    throw new Error('QuizSummaryDialog components must be used within QuizSummaryDialog');
  }
  return context;
};

// Main component
export const QuizSummaryDialog: React.FC<QuizSummaryDialogProps> = ({
  children,
  open,
  onOpenChange,
}) => {
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
export const QuizSummaryDialogScore: React.FC<QuizSummaryDialogScoreProps> = ({ children }) => {
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
export const QuizSummaryDialogMistakes: React.FC<QuizSummaryDialogMistakesProps> = ({ children }) => {
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
export const QuizSummaryDialogFooter: React.FC<QuizSummaryDialogFooterProps> = ({ children }) => {
  useQuizSummaryDialog();
  return (
    <div className="flex justify-center space-x-4">
      {children}
    </div>
  );
};
