import { readdir, unlink } from 'fs/promises';
import { join } from 'path';

async function removeQuizzes(): Promise<void> {
  try {
    const dataDir = join(process.cwd(), 'public/data');
    const files = await readdir(dataDir);

    const deleteOperations = files
      .filter(file => file !== 'main.json')
      .map(file => unlink(join(dataDir, file)));

    await Promise.all(deleteOperations);
    console.log('All quiz files removed successfully');
  } catch (error) {
    console.error('Error removing quiz files:', error);
    throw error;
  }
}

removeQuizzes()
  .catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
