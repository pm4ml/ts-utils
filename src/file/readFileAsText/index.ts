import { TextFileContent } from '../types';

function readFileAsText(file: File): Promise<TextFileContent> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => resolve(event?.target?.result);
    reader.onerror = (error) => reject(error);
    reader.readAsText(file);
  });
}

export default readFileAsText;
