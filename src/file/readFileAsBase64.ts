import { TextFileContent } from './types';

function readFileAsBase64(file: File): Promise<TextFileContent> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => resolve(event?.target?.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}

export default readFileAsBase64;
