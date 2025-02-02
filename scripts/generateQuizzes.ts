import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { Quiz } from '@modules/quiz/interfaces/quiz.interface';

async function processQuizFiles(): Promise<void> {
  try {
    const mainFilePath = join(process.cwd(), 'public/data/main.json');
    const rawData = await readFile(mainFilePath, 'utf8');
    const quizzes: Quiz[] = JSON.parse(rawData);

    const writeOperations = quizzes.map(async (quiz) => {
      const quizFilePath = join(process.cwd(), `public/data/${quiz.slug}.json`);
      await writeFile(quizFilePath, JSON.stringify(quiz, null, 2));
      return {
        id: quiz.id,
        slug: quiz.slug,
        title: quiz.title,
      };
    });

    const quizList = await Promise.all(writeOperations);
    const quizListPath = join(process.cwd(), 'public/data/quiz-list.json');
    await writeFile(quizListPath, JSON.stringify(quizList, null, 2));

    console.log('All files processed successfully');
  } catch (error) {
    console.error('Error processing files:', error);
    throw error;
  }
}

processQuizFiles()
  .catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
