export interface Quiz {
  id:        number;
  slug:      string;
  title:     string;
  questions?: Question[];
}

export interface ValidatedQuiz {
  id: number;
  slug: string;
  title: string;
  questions: Question[];
}

export interface Question {
  id:          number;
  sentence:    string;
  explanation: string;
  options:     Option[];
}

export interface Option {
  isCorrect: boolean;
  text:      Text;
}

export enum Text {
  Do = "do",
  Make = "make",
}
