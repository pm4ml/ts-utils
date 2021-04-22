import { TextFileContent } from './types';
import readFileAsText from './readFileAsText';

async function loadFile(accept = ''): Promise<TextFileContent> {
  return new Promise((resolve, reject) => {
    const fileSelector = document.createElement('input');
    const handleFileChange = async (evt: Event) => {
      const target = evt.target as HTMLInputElement;
      const [file] = Array.from(target.files || []);
      await readFileAsText(file).then(resolve).catch(reject);
      fileSelector.removeEventListener('change', handleFileChange, false);
      document.body.removeChild(fileSelector);
    };
    fileSelector.setAttribute('type', 'file');
    fileSelector.setAttribute('accept', accept);
    document.body.appendChild(fileSelector);

    fileSelector.addEventListener('change', handleFileChange, false);
    fileSelector.click();
  });
}

export default loadFile;
