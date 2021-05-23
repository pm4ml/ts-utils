import readFileAsBase64 from './readFileAsBase64';
import readFileAsText from './readFileAsText';

function makeFile(content: string, name: string): File {
  return new File([new Blob([content])], name);
}

describe('tests the readFileAsBase64', () => {
  it('returns a promise', () => {
    const file = makeFile('test', 'file.dat');
    const type = readFileAsBase64(file);
    expect(type).toBeInstanceOf(Promise);
  });

  it('resolves the file content as base64', async () => {
    const file = makeFile('test', 'file.dat');
    const content = await readFileAsBase64(file);
    expect(content).toBe(`data:application/octet-stream;base64,${btoa('test')}`);
  });
});

describe('tests the readFileAsText', () => {
  it('returns a promise', () => {
    const file = makeFile('test', 'file.dat');
    const type = readFileAsText(file);
    expect(type).toBeInstanceOf(Promise);
  });

  it('resolves the file content as base64', async () => {
    const file = makeFile('test', 'file.dat');
    const content = await readFileAsText(file);
    expect(content).toBe('test');
  });
});
